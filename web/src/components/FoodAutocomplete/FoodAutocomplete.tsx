import AsyncSelect from 'react-select/async'
import { getFoodEntries } from 'src/api/nutritionix-api'

type SelectOption = {
  value: string
  label: string
}

const loadOptions = (
  inputValue: string,
  callback: (options: SelectOption[]) => void
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
  value: SelectOption
  defaultOptions: SelectOption[]
  setInputValue(option: SelectOption): void
  name: string
}

export const FoodAutocomplete = ({
  value,
  setInputValue,
  name,
  defaultOptions,
}: FoodAutocompleteProps) => {
  const handleInputChange = (newValue: string) => {
    const finalValue = newValue.replace(/\W/g, '')
    return finalValue
  }

  const onSelect = (option: SelectOption) => {
    setInputValue(option)
  }

  return (
    <AsyncSelect
      name={name}
      value={value}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions={defaultOptions}
      onChange={onSelect}
      onInputChange={handleInputChange}
    />
  )
}
