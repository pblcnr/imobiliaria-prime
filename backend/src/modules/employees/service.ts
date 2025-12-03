import { prisma } from "../../../config/prisma.js";
import bcrypt from "bcryptjs";
import { ConflictError, NotFoundError } from "../../../shared/errors/index.js";
import type {
  CreateEmployeeDto,
  UpdateEmployeeDto,
} from "../dtos/employee.dto.js";

export class EmployeeService {
  async createEmployee(data: CreateEmployeeDto) {
    const existingEmployee = await prisma.employee.findUnique({
      where: { email: data.email },
    });

    if (existingEmployee) {
      throw new ConflictError("Funcionário com este e-mail já existe.");
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newEmployee = await prisma.employee.create({
      data: {
        ...data,
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        password: hashedPassword,
        role: data.role,
      },
    });

    const { password, ...employeeWithoutPassword } = newEmployee;

    return employeeWithoutPassword;
  }

  async findAll() {
    const employees = await prisma.employee.findMany();

    return employees.map(({ password, ...employee }) => employee);
  }

  async findById(id: string) {
    const employee = await prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundError("Funcionário não encontrado.");
    }

    const { password, ...employeeWithoutPassword } = employee;

    return employeeWithoutPassword;
  }

  async update(id: string, data: UpdateEmployeeDto) {
    const employee = await prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundError("Funcionário não encontrado.");
    }

    if (data.email && data.email !== employee.email) {
      const existingEmployee = await prisma.employee.findUnique({
        where: { email: data.email },
      });

      if (existingEmployee) {
        throw new ConflictError("Funcionário com este e-mail já existe.");
      }
    }

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: {
        ...data,
        name: data.name ? data.name.trim() : undefined,
        email: data.email ? data.email.trim().toLowerCase() : undefined,
      },
    });

    const { password, ...employeeWithoutPassword } = updatedEmployee;

    return employeeWithoutPassword;
  }

  async delete(id: string) {
    const employee = await prisma.employee.findUnique({
      where: { id },
    });

    if (!employee) {
      throw new NotFoundError("Funcionário não encontrado.");
    }

    await prisma.employee.delete({
      where: { id },
    });
  }
}
