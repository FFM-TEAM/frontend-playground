import Link from 'next/link'
import { css } from '@emotion/css'
import Flex from '../Flex'

interface Props {
  title?: string
}
function Header({ title }: Props) {
  return (
    <Flex
      as="header"
      className={css`
        height: 3rem;
        width: 100%;
        min-width: 375px;
        max-width: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        z-index: 15;
      `}
    >
      <Link href="/">{title}</Link>
    </Flex>
  )
}

export default Header
