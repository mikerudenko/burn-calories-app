import AsyncSelect from 'react-select/async'
import { getFoodEntries } from 'src/api/nutritionix-api'

const loadOptions = (
  inputValue: string,
  callback: (options: any[]) => void
) => {
  getFoodEntries(inputValue).then((foodEntries) => {
    const options = foodEntries.map(({ food_name, nix_item_id }) => ({
      value: nix_item_id,
      label: food_name,
    }))

    callback(options)
  })
}

type FoodAutocompleteProps = {
  value: string
  setInputValue(value: string): void
}

export const FoodAutocomplete = ({
  value,
  setInputValue,
}: FoodAutocompleteProps) => {
  const handleInputChange = (newValue: string) => {
    const finalValue = newValue.replace(/\W/g, '')
    return finalValue
  }

  return (
    <AsyncSelect
      value={value}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onSelect={(option) => setInputValue(option.value)}
      onInputChange={handleInputChange}
    />
  )
}
