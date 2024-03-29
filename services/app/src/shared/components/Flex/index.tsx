import { CSSProperties, forwardRef, PropsWithChildren } from 'react'

import { CombineComponentProps, CombineElementRef } from './type'

export type CommonFlexProps = {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  alignItems?: CSSProperties['alignItems']
  justifyContent?: CSSProperties['justifyContent']
  inline?: boolean
  gap?: CSSProperties['gap']
}
export type FlexProps<C extends React.ElementType = 'div'> =
  CombineComponentProps<C, CommonFlexProps>

type FlexComponent = <C extends React.ElementType = 'div'>(
  props: FlexProps<C>
) => React.ReactElement | null

export const DEFAULT_ELEMENT = 'div' as const

const Flex: FlexComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      flexDirection = 'row',
      alignItems = 'flex-start',
      justifyContent = 'flex-start',
      children,
      gap,
      inline = false,
      as,
      ...rest
    }: PropsWithChildren<FlexProps<C>>,
    ref: CombineElementRef<C>
  ) => {
    const Component = as ?? DEFAULT_ELEMENT

    return (
      <Component
        ref={ref}
        css={{
          display: inline ? 'inline-flex' : 'flex',
          flexDirection,
          alignItems,
          justifyContent,
          gap,
        }}
        {...rest}
      >
        {children}
      </Component>
    )
  }
)

export default Flex
