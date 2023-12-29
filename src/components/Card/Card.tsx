import { CardBody, Card as UICard } from '@nextui-org/react'

import { ArrowUpCircleIcon } from 'lucide-react'

export function Card() {
  return (
    <UICard
      className="w-80 h-40 border-none bg-background/60 dark:bg-default-100/50 "
      isBlurred
      shadow="md"
    >
      <CardBody className="flex justify-between p-3 py-5 text-small text-default-400">
        <div className="flex flex-row items-center justify-between">
          <p className="text-green-700">Entradas</p>

          <ArrowUpCircleIcon size={32} color="green" />
        </div>

        <span className="pt-2 text-3xl font-bold text-green-700">R$ 0,00</span>
      </CardBody>
    </UICard>
  )
}
