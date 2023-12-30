export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  createdAt: string
}

export interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
