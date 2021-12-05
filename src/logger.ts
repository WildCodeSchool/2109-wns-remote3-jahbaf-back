import winston, { format } from 'winston';

export const errorLogger = winston.createLogger({
    level: 'error',
    silent: process.env.NODE_ENV === 'test',
    format: format.combine(
        format.timestamp(),
        format.prettyPrint()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

export const consoleLogger = winston.createLogger({
    level: 'info',
    silent: process.env.NODE_ENV === 'production',
    format: format.combine(
        format.timestamp(),
        format.prettyPrint()
    ),
    transports: [
        new winston.transports.Console()
    ]
});

export const accessLogger = winston.createLogger({
    level: 'info',
    silent: process.env.NODE_ENV === 'test',
    format: format.combine(
        format.timestamp(),
        format.prettyPrint()
    ),
    transports: [
        new winston.transports.File({ filename: 'access.log', level: 'info' }),
    ],
});
