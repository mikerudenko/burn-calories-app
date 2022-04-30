import { useAuth } from '@redwoodjs/auth'
import FoodEntriesCell from 'src/components/FoodEntry/FoodEntriesCell'

const FoodEntriesPage = () => {
  const { currentUser } = useAuth()

  return <FoodEntriesCell userId={currentUser.id} />
}

export default FoodEntriesPage
