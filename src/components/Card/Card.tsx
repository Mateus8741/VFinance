import { formatMoney } from '@/utils/formatMoney'
import { CardBody, Card as UICard } from '@nextui-org/react'
import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
  DollarSignIcon,
} from 'lucide-react'
import { Suspense } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const $cardStyle = tv({
  slots: {
    container: 'w-80 h-40 border-none isBlurred shadow-md',
    text: 'text-base font-bold',
  },
  variants: {
    cardsType: {
      inComing: {
        container: 'bg-background/60 dark:bg-default-100/50',
        text: 'text-white',
      },
      outComing: {
        container: 'bg-background/60 dark:bg-default-100/50',
        text: 'text-white',
      },
      total: {
        container: 'bg-green-600/70 dark:bg-green-600/50',
        text: 'text-white',
      },
    },
  },

  defaultVariants: {
    cardsType: 'inComing',
  },
})

interface CardProps extends VariantProps<typeof $cardStyle> {
  value: number
  cardsType?: 'inComing' | 'outComing' | 'total'
}

export function Card({ value, cardsType = 'inComing' }: CardProps) {
  const { container, text } = $cardStyle({ cardsType })

  const formattedMoney = formatMoney(value)

  let icon = null

  switch (cardsType) {
    case 'inComing':
      icon = <ArrowUpCircleIcon size={32} color="green" />
      break

    case 'outComing':
      icon = <ArrowDownCircleIcon size={32} color="red" />
      break

    case 'total':
      icon = <DollarSignIcon size={32} color="white" />
      break

    default:
      break
  }

  return (
    <UICard className={container()} isBlurred shadow="md">
      <CardBody className="flex justify-between p-3 py-5 text-small text-default-400">
        <div className="flex flex-row items-center justify-between">
          <p className={text()}>
            {cardsType === 'inComing'
              ? 'Entradas'
              : cardsType === 'outComing'
                ? 'Saídas'
                : 'Total'}
          </p>
          {icon}
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <span className={`pt-2 text-3xl font-bold ${text()}`}>
            {formattedMoney}
          </span>
        </Suspense>
      </CardBody>
    </UICard>
  )
}
