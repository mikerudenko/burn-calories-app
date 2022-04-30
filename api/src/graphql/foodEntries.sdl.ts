export const schema = gql`
  type FoodEntry {
    id: Int!
    userId: Int!
    name: String!
    calories: Int!
    dateTaken: DateTime!
  }

  type Query {
    foodEntries(userId: Int!): [FoodEntry!]!
      @requireAuth(roles: ["ADMIN", "USER"])
    foodEntry(id: Int!, userId: Int!): FoodEntry
      @requireAuth(roles: ["ADMIN", "USER"])
  }

  input CreateFoodEntryInput {
    userId: Int!
    name: String!
    calories: Int!
    dateTaken: DateTime
  }

  input UpdateFoodEntryInput {
    userId: Int
    name: String
    calories: Int
    dateTaken: DateTime
  }

  type Mutation {
    createFoodEntry(input: CreateFoodEntryInput!): FoodEntry!
      @requireAuth(roles: ["ADMIN", "USER"])
    updateFoodEntry(id: Int!, input: UpdateFoodEntryInput!): FoodEntry!
      @requireAuth(roles: ["ADMIN"])
    deleteFoodEntry(id: Int!): FoodEntry! @requireAuth(roles: ["ADMIN"])
  }
`
