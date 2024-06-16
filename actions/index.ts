"use server"
import { authOptions } from "@/app/lib/auth";
import prisma from "@/db";
import { log } from "console";
import { getServerSession } from "next-auth";

export const updateBmiValue = async (bmi)=>{
        const session = await getServerSession(authOptions)
        console.log(session)
        const response = await prisma.bMI.create({
            data:{
                bmi: bmi,
                date: new Date(),
                userId: 2
            }
        })
        console.log("bmi added to user successfully");
        return response;
}