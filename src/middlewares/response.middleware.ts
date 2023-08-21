/*
import {Request, Response, NextFunction} from "express";

function middlewareFunction (data = {}, message = '', status = 200) {}

export type ResponseType = Response | {
    success: any
}
export default (req: Request, res:Response, next:NextFunction) => {

    res["success"] = (data = {}, message = '', status = 200) => {
        return res.status(status).send({
            success: 1,
            message: message,
            data: data,
        })
    }

    res["error"] = (data = {}, message = '', status = 400) => {
        return res.status(status).send({
            success: 0,
            message: message,
            data: data
        })
    }

    next()
}
*/
