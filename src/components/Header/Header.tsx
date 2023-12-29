'use client'

import { useDisclosure } from '@nextui-org/react'
import { ArrowRightLeft } from 'lucide-react'
import { Logo } from '../Logo/Logo'
import { Modal } from '../Modal/Modal'

export function Header() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <header className="flex items-center justify-between p-4 bg-gray-950">
      <Logo />

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

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} />
    </header>
  )
}
