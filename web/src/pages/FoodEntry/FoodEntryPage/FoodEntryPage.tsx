import FoodEntryCell from 'src/components/FoodEntry/FoodEntryCell'

type FoodEntryPageProps = {
  id: number
}

const FoodEntryPage = ({ id }: FoodEntryPageProps) => {
  return <FoodEntryCell id={id} />
}

export default FoodEntryPage
