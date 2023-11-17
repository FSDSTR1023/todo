import { Secret, sign, verify } from "jsonwebtoken";
import { envs } from "./envs";
import { JwtPayload } from "../domain/interfaces/interfaces";

export class JwtAdapter {

    private readonly jwtSeed: Secret;

    constructor() {
        this.jwtSeed = envs.JWT_SEED;
    }

    public genToken(payload: any, duration: string = '8h') {

        var token = sign(payload, this.jwtSeed, { expiresIn: duration });

        return token;
    }

    public verifyToken(token: string): JwtPayload {
        const verified = verify(token, this.jwtSeed)

        if (!verified) {
            throw new Error('JwtAdapter.verifyToken: No valid token');
        }

        const payload = verified as JwtPayload;

        return payload;
    }
}
