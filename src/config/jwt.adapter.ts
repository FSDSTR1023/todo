import { sign } from "jsonwebtoken";
import { envs } from "./envs";

export class JwtAdapter {
    static genToken(payload: any, duration: string = '8h') {

        var token = sign(payload, envs.JWT_SEED, { expiresIn: duration });

        return token;
    }
}
