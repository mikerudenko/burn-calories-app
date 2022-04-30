import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'
import { getCurrentUser, requireAuth } from 'src/lib/auth'
import { RBAC_ROLE } from 'src/core.types'

export const foodEntries = async ({ userId }) => {
  requireAuth({ roles: [RBAC_ROLE.ADMIN, RBAC_ROLE.USER] })
  const currentUser = await getCurrentUser(context.currentUser)
  const currentUserRoles = currentUser?.roles

  if (currentUserRoles === RBAC_ROLE.ADMIN || currentUser.id === userId) {
    return db.foodEntry.findMany({
      where: {
        userId,
      },
    })
  }
}

export const foodEntry = async ({
  id,
  userId,
}: Prisma.FoodEntryWhereUniqueInput & { userId: number }) => {
  requireAuth({ roles: [RBAC_ROLE.ADMIN, RBAC_ROLE.USER] })

  const currentUser = await getCurrentUser(context.currentUser)
  const currentUserRoles = currentUser?.roles

  if (currentUserRoles === RBAC_ROLE.ADMIN || currentUser.id === userId) {
    return db.foodEntry.findFirst({
      where: { id, userId },
    })
  }
}

interface CreateFoodEntryArgs {
  input: Prisma.FoodEntryCreateInput
}

export const createFoodEntry = ({ input }: CreateFoodEntryArgs) => {
  requireAuth({ roles: [RBAC_ROLE.ADMIN, RBAC_ROLE.USER] })
  return db.foodEntry.create({
    data: input,
  })
}

interface UpdateFoodEntryArgs extends Prisma.FoodEntryWhereUniqueInput {
  input: Prisma.FoodEntryUpdateInput
}

export const updateFoodEntry = ({ id, input }: UpdateFoodEntryArgs) => {
  requireAuth({ roles: RBAC_ROLE.ADMIN })
  return db.foodEntry.update({
    data: input,
    where: { id },
  })
}

export const deleteFoodEntry = ({ id }: Prisma.FoodEntryWhereUniqueInput) => {
  requireAuth({ roles: RBAC_ROLE.ADMIN })
  return db.foodEntry.delete({
    where: { id },
  })
}
