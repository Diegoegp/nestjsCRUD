import { Module } from "@nestjs/common";
import { EmployeeController } from "./employee.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { EmployeeService } from "./employee.services";

@Module({
    controllers: [EmployeeController],
    providers: [EmployeeService],
    imports:[PrismaModule],
})

export class EmployeeModule {
    
}