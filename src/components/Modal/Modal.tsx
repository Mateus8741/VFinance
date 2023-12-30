import { useStoreFinance } from '@/hooks/useStoreFinance'
import { zodResolver } from '@hookform/resolvers/zod'
import * as react from '@nextui-org/react'
import { RadioGroup } from '@nextui-org/react'
import { Controller, useForm } from 'react-hook-form'
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
  type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function Modal({ isOpen, onOpenChange }: ModalProps) {
  const { setTransaction } = useStoreFinance()

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),

    defaultValues: {
      description: '',
      price: '',
      type: undefined,
    },
  })

  function handleFormSubmitForm(data: NewTransactionFormInputs) {
    setTransaction({
      id: Math.random(),
      description: data.description,
      price: parseFloat(data.price),
      type: data.type,
      createdAt: new Date().toDateString(),
    })
    reset()
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

            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <RadioGroup
                  orientation="horizontal"
                  className="flex flex-row gap-4 justify-center w-full"
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <CustomRadio value="income">Entrada</CustomRadio>
                  <CustomRadio value="outcome">Saída</CustomRadio>
                </RadioGroup>
              )}
            />

            <react.Button
              type="submit"
              className="w-full text-white bg-green-700 text-lg py-6"
            >
              Cadastrar
            </react.Button>
          </react.ModalBody>
        </form>
      </react.ModalContent>
    </react.Modal>
  )
}
