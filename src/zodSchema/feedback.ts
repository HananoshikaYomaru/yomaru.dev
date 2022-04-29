import { z } from "zod";
export const feedback = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(1).max(32),
  text: z.string().min(1),
});
