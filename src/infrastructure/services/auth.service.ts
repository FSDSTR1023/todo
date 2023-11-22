import { BcryptAdapter } from "../../config/bcrypt.adapter";
import { envs } from "../../config/envs";
import { JwtAdapter } from "../../config/jwt.adapter";
import { UserSchema } from "../../db/mongo/models/userSchema";
import { UserEntity } from "../../domain/entities/user.entity";
import { JwtPayload } from "../../domain/interfaces/interfaces";
import { UserMapper } from "../mappers/user.mapper";

export class AuthService {

    private readonly jwt: JwtAdapter;
    private readonly seed: string;

    constructor() {
        this.seed = envs.JWT_SEED;
        this.jwt = new JwtAdapter(this.seed);
    }

    public newToken(payload: any): string {
        const token = this.jwt.genToken(payload, '8h');
        return token;
    }

    public verifyToking(token: string): JwtPayload {
        const isCorrectJwt = this.jwt.verifyToken(token);
        if (!isCorrectJwt) throw new Error("AuthService.verifyToking: Invalid token");
        return isCorrectJwt;
    }

    public async login(email: string, password: string): Promise<UserEntity> {
        const user = await UserSchema.findOne({ email });
        if (!user) throw Error('AuthService.userLogin: User or password isn\'t valid');

        const isValidatedPasword = BcryptAdapter.compare(password, user.password)
        if (!isValidatedPasword) throw Error('AuthService.userLogin: User or password isn\'t valid');

        const userEntity = UserMapper.fromObject(user);

        return userEntity;
    }

}