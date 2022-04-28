import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.FoodEntryCreateArgs>({
  foodEntry: {
    one: { data: { userId: 1281358, name: 'String', calories: 8009992 } },
    two: { data: { userId: 3301197, name: 'String', calories: 7272182 } },
  },
})

export type StandardScenario = typeof standard
