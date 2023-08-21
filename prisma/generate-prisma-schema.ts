/* eslint-disable @typescript-eslint/no-var-requires */
import * as fs from "fs";
import * as path from "path";
const path = require('path');

const schemaPrismaFileName = 'schema.prisma';
const prismaDirectory = path.join('prisma/');
const modelsDirectory = path.join('prisma/models/');

const main = () => {
  //+++++++ Write Prisma Config +++++++ //
  fs.readFile(prismaDirectory + 'config.prisma', 'utf-8', (Err, Data) => {
    fs.writeFileSync(
      prismaDirectory + schemaPrismaFileName,
      Data + '\n\n\n\n\n\n\n',
    );
  });
  //-------- END Write Prisma Config ------- //

  //+++++++ Write Prisma models +++++++ //

  fs.readdir(modelsDirectory, (err, files) => {
    files.forEach((file) => {
      fs.readFile(modelsDirectory + file, 'utf-8', (Err, Data) => {
        fs.appendFileSync(
          prismaDirectory + schemaPrismaFileName,
          Data + '\n\n',
        );
      });
    });
  });
  //-------- END Write Prisma models ------- //
};

main();
