import { lazy, ReactElement, ReactNode } from 'react'
import { LayoutConfig } from './layout-config'

const Contacts = lazy(async () => await import('~/presentation/pages/contacts/contacts'))

export type IRoute = {
  path: string
  element: ReactElement
  isPrivate: boolean
  layout: keyof typeof LayoutConfig
  menuLink?: {
    label: string
    icon: ReactNode
  }
}

export const appRoutes: IRoute[] = [
  {
    path: '/contacts',
    element: <Contacts title='Contacts' />,
    isPrivate: true,
    layout: 'DashboardLayout',
  },
]

export const menuRoutes = appRoutes.filter((item) => item.menuLink)
