import { Link } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Link as DefaultLink } from 'react-router-dom'

interface RouterLinkProps {
  children: ReactNode
  link: string
  styles: Record<string, any>
  hover?: Record<string, any>
}

export const RouterLink = ({
  children,
  link,
  styles = {},
  hover = {},
}: RouterLinkProps) => {
  return (
    <Link as={DefaultLink} to={link} sx={{ ...styles }} _hover={{ ...hover }}>
      {children}
    </Link>
  )
}
