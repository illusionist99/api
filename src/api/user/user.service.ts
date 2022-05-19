import { HttpException, Injectable } from '@nestjs/common';
import { resolve } from 'path';
import { User } from './user.entity';
import { USERS } from './users.mock';

@Injectable()
export class UserService {

    Users = USERS;

    getUsers(): Promise<any> {
    
        return new Promise(resolve => {
            resolve(this.Users);
        });
    }

    getUser(UserId): Promise<any> {
    
        let id = Number(UserId);
        console.log(id);
        return new Promise(resolve => {

            const user = this.Users.find(user => user.id === id);

            if (!user) {
            
                throw new HttpException('User Not Found', 404);
            }
            resolve(user);
        });
    }

    addUser(User): Promise<any> {
    
        return new Promise(resolve => {

            this.Users.push(User);
            resolve(this.Users);
        });
    }
    deleteUser(UserId): Promise<any> {
    
        let id = Number(UserId);
    
        return new Promise( resolve => {
        
                let index = this.Users.findIndex(user => user.id === id);
                if (index === -1) {
                    throw new HttpException("User does not exist", 404);
                }
                this.Users.splice(index, 1);
                resolve(this.Users);
        });
    }
}
