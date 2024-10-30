import {Injectable, NestMiddleware} from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(`================>`);
    console.log(`[${req.method}] ${res.statusCode} ${new Date().toISOString()} ${req.originalUrl}`);

    next();
  }
}
