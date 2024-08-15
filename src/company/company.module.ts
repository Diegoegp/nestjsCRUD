import { Module } from "@nestjs/common";
import { CompanyController } from "./company.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { CompanyService } from "./company.services";

@Module({
    controllers: [CompanyController],
    providers: [CompanyService],
    imports:[PrismaModule],
})

export class CompanyModule {
    
}