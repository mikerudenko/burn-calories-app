import type { EditFoodEntryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import FoodEntryForm from 'src/components/FoodEntry/FoodEntryForm'
import { useAuth } from '@redwoodjs/auth'

export const QUERY = gql`
  query EditFoodEntryById($id: Int!) {
    foodEntry: foodEntry(id: $id) {
      id
      userId
      name
      calories
      dateTaken
    }
  }
`
const UPDATE_FOOD_ENTRY_MUTATION = gql`
  mutation UpdateFoodEntryMutation($id: Int!, $input: UpdateFoodEntryInput!) {
    updateFoodEntry(id: $id, input: $input) {
      id
      userId
      name
      calories
      dateTaken
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ foodEntry }: CellSuccessProps<EditFoodEntryById>) => {
  const {
    currentUser: { id },
  } = useAuth()

  const [updateFoodEntry, { loading, error }] = useMutation(
    UPDATE_FOOD_ENTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('FoodEntry updated')
        navigate(routes.foodEntries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: id })

    updateFoodEntry({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit FoodEntry {foodEntry.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FoodEntryForm
          foodEntry={foodEntry}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
