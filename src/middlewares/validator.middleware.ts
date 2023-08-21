import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
export * from 'class-validator';

const validationPipe = async (schema: new () => {}, requestObject: object) => {
    const transformedClass: any = plainToInstance(schema, requestObject);
    const errors = await validate(transformedClass);
    if (errors.length > 0) {
        return errors;
    }
    return true;
};

export default (dto) =>  (async (req,res,next) => {
    const result: any = await validationPipe(dto, { ...req.body, ...req.params });

    if (result !== true) {
        return res.status(400).json({
            message: "bad request!",
            ...result,
        });
    }

    next();
    return true;
})