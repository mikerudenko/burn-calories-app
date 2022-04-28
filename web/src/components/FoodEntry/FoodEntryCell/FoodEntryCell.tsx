import type { FindFoodEntryById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import FoodEntry from 'src/components/FoodEntry/FoodEntry'

export const QUERY = gql`
  query FindFoodEntryById($id: Int!) {
    foodEntry: foodEntry(id: $id) {
      id
      userId
      name
      calories
      dateTaken
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>FoodEntry not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ foodEntry }: CellSuccessProps<FindFoodEntryById>) => {
  return <FoodEntry foodEntry={foodEntry} />
}
