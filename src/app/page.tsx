import { Card } from '@/components/Card/Card'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 dark text-foreground bg-gray-900">
      <div className="flex flex-row items-center justify-between w-full">
        <Card cardsType="inComing" value={1000} />
        <Card cardsType="outComing" value={1000} />
        <Card cardsType="total" value={1000} />
      </div>
    </main>
  )
}
