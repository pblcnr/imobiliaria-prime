import { Request, Response, NextFunction } from "express";
import { EmployeeService } from "./service.js";
import {
  createEmployeeDto,
  updateEmployeeDto,
  employeeIdParamDto,
} from "./dtos/employee.dto.js";

const employeeService = new EmployeeService();

export class EmployeeController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const employeeData = createEmployeeDto.parse(req.body);

      const newEmployee = await employeeService.createEmployee(employeeData);

      res.status(201).json(newEmployee);
    } catch (error) {
      next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const employees = await employeeService.findAll();

      res.status(200).json(employees);
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = employeeIdParamDto.parse(req.params);

      const employee = await employeeService.findById(id);

      res.status(200).json(employee);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = employeeIdParamDto.parse(req.params);

      const updateData = updateEmployeeDto.parse(req.body);

      const updatedEmployee = await employeeService.update(id, updateData);

      res.status(200).json(updatedEmployee);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = employeeIdParamDto.parse(req.params);

      await employeeService.delete(id);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
