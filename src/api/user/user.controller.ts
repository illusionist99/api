import { Body, Controller, Get, Param, Post, Query, Delete } from '@nestjs/common';
import { query } from 'express';
import { DeleteDateColumn } from 'typeorm';
import { UserService } from './user.service';
import { createUserDto } from './user.dto';

@Controller('users')
export class UserController {

    constructor( private UserService: UserService) {}

    @Get()
    async getUsers() {
    
        const Users = await this.UserService.getUsers();
        return Users;
    }

    @Get(':userId')
    async getUser(@Param('userId') userId) {
    
        const User = await this.UserService.getUser(userId);
        return User;
    }

    @Post()
    async addUser(@Body() createUserDto: createUserDto) {
    
        const User = await this.UserService.addUser(createUserDto);
    
        return User;
    }

    @Delete()
    async deleteUser(@Query() query) {
    
        const Users = await this.UserService.deleteUser(query.UserId);
        return Users;
    }
}
