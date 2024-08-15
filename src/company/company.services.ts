import { Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async getAllCompany(): Promise<Company[]> {
    return await this.prisma.company.findMany();
  }

  async getCompanyById(id: number): Promise<Company> {
    return await this.prisma.company.findUnique({
      where: {
        id,
      },
    });
  }

  async createCompany(data: Company): Promise<Company> {
    return await this.prisma.company.create({
      data: data,
    });
  }

  async updateCompany(id: number, data: Company): Promise<Company> {
    return await this.prisma.company.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteCompany(id: number): Promise<Company> {
    return await this.prisma.company.delete({
      where: {
        id,
      },
    });
  }
}
