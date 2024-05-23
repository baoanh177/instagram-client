import { ReactNode } from "react"

export interface IRoute {
  path: string
  layout?: () => ReactNode
  middleware?: () => ReactNode
  element?: () => ReactNode
  pages?: IRoute[]
}

