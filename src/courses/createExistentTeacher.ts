import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React",
            duration: 500,
            description: "este é um curso de React",
            teacher: {
                connect: {
                    id: "521bee89-9bbd-4053-9b13-2e97fc89d82b"
                }
            }


        }
    });
    console.log(result);
    return result
}

main();

//para rodar é só mandar o ts-node-dev <path> (agora o path é src/create.ts)