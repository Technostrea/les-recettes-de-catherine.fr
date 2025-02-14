export interface RootResponse<T> {
  content: T[]
  status: string
  code: number
  message: string
  meta: Meta
}

export interface Meta {
  total: number
  lastPage: number
  currentPage: string
  perPage: string
  prev: string
  next: string
}
