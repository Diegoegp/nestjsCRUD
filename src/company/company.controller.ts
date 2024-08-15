import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CompanyService } from './company.services';
import { Company } from '@prisma/client';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getAllCompanies() {
    return await this.companyService.getAllCompany();
  }

  @Get(':id')
  async getCompanyById(@Param('id') id: string) {
    return this.companyService.getCompanyById(Number(id));
  }

  @Post()
  async createCompany(@Body() company: Company) {
    await this.companyService.createCompany(company);
  }

  @Put(':id')
  async updateCompany(@Param('id') id: string, @Body() data: Company) {
    return this.companyService.updateCompany(Number(id), data);
  }

  @Delete(':id')
  async deleteCompany(@Param('id') id: string) {
    return this.companyService.deleteCompany(Number(id));
  }
}
