import type { FindFoodEntries } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import FoodEntries from 'src/components/FoodEntry/FoodEntries'

export const QUERY = gql`
  query FindFoodEntries {
    foodEntries {
      id
      userId
      name
      calories
      dateTaken
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No foodEntries yet. '}
      <Link
        to={routes.newFoodEntry()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ foodEntries }: CellSuccessProps<FindFoodEntries>) => {
  return <FoodEntries foodEntries={foodEntries} />
}
