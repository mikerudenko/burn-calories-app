import {
  FieldError,
  Form,
  FormError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'
import { useState } from 'react'
import { FoodAutocomplete } from 'src/components/FoodAutocomplete/FoodAutocomplete'

const FoodEntryForm = (props) => {
  const [foodItemValue, setFoodItemValue] = useState(null)

  const onSubmit = (data) => {
    props.onSave(data, props?.foodEntry?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <FoodAutocomplete
          value={foodItemValue.value}
          setInputValue={setFoodItemValue}
        />

        <Label
          name="calories"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Calories
        </Label>

        <NumberField
          name="calories"
          defaultValue={props.foodEntry?.calories}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="calories" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FoodEntryForm
