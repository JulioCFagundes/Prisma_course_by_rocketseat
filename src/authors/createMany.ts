import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function main() {
    const result = await prismaClient.authors.create({
        data: {
            name: "Mayk",
            books: {
                createMany: {
                    data: [
                        { name: "Como começar na programação" },
                        { name: "Como ser produtivo" },
                    ]

                }
            }
        }

    });
    console.log(result)
    return result
};

main();