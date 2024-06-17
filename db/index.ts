import { PrismaClient } from "@prisma/client";


const PrismaClientSingleton = ()=>{
    return new PrismaClient()
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof PrismaClientSingleton>
}

export const prisma: ReturnType<typeof PrismaClientSingleton> = globalThis.prismaGlobal ?? PrismaClientSingleton();


if(process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;