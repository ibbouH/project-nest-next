/* eslint-disable prettier/prettier */
import { OwnerSchema } from "src/schemas/owner.schema";
import  { Connection } from "mongoose";

export const ownersProviders = [
    {
        provide: 'OWNER_MODEL',
        useFactory: (connection: Connection) => connection.model('Owner', OwnerSchema),
        inject: ['DATABASE_CONNECTION']
    }
]