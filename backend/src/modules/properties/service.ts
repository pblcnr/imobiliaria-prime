import { prisma } from "../../config/prisma.js";
import { NotFoundError } from "../../shared/errors/index.js";
import type {
  CreatePropertyDto,
  UpdatePropertyDto,
} from "./dtos/property.dto.js";

export class PropertyService {
  async createProperty(data: CreatePropertyDto) {
    const newProperty = await prisma.property.create({
      data: {
        ...data,
        title: data.title.trim(),
        address: data.address.trim(),
        description: data.description?.trim(),
      },
    });

    return newProperty;
  }

  async findAll() {
    const properties = await prisma.property.findMany();

    return properties;
  }

  async findById(id: string) {
    const property = await prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      throw new NotFoundError("Propriedade não encontrada.");
    }

    return property;
  }

  async updateProperty(id: string, data: UpdatePropertyDto) {
    const existingProperty = await prisma.property.findUnique({
      where: { id },
    });

    if (!existingProperty) {
      throw new NotFoundError("Propriedade não encontrada.");
    }

    const updatedProperty = await prisma.property.update({
      where: { id },
      data: {
        ...data,
        title: data.title ? data.title.trim() : undefined,
        address: data.address ? data.address.trim() : undefined,
        description: data.description ? data.description.trim() : undefined,
      },
    });

    return updatedProperty;
  }

  async delete(id: string) {
    const property = await prisma.property.findUnique({
      where: { id },
    });

    if (!property) {
      throw new NotFoundError("Propriedade não encontrada.");
    }

    await prisma.property.delete({
      where: { id },
    });
  }
}
