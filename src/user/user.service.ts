import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IUser } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UserRepo: Repository<User>,
  ) {}

  create(data: IUser) {
    // const d: IUser[] = [data, data]; ตย. บันทึกหลายตัว
    return this.UserRepo.save(data);
  }

  findAll(): Promise<User[]> {
    return this.UserRepo.find({ relations: ['tickets', 'tickets.categories'] });
  }

  findOne(id: number): Promise<User> {
    return this.UserRepo.findOne({ where: { id }, relations: ['tickets'] });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
