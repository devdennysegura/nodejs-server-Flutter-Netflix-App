import { format, createLogger, transports } from 'winston';
import * as config from 'config';
import * as packageJson from '../../../package.json';

const SERVER_LOGGER = 'server';
const { combine, timestamp, label, printf, align, colorize } = format;
const name = (packageJson as any).name;
const { env } = config.get(SERVER_LOGGER);
const loggerFormat: string = printf((info: any) => {
    return `[${info.level}] ${info.timestamp} [${name} ${env}-mode]: ${info.message}`;
});
const winstonConfig = {
    format: combine(
        label({ label: 'right meow!' }),
        timestamp(),
        colorize(),
        loggerFormat
    ),
    level: 'info',
    transports: [
        new transports.Console({
            level: env === 'development' ? 'debug' : 'info',
            colorize: true
        })
    ]
};
export const logger = createLogger(winstonConfig);
