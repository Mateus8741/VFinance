'use client'

import { Transaction } from '@/models/Transaction'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface IStore {
  transaction: Transaction[]
  setTransaction: (transaction: Transaction) => void
  clearTransactions: () => void
}

const useTransactionStore = create<IStore>()(
  persist(
    (set) => ({
      transaction: [],
      setTransaction: (transaction) =>
        set((state) => ({ transaction: [...state.transaction, transaction] })),
      clearTransactions: () => set({ transaction: [] }),
    }),
    {
      name: 'transaction-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export function useStoreFinance() {
  const { transaction, setTransaction, clearTransactions } =
    useTransactionStore()

  return { transaction, setTransaction, clearTransactions }
}
