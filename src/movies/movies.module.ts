import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import {PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [MoviesController],
  providers: [PrismaService],
})
export class MoviesModule {}
