import {directoryCreator, fileCopierSync } from "./src/utils/directory.util";
import * as path from "path";

directoryCreator("logs");
directoryCreator("files");
directoryCreator("public");
fileCopierSync(path.join(__dirname, ".env-example"), path.join(__dirname, ".env"));

import App from "./src/app";
new App();