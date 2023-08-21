import prisma from "../services/prisma.service";
import {CreateExpenseDto, UpdateExpenseDto} from "../dto/Expense.dto";
import {HttpException} from "../middlewares/error-handler.middleware";

export const createExpense = async (data: CreateExpenseDto) => {
    const user = await prisma.user.findFirst({where: {id: data.userId}});
    if (!user)
        throw new HttpException("user not found with this id!", 400);

    return prisma.expense.create({data: {value: data.value, userId: data.userId}});
}

export const updateExpense = async (data: UpdateExpenseDto) => {
    const expenseId = Number(data.expenseId);
    const expense = await prisma.expense.findFirst({where: {id:  expenseId}});
    if (!expense)
        throw new HttpException("expense not found with this id!", 400);

    return prisma.expense.update({where: {id: expenseId }, data: {value: Number(data.value)}});
}
