import { Injectable } from '@nestjs/common';
import { Employee } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}

  async getAllEmployees(): Promise<Employee[]> {
    return await this.prisma.employee.findMany();
  }

  async getEmployeeById(id: number): Promise<Employee> {
    return await this.prisma.employee.findUnique({
      where: {
        id,
      },
    });
  }

  async createEmployee(data: Employee): Promise<Employee> {
    return await this.prisma.employee.create({
      data: data,
    });
  }

  async updateEmployee(id: number, data: Employee): Promise<Employee> {
    return await this.prisma.employee.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteEmployee(id: number): Promise<Employee> {
    return await this.prisma.employee.delete({
      where: {
        id,
      },
    });
  }
}
