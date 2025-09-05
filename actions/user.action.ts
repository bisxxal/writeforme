'use server'

import { authOptions } from "@/lib/auth"
import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"

export const userProfile = async () => {
    try {
        const session = await getServerSession(authOptions)
        if (!session) {
            return { status: 400, message: "User not authenticated" };
        }

        const user = await prisma.user.findUnique({
            where: {
                email: session.user?.email || ''
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                createdAt: true, 
            }
        })

        if (!user) {
            return { status: 404, message: "User not found" };
        }

        return { status: 200, user };

    } catch (error) {
        console.log(error)
        return { status: 500, message: 'Something went wrong' }
    }
}