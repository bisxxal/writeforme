'use server'

import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

// export const createChatParticipant = async (receiverId: string) => {
//     try {
//         const session = await getServerSession(authOptions)
//         if (!session || !session.user) {
//             return JSON.parse(JSON.stringify({ status: 500, message: 'Not authorized user' }));
//         }

//         const existingChat = await prisma.chat.findFirst({
//             where: {
//                 participants: {
//                     some: {
//                         AND: [
//                             { userId: session.user.id },
//                             { userId: receiverId }
//                         ]
//                     },
//                 },
//             },
//             include: {
//                 participants: true,
//             },
//         });

//         if (existingChat) {
//             console.log('Existing chat found:', existingChat);
//             return JSON.parse(JSON.stringify({ chatId: existingChat.id }));
//         }
//         const chat = await prisma.chat.create({
//             data: {
//                 participants: {
//                     create: [
//                         { user: { connect: { id: session?.user?.id } } },
//                         { user: { connect: { id: receiverId } } },
//                     ],
//                 },
//             },
//         });
//         return JSON.parse(JSON.stringify({ chatId: chat.id }));

//     } catch (error) {

//     }
// }

export const createChatParticipant = async (receiverId: string) => {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            return { status: 500, message: 'Not authorized user' };
        }

        const currentUserId = session.user.id;

        // Find existing chat with exactly these two users
        const existingChat = await prisma.chat.findFirst({
            where: {
                participants: {
                    every: {
                        userId: {
                            in: [currentUserId, receiverId],
                        },
                    },
                    // Ensures total participant count is 2
                    some: {
                        userId: currentUserId,
                    },
                },
            },
            include: {
                participants: true,
            },
        });

        // Additional check to ensure only two participants
        if (existingChat && existingChat.participants.length === 2) {
            const hasBothUsers = existingChat.participants.some(p => p.userId === currentUserId)
                && existingChat.participants.some(p => p.userId === receiverId);
            if (hasBothUsers) {
                console.log('Existing chat found:', existingChat.id);
                return { chatId: existingChat.id };
            }
        }

        // If no chat exists, create a new one
        const chat = await prisma.chat.create({
            data: {
                participants: {
                    create: [
                        { user: { connect: { id: currentUserId } } },
                        { user: { connect: { id: receiverId } } },
                    ],
                },
            },
        });

        console.log(chat);
        return { chatId: chat.id };

    } catch (error) {
        console.error('Error creating or fetching chat:', error);
        return { status: 500, message: 'Internal server error' };
    }
}


export const getChatUsers = async () => {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user) {
            return JSON.parse(JSON.stringify({ status: 500, message: 'Not authorized user' }));
        }

        const chats = await prisma.chatParticipant.findMany({
            where: { userId: session.user.id },
            include: {
                // user: true,
                chat: {
                    select: {
                        messages: {
                            orderBy: {
                                createdAt: 'desc'
                            },
                            select: {
                                content: true,
                                createdAt: true,
                            },
                            take: 1
                        },
                        participants: {
                            where: {
                                userId: { not: session.user.id }
                            },
                            select: {
                                user: {
                                    select: {
                                        name: true,
                                        id: true,
                                        image: true,
                                    }
                                }
                            }
                        },
                    }

                }
            }
        })

        return JSON.parse(JSON.stringify(chats));
    } catch (error) {

    }
}



export const deleteSelectMessages = async (messageId: string[]) => {
    try {
        const res = await prisma.message.deleteMany({
            where: {
                id: {
                    in: messageId
                }
            }
        })
        if (!res) {
            return JSON.parse(JSON.stringify({ status: false }));
        }

        return JSON.parse(JSON.stringify({ status: true }));
    } catch (error) {
        return JSON.parse(JSON.stringify({ status: false }));
    }
}