import { createClient } from 'redis';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../../shared/errors/appError';
import * as dotenv from 'dotenv';

dotenv.config();

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT),
  },
});

redisClient.connect().catch(console.error);

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'rateLimiterMiddleware',
  points: 5,
  duration: 1,
  useRedisPackage: true,
});

export default async function rateLimiterMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    await limiter.consume(req.ip);
    return next();
  } catch (err) {
    throw new AppError('Too Many Requests');
  }
}
