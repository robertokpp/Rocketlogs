import { Request, Response } from "express";
import { z } from "zod";

class SessionsController {
  create(request: Request, response: Response) {
    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { email, password } = bodySchema.parse(request.body);

    return response.json({ massage: "ok" });
  }
}

export { SessionsController };
