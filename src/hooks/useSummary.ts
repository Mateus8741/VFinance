'use client'

import { useMemo } from 'react'
import { useStoreFinance } from './useStoreFinance'

export function useSummary() {
  const { transaction } = useStoreFinance()

  const summary = useMemo(() => {
    return transaction.reduce(
      (acc, transactions) => {
        if (transactions.type === 'income') {
          acc.income += transactions.price
          acc.total += transactions.price
        } else {
          acc.outcome += transactions.price
          acc.total -= transactions.price
        }

        return acc
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    )
  }, [transaction])

  return summary
}
