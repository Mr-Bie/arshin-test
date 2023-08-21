// Dependencies
import * as fs from "fs";
import * as path from "path";
import logger from "../services/logger.service";

export const directoryCreator = (...paths: string[]) => {
  if (!fs.existsSync(path.join(...paths))) {
    fs.mkdir(path.join(...paths), (err) => {
      err
          ? logger.error(err)
          : logger.info(paths.join("/") + " Directory Created!");
    });
  }
};

export const directoryCreatorSync = (...paths: string[]) => {
    if (!fs.existsSync(path.join(...paths))) {
      fs.mkdirSync(path.join(...paths));
      logger.info(paths.join("/") + " Directory Created!");
    }
};

export const fileCreator = (...paths: string[]) => {
  if (!fs.existsSync(path.join(...paths))) {
    fs.open(path.join(...paths), "wx", (err) => {
      err
          ? logger.error(err)
          : logger.info(paths.join("") + " File Created!");
    });
  }
};

export const fileCreatorSync = (...paths: string[]) => {
  const exists = fs.existsSync(path.join(...paths));
  if (!exists) {
    fs.openSync(path.join(...paths), "wx");
    logger.info(paths.join(",").toString() + " File Created!");
  }
};

export const fileCopierSync = (fileToCopy: string, pathToCopy: string, force: boolean = false) => {
  const fileToCopyExist = fs.existsSync(path.join(fileToCopy));
  if (!fileToCopyExist) return;
  const fileToCreateExist = fs.existsSync(path.join(pathToCopy));
  if (!fileToCreateExist || force) {
    try {
      fs.copyFileSync(path.resolve(fileToCopy), path.resolve(pathToCopy));
      logger.info(`${pathToCopy} File Created From ${fileToCopy}`);
    } catch (err) {
      logger.error(`Error in ${fileToCopy} File Creation From ${pathToCopy}`);
    }
  }
  /*  const exists = fs.existsSync(path.join(...paths));
  if (!exists) {
    fs.openSync(path.join(...paths), "wx");
    logger.info(paths.join("/"), " File Created!");
  }*/
};