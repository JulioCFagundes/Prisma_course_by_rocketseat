import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

async function main() {
    const result = await prismaClient.authors.create({
        data: {
            name: "Robert C. Martin",

        }

    });
    console.log(result)
    return result
};

main();