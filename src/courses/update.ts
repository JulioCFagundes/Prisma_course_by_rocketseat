import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()
async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "c5637686-fae1-4822-ba27-d825c74231bc"
        },
        data: {
            duration: 300
        }
    });

    return result;

};
main();
//no data eu seto todas as informações que eu quero atualizar; então dou update => (where, data)
