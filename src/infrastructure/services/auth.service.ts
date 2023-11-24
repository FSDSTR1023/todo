import { BcryptAdapter } from "../../config/bcrypt.adapter";
import { envs } from "../../config/envs";
import { JwtAdapter } from "../../config/jwt.adapter";
import { JwtPayload } from "../../domain/interfaces/interfaces";

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

    public login(password: string, passwordDB: string): boolean {

        const isValidatedPasword = BcryptAdapter.compare(password, passwordDB)
        if (!isValidatedPasword) throw Error('AuthService.userLogin: User or password isn\'t valid');

        return isValidatedPasword;
    }

}