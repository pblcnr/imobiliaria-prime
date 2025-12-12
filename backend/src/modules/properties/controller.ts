import { Request, Response, NextFunction } from "express";
import { PropertyService } from "./service.js";
import {
  createPropertyDto,
  updatePropertyDto,
  propertyIdParamDto,
} from "./dtos/property.dto.js";

const propertyService = new PropertyService();

export class PropertyController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const propertyData = createPropertyDto.parse(req.body);

      const newProperty = await propertyService.createProperty(propertyData);

      res.status(201).json(newProperty);
    } catch (error) {
      next(error);
    }
  }

  async findAll(req: Request, res: Response, next: NextFunction) {
    try {
      const properties = await propertyService.findAll();

      res.status(200).json(properties);
    } catch (error) {
      next(error);
    }
  }

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = propertyIdParamDto.parse(req.params);

      const property = await propertyService.findById(id);

      res.status(200).json(property);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = propertyIdParamDto.parse(req.params);

      const updateData = updatePropertyDto.parse(req.body);

      const updatedProperty = await propertyService.updateProperty(
        id,
        updateData
      );

      res.status(200).json(updatedProperty);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = propertyIdParamDto.parse(req.params);

      await propertyService.delete(id);

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
