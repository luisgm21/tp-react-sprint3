import { ROUTE_PATHS } from './routePaths'

export const NAV_LINKS = [
  { label: 'Inicio', to: ROUTE_PATHS.HOME },
  { label: 'Acerca', to: ROUTE_PATHS.ABOUT_FULL },
  { label: 'Usuario 123', to: `${ROUTE_PATHS.USER_BASE}/123` }
]
