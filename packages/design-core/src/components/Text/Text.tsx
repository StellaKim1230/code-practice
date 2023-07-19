import { forwardRef } from 'react'
import { PolymorphicComponentProps, PolymorphicRef } from '@design/styles'

type _TextProps = {
  size: number
  color: string
}

type TextProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  _TextProps
>

type TextComponent = <T extends React.ElementType = 'span'>(
  props: TextProps<T>,
) => React.ReactNode | null

export const Text: TextComponent = forwardRef(
  <T extends React.ElementType = 'span'>(
    { component, size, color, ...props }: TextProps<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    const Element = component || 'div'

    return <Element ref={ref} {...props} style={{ fontSize: size, color }} />
  },
)
