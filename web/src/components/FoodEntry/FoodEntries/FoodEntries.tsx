import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/FoodEntry/FoodEntriesCell'

const DELETE_FOOD_ENTRY_MUTATION = gql`
  mutation DeleteFoodEntryMutation($id: Int!) {
    deleteFoodEntry(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const FoodEntriesList = ({ foodEntries }) => {
  const [deleteFoodEntry] = useMutation(DELETE_FOOD_ENTRY_MUTATION, {
    onCompleted: () => {
      toast.success('FoodEntry deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete foodEntry ' + id + '?')) {
      deleteFoodEntry({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User id</th>
            <th>Name</th>
            <th>Calories</th>
            <th>Date taken</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {foodEntries.map((foodEntry) => (
            <tr key={foodEntry.id}>
              <td>{truncate(foodEntry.id)}</td>
              <td>{truncate(foodEntry.userId)}</td>
              <td>{truncate(foodEntry.name)}</td>
              <td>{truncate(foodEntry.calories)}</td>
              <td>{timeTag(foodEntry.dateTaken)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.foodEntry({ id: foodEntry.id })}
                    title={'Show foodEntry ' + foodEntry.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFoodEntry({ id: foodEntry.id })}
                    title={'Edit foodEntry ' + foodEntry.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete foodEntry ' + foodEntry.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(foodEntry.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FoodEntriesList
