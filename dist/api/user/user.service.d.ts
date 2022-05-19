export declare class UserService {
    Users: {
        id: number;
        login: string;
        status: string;
        apiToken: string;
        email: string;
        username: string;
    }[];
    getUsers(): Promise<any>;
    getUser(UserId: any): Promise<any>;
    addUser(User: any): Promise<any>;
    deleteUser(UserId: any): Promise<any>;
}
