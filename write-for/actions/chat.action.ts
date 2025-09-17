'use server'

import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export const createChartparticipent = async (receiverId: string) => {
    try {

        const session = await getServerSession(authOptions)
        if (!session || !session.user) {
            return JSON.parse(JSON.stringify({ status: 500, message: 'Not authorized user' }));
        } 

        const existingChat = await prisma.chat.findFirst({
            where: {
                participants: {
                    some: {
                        userId: session.user.id,
                    },
                },
            },
            include: {
                participants: true,
            },
        });

        if (existingChat) {
            console.log('Existing chat found:', existingChat);
            return JSON.parse(JSON.stringify({ chatId: existingChat.id }));
        }
        const chat = await prisma.chat.create({
            data: {
                participants: {
                    create: [
                        { user: { connect: { id: session?.user?.id } } },
                        { user: { connect: { id: receiverId } } },
                    ],
                },
            },
        });

        console.log(chat)

        return JSON.parse(JSON.stringify({ chatId: chat.id }));

    } catch (error) {

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
          include:{
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

// export const deleteAllMessages = async (chatId: string) => {
//     try {
//         const res = await prisma.message.deleteMany({
//             where: {
//                 chatId
//             }
//         })
//         if (!res) {
//             return JSON.parse(JSON.stringify({ res: false }));
//         }
//         return JSON.parse(JSON.stringify({ res: true }));
//     } catch (error) {
//  return JSON.parse(JSON.stringify({ status: false }));
//     }
// }

export const deleteSelectMessages = async (messageId:string[]) => {
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