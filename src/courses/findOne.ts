import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    //SELECT * FROM courses LIMIT 1 (retorna o primeiro curso)
    const course = await prisma.courses.findFirst();
    console.log(course)
    return course
}

main()

//para rodar é só mandar o ts-node-dev <path> (agora o path é src/findOne.ts)
//await prisma.courses.findFirst() vai pegar o primeiro registro listado na table
//para pegar o último registro criado usamos prisma.courses.findFirst({ take: -1 })