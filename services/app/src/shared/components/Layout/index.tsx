import { css } from '@emotion/css'
import { PropsWithChildren } from 'react'

interface Props {
  pageTitle?: string
}

export default function Layout({
  pageTitle,
  children,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
      `}
    >
      {pageTitle}
      {children}
    </div>
  )
}
