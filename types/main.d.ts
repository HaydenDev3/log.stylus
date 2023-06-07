declare module "log.stylus" {
  export class Log {
    static info(message: string, src?: string): void;
    static error(error: Error, src?: string): void;
    static success(message: string, src?: string): void;
    static warning(message: string, src?: string): void;
    static custom(message: string, type: string, src?: string): void;
  }
}
