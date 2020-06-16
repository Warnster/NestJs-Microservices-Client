export class UserCreateDto {
    email: string;
    username: string;
    password: string;
    password_verify: string;
}

export class UserUpdateDto {
    id: string;
    email: string;
    username: string;
}

export class UserClass {
    id: string;
    email: string;
    username: string;
    password: string;
}
