import {Router, Response} from "express";
const router: Router = Router();

router.get("/", (req, res: Response) => {
    return res.json({message: "app is running"})
})
export default router;
