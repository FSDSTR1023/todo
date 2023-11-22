import { NextFunction, Request, Response } from "express";
import { AuthService } from "../../infrastructure/services/auth.service";
import { UserSchema } from "../../db/mongo/models/userSchema";

export const checkJWT = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const token = req.header('token');
        const isCorrectJwt = new AuthService().verifyToking(token!);
        const { id } = isCorrectJwt;

        await UserSchema.findById(id)

        req.locals = { id };

        next();
    } catch (error) {
        const myError = error as { name: string, message: string };

        res.status(401).json({
            ok: false,
            msn: `${myError.name}: ${myError.message}`
        });
    }
}