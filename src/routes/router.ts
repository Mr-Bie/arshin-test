import {Router, Response} from "express";
import userRouter from "./user.router";
import expenseRouter from "./expense.router";

const router: Router = Router();

router.get("/", (req, res: Response) => {
    return res.json({message: "app is running"})
})

router.use("/user", userRouter);

router.use("/expense", expenseRouter);

export default router;
