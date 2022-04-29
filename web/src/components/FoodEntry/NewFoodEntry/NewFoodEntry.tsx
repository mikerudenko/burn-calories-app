import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import FoodEntryForm from 'src/components/FoodEntry/FoodEntryForm'
import { useAuth } from '@redwoodjs/auth'

const CREATE_FOOD_ENTRY_MUTATION = gql`
  mutation CreateFoodEntryMutation($input: CreateFoodEntryInput!) {
    createFoodEntry(input: $input) {
      id
    }
  }
`

const NewFoodEntry = () => {
  const {
    currentUser: { id },
  } = useAuth()

  const [createFoodEntry, { loading, error }] = useMutation(
    CREATE_FOOD_ENTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('FoodEntry created')
        navigate(routes.foodEntries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, { userId: id })
    createFoodEntry({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New FoodEntry</h2>
      </header>
      <div className="rw-segment-main">
        <FoodEntryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFoodEntry
