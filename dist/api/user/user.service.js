"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const users_mock_1 = require("./users.mock");
let UserService = class UserService {
    constructor() {
        this.Users = users_mock_1.USERS;
    }
    getUsers() {
        return new Promise(resolve => {
            resolve(this.Users);
        });
    }
    getUser(UserId) {
        let id = Number(UserId);
        console.log(id);
        return new Promise(resolve => {
            const user = this.Users.find(user => user.id === id);
            if (!user) {
                throw new common_1.HttpException('User Not Found', 404);
            }
            resolve(user);
        });
    }
    addUser(User) {
        return new Promise(resolve => {
            this.Users.push(User);
            resolve(this.Users);
        });
    }
    deleteUser(UserId) {
        let id = Number(UserId);
        return new Promise(resolve => {
            let index = this.Users.findIndex(user => user.id === id);
            if (index === -1) {
                throw new common_1.HttpException("User does not exist", 404);
            }
            this.Users.splice(index, 1);
            resolve(this.Users);
        });
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map