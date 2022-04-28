import EditFoodEntryCell from 'src/components/FoodEntry/EditFoodEntryCell'

type FoodEntryPageProps = {
  id: number
}

const EditFoodEntryPage = ({ id }: FoodEntryPageProps) => {
  return <EditFoodEntryCell id={id} />
}

export default EditFoodEntryPage
