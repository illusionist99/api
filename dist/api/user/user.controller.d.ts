import { UserService } from './user.service';
import { createUserDto } from './user.dto';
export declare class UserController {
    private UserService;
    constructor(UserService: UserService);
    getUsers(): Promise<any>;
    getUser(userId: any): Promise<any>;
    addUser(createUserDto: createUserDto): Promise<any>;
    deleteUser(query: any): Promise<any>;
}
