import {Router, Response} from "express";
import userRouter from "./user.router";
const router: Router = Router();

router.get("/", (req, res: Response) => {
    return res.json({message: "app is running"})
})

router.use("/user", userRouter);

export default router;
