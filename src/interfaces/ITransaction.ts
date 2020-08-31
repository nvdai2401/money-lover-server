export interface ITransaction {
  id: string
  amount: number
  category: string
  createdAt: string
  lastModified: string
  note: string
  image: string
  deleted?: boolean
}
