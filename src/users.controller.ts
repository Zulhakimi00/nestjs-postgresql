import { Controller, Get } from '@nestjs/common';
import { UserService } from './user/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async findAll() {
    return this.usersService.getUsers();
  }

  // @Get(':id')
  // async findById(@Param('id') id: number) {
  //   return this.usersService.findById(id);
  // }

  // @Post('find')
  // async findByEmail(@Body() request: { email: string }) {
  //   return this.usersService.findByEmail(request);
  // }
}
