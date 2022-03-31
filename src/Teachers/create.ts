import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

async function main() {
    const result = await prisma.teachers.create({
        data: {
            name: "Curso de JAva",


        }
    });
    console.log(result);
    return result
}

main();

//para rodar é só mandar o ts-node-dev <path> (agora o path é src/create.ts)