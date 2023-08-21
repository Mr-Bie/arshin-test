import {Router} from "express";
import validatorMiddleware from "../middlewares/validator.middleware";

import {expenseController} from "../controllers/controller";
import {CreateExpenseDto, UpdateExpenseDto} from "../dto/Expense.dto";

const expenseRouter: Router = Router();

expenseRouter.post("/create", validatorMiddleware(CreateExpenseDto) ,async (req,res, next) => {
    let expense;
    try {
        expense = await expenseController.createExpense(req.body as CreateExpenseDto);
    } catch(err) {
        return next(err);
    }
    res.status(201).json({data: {expense}, message: "Expense Created Successfully!",})
});

expenseRouter.post("/update/:expenseId", validatorMiddleware(UpdateExpenseDto), async (req,res,next) => {
    let expense;
    try {
        expense = await expenseController.updateExpense({...req.body, ...req.params} as UpdateExpenseDto)
    } catch(err) {
        return next(err);
    }
    res.status(200).json({message: "expense updated!", data: {expense}})
})


export default expenseRouter;