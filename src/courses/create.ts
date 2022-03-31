import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de JAva",
            duration: 500,
            description: "este é um curso de Java",
            teacher: {
                connectOrCreate: {
                    where: {
                        name: "Adalton"
                    },
                    create: {
                        name: "Adalton"
                    }
                }
            }

        }
    });
    console.log(result);
    return result
}

main();

//para rodar é só mandar o ts-node-dev <path> (agora o path é src/create.ts)