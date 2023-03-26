import {
  createTRPCRouter,
  publicProcedure,
} from "@/server/api/trpc";
import { findAllOrganizations } from "./findAllOrganizations";

export const organizationRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(({ ctx }) => {
      return findAllOrganizations(ctx.prisma)
    }),
});
