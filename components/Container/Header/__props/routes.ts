export const routes: Routes = [
  {
    name: 'home',
    href: '/'
  },
  {
    name: 'tags',
    href: '/tags'
  },
  {
    name: 'about us',
    href: '/about-us'
  },
  {
    name: 'contact us',
    href: '/contact-us'
  },
]

type Routes = RouteProps []

export type RouteProps = {
  name: string,
  href: string
}