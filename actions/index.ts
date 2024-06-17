"use server";
import authOptions from "@/app/lib/auth";
import db from "@/db";
import prisma from "@/db";
import { getServerSession } from "next-auth";

export const updateBmiValue = async (bmi: number, userId: number) => {
  console.log("start api req");
    if(userId){
        try {
          await db.bMI.create({
            data: {
              bmi: bmi,
              date: new Date(),
              userId: userId,
            },
          });
          console.log("BMI added to user successfully");
        } catch (error) {
          console.error("BMI not added to user successfully", error);
        }
    }else{
        console.error("User not found");
    }
};