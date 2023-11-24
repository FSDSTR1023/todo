import { UserSchema } from "../../db/mongo/models/userSchema";

export const existEmail = async (value: string) => {
    const email = await UserSchema.findOne({ email: value });
    if (!email) throw new Error('Doesn\'t exist email');
};

export const notExistEmail = async (value: string) => {
    const email = await UserSchema.findOne({ email: value });
    if (email) throw new Error('Already exist email');
};