import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const foodEntries = () => {
  return db.foodEntry.findMany()
}

export const foodEntry = ({ id }: Prisma.FoodEntryWhereUniqueInput) => {
  return db.foodEntry.findUnique({
    where: { id },
  })
}

interface CreateFoodEntryArgs {
  input: Prisma.FoodEntryCreateInput
}

export const createFoodEntry = ({ input }: CreateFoodEntryArgs) => {
  return db.foodEntry.create({
    data: input,
  })
}

interface UpdateFoodEntryArgs extends Prisma.FoodEntryWhereUniqueInput {
  input: Prisma.FoodEntryUpdateInput
}

export const updateFoodEntry = ({ id, input }: UpdateFoodEntryArgs) => {
  return db.foodEntry.update({
    data: input,
    where: { id },
  })
}

export const deleteFoodEntry = ({ id }: Prisma.FoodEntryWhereUniqueInput) => {
  return db.foodEntry.delete({
    where: { id },
  })
}
