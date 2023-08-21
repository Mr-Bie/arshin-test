import prisma from "../services/prisma.service";
import {CreateUserDto} from "../dto/User.dto";

export const createUser = async (data: CreateUserDto) => {
    return prisma.user.create({data: {email: data.email, name: data.name}});
}
