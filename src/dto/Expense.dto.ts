import {IsNotEmpty, IsNumber, IsNumberString, Min} from "class-validator";
import {Type} from "class-transformer";

export class CreateExpenseDto {
    @IsNotEmpty()
    @Min(1)
    @IsNumber()
    value: number;

    @IsNotEmpty()
    @Min(1)
    @IsNumber()
    userId: number;
}

export class UpdateExpenseDto {
    @IsNotEmpty()
    @Min(1)
    @IsNumber()
    @Type(() => Number)
    value: number;

    @IsNotEmpty()
    @Min(1)
    @IsNumber()
    @Type(() => Number)
    expenseId: number;
}