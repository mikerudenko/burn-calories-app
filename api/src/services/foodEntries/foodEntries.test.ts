import {
  foodEntries,
  foodEntry,
  createFoodEntry,
  updateFoodEntry,
  deleteFoodEntry,
} from './foodEntries'
import type { StandardScenario } from './foodEntries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('foodEntries', () => {
  scenario('returns all foodEntries', async (scenario: StandardScenario) => {
    const result = await foodEntries()

    expect(result.length).toEqual(Object.keys(scenario.foodEntry).length)
  })

  scenario('returns a single foodEntry', async (scenario: StandardScenario) => {
    const result = await foodEntry({ id: scenario.foodEntry.one.id })

    expect(result).toEqual(scenario.foodEntry.one)
  })

  scenario('creates a foodEntry', async () => {
    const result = await createFoodEntry({
      input: { userId: 6216735, name: 'String', calories: 7557587 },
    })

    expect(result.userId).toEqual(6216735)
    expect(result.name).toEqual('String')
    expect(result.calories).toEqual(7557587)
  })

  scenario('updates a foodEntry', async (scenario: StandardScenario) => {
    const original = await foodEntry({ id: scenario.foodEntry.one.id })
    const result = await updateFoodEntry({
      id: original.id,
      input: { userId: 8725074 },
    })

    expect(result.userId).toEqual(8725074)
  })

  scenario('deletes a foodEntry', async (scenario: StandardScenario) => {
    const original = await deleteFoodEntry({ id: scenario.foodEntry.one.id })
    const result = await foodEntry({ id: original.id })

    expect(result).toEqual(null)
  })
})
