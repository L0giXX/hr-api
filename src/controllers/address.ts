import type { Address } from "@prisma/client";
import { prisma } from "@utils/prisma";
import { addressSchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class AddressController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const address = Controller.validate(addressSchema, req, res) as Address;
    const newAddress = await prisma.address.create({
      data: {
        country: address.country,
        street: address.street,
        city: address.city,
        state: address.state,
        zip: address.zip,
        employee: { connect: { id: address.employeeId } },
      },
    });
    res.json(newAddress);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const addresses = await prisma.address.findMany();
    res.json(addresses);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const address = await prisma.address.findUnique({
      where: { id },
    });
    res.json(address);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const address = Controller.validate(addressSchema, req, res) as Address;
    const updatedAddress = await prisma.address.update({
      where: { id },
      data: {
        street: address.street,
        city: address.city,
        state: address.state,
        zip: address.zip,
        country: address.country,
        employee: { connect: { id: address.employeeId } },
      },
    });
    res.json(updatedAddress);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const deletedAddress = await prisma.address.delete({
      where: { id },
    });
    res.json(deletedAddress);
  }
}
