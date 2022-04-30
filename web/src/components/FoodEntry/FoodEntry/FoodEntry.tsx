import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'
import { RBAC_ROLE } from 'src/core.types'
import { useAuth } from '@redwoodjs/auth'

const DELETE_FOOD_ENTRY_MUTATION = gql`
  mutation DeleteFoodEntryMutation($id: Int!) {
    deleteFoodEntry(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const FoodEntry = ({ foodEntry }) => {
  const { hasRole } = useAuth()
  const [deleteFoodEntry] = useMutation(DELETE_FOOD_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('FoodEntry deleted')
      navigate(routes.foodEntries())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete foodEntry ' + id + '?')) {
      deleteFoodEntry({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            FoodEntry {foodEntry.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{foodEntry.id}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{foodEntry.userId}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{foodEntry.name}</td>
            </tr>
            <tr>
              <th>Calories</th>
              <td>{foodEntry.calories}</td>
            </tr>
            <tr>
              <th>Date taken</th>
              <td>{timeTag(foodEntry.dateTaken)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {hasRole(RBAC_ROLE.ADMIN) && (
        <nav className="rw-button-group">
          <Link
            to={routes.editFoodEntry({ id: foodEntry.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(foodEntry.id)}
          >
            Delete
          </button>
        </nav>
      )}
    </>
  )
}

export default FoodEntry
