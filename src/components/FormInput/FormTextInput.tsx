import { Controller, FieldValues, UseControllerProps } from 'react-hook-form'
import { InputField, InputFieldProps } from '../InputField/InputField'

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...fieldProps
}: InputFieldProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <InputField
          value={field.value}
          onChange={field.onChange}
          {...fieldProps}
        />
      )}
    />
  )
}
