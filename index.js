"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
require("colors");
class Log {
    static getSource(src) {
        return (src === null || src === void 0 ? void 0 : src.toUpperCase()) || "APP";
    }
    static toHHMMSS(date = new Date()) {
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }
    static styledLog(message, src, type) {
        console.log(`[${this.toHHMMSS()}] ${type} [${src}] ${message}`);
    }
    static info(message, src) {
        this.styledLog(message, this.getSource(src), "INFO".cyan.bold);
    }
    static error(error, src) {
        this.styledLog(error.message || "Unknown, or unable to locate error.", this.getSource(src), "ERROR".red.bold);
    }
    static rainbowLog(message, type, src) {
        this.styledLog(message, this.getSource(src), type.rainbow.bold);
    }
    static success(message, src) {
        this.styledLog(message, this.getSource(src), "SUCCESS".green.bold);
    }
    static warning(message, src) {
        this.styledLog(message, this.getSource(src), "WARNING".yellow.bold);
    }
    static custom(message, type, src) {
        this.styledLog(message, this.getSource(src), type.toUpperCase());
    }
}
exports.Log = Log;
