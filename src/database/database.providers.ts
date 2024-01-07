/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import "dotenv/config";

export const databaseProviders = [
  {
    provide: process.env.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.URL),
  },
];