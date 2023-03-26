import type { Organization, PrismaClient } from "@prisma/client";

export async function findAllOrganizations(prisma: PrismaClient): Promise<Organization[]> {
  const organizations = await prisma.organization.findMany();

  return organizations;
}