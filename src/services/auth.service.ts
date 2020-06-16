import { Injectable } from "@nestjs/common";
import {ClientOptions, ClientProxy, ClientProxyFactory, RedisOptions, Transport} from "@nestjs/microservices";
import {UserClass, UserCreateDto} from "../classes/user.class";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
    private client: ClientProxy;
    constructor() {
        const microserviceOptions: RedisOptions = {
            transport: Transport.REDIS,
            options: {
                url: 'redis://127.0.0.1:6379'
            }
        }

        this.client = ClientProxyFactory.create(microserviceOptions);
    }

    public register(user: UserCreateDto): Promise<UserClass> {
        return this.client.send<UserClass, UserCreateDto>('register', user).toPromise();
    }

}
