// Dependencies
import * as winston from "winston";
import {FileTransportOptions} from "winston/lib/winston/transports";

// Define your severity levels.
// With them, You can create log files,
// see or hide levels based on the running ENV.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

type LevelType = keyof typeof levels;

// This method set the current severity based on
// the current NODE_ENV: show all the log levels
// if the server was run in development mode; otherwise,
// if it was run in production, show only warn and error messages.
const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

// Define different colors for each level.
// Colors make the log message more visible,
// adding the ability to focus or ignore messages.
const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};

// Tell winston that you want to link the colors
// defined above to the severity levels.
winston.addColors(colors);

// Chose the aspect of your log customizing the log format.
const format = winston.format.combine(
    // Add the message timestamp with the preferred format
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    // Define the format of the message showing the timestamp, the level and the message
    winston.format.printf(
        (i) =>
            `${i.level.toString().toUpperCase()} : ${[
              i.timestamp === "timestamp" ? ":" : i.timestamp + " : ",
            ]}'${i.message}'`
    )
);

// Define which transports the logger must use to print out messages.
// In this example, we are using three different transports
const transports = [
  new winston.transports.Console({
    level: "debug",
    handleRejections: true,
    handleExceptions: true,
  }),
  new winston.transports.File({
    filename: "logs/http.log",
    level: "http",
    levelOnly: true,
  } as FileTransportOptions),
  new winston.transports.File({
    filename: "logs/info.log",
    level: "info",
    levelOnly: true,
  } as FileTransportOptions),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "warn",
  }),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
    handleRejections: true,
    handleExceptions: true,
  })
];

// Create the logger instance and export it
// and used to log messages.
export default winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});
