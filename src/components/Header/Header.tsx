import { ArrowRightLeft } from 'lucide-react'
import { Logo } from '../Logo/Logo'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-950">
      <Logo />

      <button className="flex flex-row items-center justify-center gap-3 p-4 bg-gray-900 rounded-md">
        <ArrowRightLeft
          size="24"
          className="text-green-700"
          strokeLinecap="round"
          stroke="currentColor"
        />

        <p className="text-sm font-bold text-green-700">Nova transação</p>
      </button>
    </header>
  )
}
