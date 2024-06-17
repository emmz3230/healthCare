"use server"
import prisma from "@/db"
import { getServerSession } from "next-auth"
import authOptions from "../lib/auth"

export const getUserId = async()=>{
    const session = await getServerSession(authOptions)
    if(session?.user.email){
        const user = await prisma.user.findFirst({
            where:{
                email:session?.user.email
            }
        })
        return user?.id
    }
}

export const getbmi = async()=>{
    const id = await getUserId()
    if(id){
        const BMI = await prisma.bMI.findMany({
            where:{
                userId: id
            }
        })
        return BMI
    }
}