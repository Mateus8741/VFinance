'use client'

import { Card } from '@/components/Card/Card'
import { useSummary } from '@/hooks/useSummary'
import { Suspense } from 'react'

export default function Home() {
  const { income, outcome, total } = useSummary()

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 dark text-foreground bg-gray-900">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-row items-center justify-between w-full">
          <Card cardsType="inComing" value={income} />
          <Card cardsType="outComing" value={outcome} />
          <Card cardsType="total" value={total} />
        </div>
      </Suspense>
    </main>
  )
}
