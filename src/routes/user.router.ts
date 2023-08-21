import {Router} from "express";
import {userController} from "../controllers/controller"
import validatorMiddleware from "../middlewares/validator.middleware";
import {CreateUserDto} from "../dto/User.dto";

const userRouter: Router = Router();

userRouter.post("/create", validatorMiddleware(CreateUserDto) ,async (req,res) => {
    const user = await userController.createUser(req.body as CreateUserDto);
    res.status(201).json({data: {user}, message: "User Created Successfully!",})
});

export default userRouter;