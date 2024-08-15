import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.services';
import { Employee } from '@prisma/client';

@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getAllEmployees() {
    return await this.employeeService.getAllEmployees();
  }

  @Get(':id')
  async getEmployeeById(@Param('id') id: string) {
    return this.employeeService.getEmployeeById(Number(id));
  }

  @Put(':id')
  async updateEmployee(@Param('id') id: string, @Body() data: Employee) {
    return this.employeeService.updateEmployee(Number(id), data);
  }

  @Post()
  async createEmployee(@Body() employee: Employee) {
    await this.employeeService.createEmployee(employee);
  }

  @Delete(':id')
  async deleteEmployee(@Param('id') id: string) {
    return this.employeeService.deleteEmployee(Number(id));
  }
}