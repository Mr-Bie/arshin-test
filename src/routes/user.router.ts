import {Router} from "express";
import {userController} from "../controllers/controller"
import validatorMiddleware from "../middlewares/validator.middleware";
import {CreateUserDto} from "../dto/User.dto";

const userRouter: Router = Router();

userRouter.post("/create", validatorMiddleware(CreateUserDto) ,async (req,res, next) => {
    let user;
    try {
        user = await userController.createUser(req.body as CreateUserDto);
    } catch(err) {
        return next(err);
    }
    res.status(201).json({data: {user}, message: "User Created Successfully!",})
});

userRouter.get("/find", async (req,res, next) => {
    let users;
    try {
        users = await userController.getAllUsers();
    } catch(err) {
        return next(err);
    }

    return res.status(200).json({message: "all users fetched!", data: {users}})
})

export default userRouter;