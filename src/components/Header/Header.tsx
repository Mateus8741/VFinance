'use client'

import { useStoreFinance } from '@/hooks/useStoreFinance'
import { useDisclosure } from '@nextui-org/react'
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

      <div className="flex gap-3">
        <CustomButton
          title="Limpar transações"
          icon="trash"
          onClick={clearTransactions}
        />

        <CustomButton
          title="Nova transação"
          icon="arrow-right-left"
          rotate
          onClick={onOpen}
        />
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  )
}
