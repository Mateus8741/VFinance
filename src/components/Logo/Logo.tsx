import { Wallet } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex flow-row items-center justify-center gap-3">
      <Wallet
        size="64"
        className="text-white"
        strokeWidth="0.7"
        strokeLinecap="round"
        stroke="currentColor"
        fill="green"
      />

      <h2 className="text-2xl font-bold text-green-700">VFINANCE</h2>
    </div>
  )
}
