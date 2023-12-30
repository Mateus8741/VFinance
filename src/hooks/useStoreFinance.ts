'use client'

import { Transaction } from '@/models/Transaction'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface IStore {
  transaction: Transaction[]
  setTransaction: (transaction: Transaction) => void
}

const useTransactionStore = create<IStore>()(
  persist(
    (set) => ({
      transaction: [],
      setTransaction: (transaction) =>
        set((state) => ({ transaction: [...state.transaction, transaction] })),
    }),
    {
      name: 'transaction-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export function useStoreFinance() {
  const { transaction, setTransaction } = useTransactionStore()

  return { transaction, setTransaction }
}
