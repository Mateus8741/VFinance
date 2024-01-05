'use client'

import { useStoreFinance } from '@/hooks/useStoreFinance'
import { useDisclosure } from '@nextui-org/react'
import { ActivityIcon, ArrowRightLeft } from 'lucide-react'
import { CustomButton } from '../CustomButton/CustomButton'
import { Logo } from '../Logo/Logo'
import { Modal } from '../Modal/Modal'

export function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const { clearTransactions } = useStoreFinance()

  return (
    <header className="flex items-center justify-between p-4 bg-gray-950">
      <div className="mr-auto">
        <Logo />
      </div>

      <button
        className="flex flex-row items-center justify-center gap-3 p-4 bg-gray-900 rounded-md"
        onClick={onOpen}
      >
        <div className="rotate-90">
          <ArrowRightLeft
            size="24"
            className="text-green-700"
            strokeLinecap="round"
            stroke="currentColor"
          />
        </div>

        <p className="text-sm font-bold text-green-700">Nova transação</p>
      </button>

      <CustomButton
        title="Limpar transações"
        icon={ActivityIcon}
        onClick={clearTransactions}
      />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  )
}
