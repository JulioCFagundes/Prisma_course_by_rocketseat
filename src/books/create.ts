import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function main() {
    const result = await prismaClient.books.create({
        data: {
            name: "Arquitetura limpa",
            author_id: "53fda124-9f65-4084-836d-047f9c203c71"

        }

    });
    console.log(result)
    return result
};

main();