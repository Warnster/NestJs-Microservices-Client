import {Body, Controller, Logger, Post} from '@nestjs/common';
import {AuthService} from "../../services/auth.service";
import {UserClass, UserCreateDto} from "../../classes/user.class";
import { MessagePattern } from "@nestjs/microservices";

@Controller('auth')
export class AuthController {
    private logger = new Logger("AuthController");

    constructor(private authService: AuthService) {}

    //@Post('register')
    //Desfines the message pattern for this method
    @Post('register')
    async register(@Body() user: UserCreateDto) {
        this.logger.log("Registering a New User" + user.toString());
        let userClass: UserClass = await this.authService.register(user);
        console.log("statement after promise")
        return userClass;
    }

}
