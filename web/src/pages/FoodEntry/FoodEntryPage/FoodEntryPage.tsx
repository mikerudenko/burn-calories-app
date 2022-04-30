import { useAuth } from '@redwoodjs/auth'
import FoodEntryCell from 'src/components/FoodEntry/FoodEntryCell'

type FoodEntryPageProps = {
  id: number
}

const FoodEntryPage = ({ id }: FoodEntryPageProps) => {
  const { currentUser } = useAuth()
  return <FoodEntryCell id={id} userId={currentUser.id} />
}

export default FoodEntryPage
