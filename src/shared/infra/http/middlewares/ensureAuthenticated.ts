import { NextFunction, Request, Response } from 'express';
import { UsersRepository } from '../../../../modules/accounts/infra/typeorm/repositories/usersRepository';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../../errors/appError';
import * as dotenv from 'dotenv';

dotenv.config();

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, process.env.JWT_TOKEN) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 401);
    }

    request.user = { id: user_id };

    next();
  } catch (error) {
    throw new AppError('Invalid token!', 401);
  }
}
