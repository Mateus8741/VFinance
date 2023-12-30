import { zodResolver } from '@hookform/resolvers/zod'
import * as react from '@nextui-org/react'
import { RadioGroup } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FormTextInput } from '../FormInput/FormTextInput'
import { CustomRadio } from '../RadioButton/RadioButton'

interface ModalProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.string(),
  //   type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function Modal({ isOpen, onOpenChange }: ModalProps) {
  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
  })

  function handleFormSubmitForm(data: NewTransactionFormInputs) {
    console.log(data)
  }

  return (
    <react.Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      backdrop="blur"
      classNames={{
        body: 'py-6',
        base: 'border-[#292f46] bg-gray-900 dark:bg-[#19172c] text-[#a8b0d3]',
        closeButton: 'hover:bg-white/5 text-4xl active:bg-white/10',
      }}
    >
      <react.ModalContent>
        <react.ModalHeader className="flex flex-col gap-1">
          Nova transação
        </react.ModalHeader>

        <form onSubmit={handleSubmit(handleFormSubmitForm)}>
          <react.ModalBody>
            <FormTextInput
              control={control}
              name="description"
              placeholder="Descrição"
            />

            <FormTextInput control={control} name="price" placeholder="Preço" />

            <RadioGroup
              orientation="horizontal"
              className="flex flex-row gap-4 justify-center w-full"
              onChange={(e) => console.log(e.target.value)}
            >
              <CustomRadio value="entrada">Entrada</CustomRadio>
              <CustomRadio value="saida">Saída</CustomRadio>
            </RadioGroup>

            <react.Button
              type="submit"
              className="w-full text-white bg-green-700 text-lg py-6"
            >
              Action
            </react.Button>
          </react.ModalBody>
        </form>
      </react.ModalContent>
    </react.Modal>
  )
}
