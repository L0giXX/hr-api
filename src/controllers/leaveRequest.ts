import type { LeaveRequest } from "@prisma/client";
import { prisma } from "@utils/prisma";
import { leaveRequestSchema } from "@utils/types";
import type { Request, Response } from "express";

import Controller from ".";

export default class LeaveRequestController extends Controller {
  async create(req: Request, res: Response): Promise<void> {
    const leaveRequest = Controller.validate(
      leaveRequestSchema,
      req,
      res,
    ) as LeaveRequest;
    const newLeaveRequest = await prisma.leaveRequest.create({
      data: {
        employee: { connect: { id: leaveRequest.employeeId } },
        start_date: leaveRequest.start_date,
        end_date: leaveRequest.end_date,
        reason: leaveRequest.reason,
        status: leaveRequest.status,
      },
    });
    res.json(newLeaveRequest);
  }

  async getAll(req: Request, res: Response): Promise<void> {
    const leaveRequests = await prisma.leaveRequest.findMany();
    res.json(leaveRequests);
  }

  async get(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const leaveRequest = await prisma.leaveRequest.findUnique({
      where: { id },
    });
    res.json(leaveRequest);
  }

  async update(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const leaveRequest = Controller.validate(
      leaveRequestSchema,
      req,
      res,
    ) as LeaveRequest;
    const updatedLeaveRequest = await prisma.leaveRequest.update({
      where: { id },
      data: {
        employee: { connect: { id: leaveRequest.employeeId } },
        start_date: leaveRequest.start_date,
        end_date: leaveRequest.end_date,
        reason: leaveRequest.reason,
        status: leaveRequest.status,
      },
    });
    res.json(updatedLeaveRequest);
  }

  async delete(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const deletedLeaveRequest = await prisma.leaveRequest.delete({
      where: { id },
    });
    res.json(deletedLeaveRequest);
  }
}
