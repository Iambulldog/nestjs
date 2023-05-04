import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { TicketModule } from './ticket/ticket.module';
import { Ticket } from './ticket/entities/ticket.entity';
import { CategoryModule } from './category/category.module';
import { ticket_to_category } from 'entity/ticket_to_category.entity';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: process.env.DB_username,
      password: process.env.DB_password,
      database: process.env.DB_database,
      entities: [User, Ticket, Category, ticket_to_category],
      synchronize: true,
    }),
    UserModule,
    TicketModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
