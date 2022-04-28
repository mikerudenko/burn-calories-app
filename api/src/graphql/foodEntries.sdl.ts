export const schema = gql`
  type FoodEntry {
    id: Int!
    userId: Int!
    name: String!
    calories: Int!
    dateTaken: DateTime!
  }

  type Query {
    foodEntries: [FoodEntry!]! @requireAuth
    foodEntry(id: Int!): FoodEntry @requireAuth
  }

  input CreateFoodEntryInput {
    userId: Int!
    name: String!
    calories: Int!
    dateTaken: DateTime!
  }

  input UpdateFoodEntryInput {
    userId: Int
    name: String
    calories: Int
    dateTaken: DateTime
  }

  type Mutation {
    createFoodEntry(input: CreateFoodEntryInput!): FoodEntry! @requireAuth
    updateFoodEntry(id: Int!, input: UpdateFoodEntryInput!): FoodEntry!
      @requireAuth
    deleteFoodEntry(id: Int!): FoodEntry! @requireAuth
  }
`
