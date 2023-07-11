import { forwardRef } from 'react'
import { PolymorphicComponentProps, PolymorphicRef } from '../types'

type _ViewProps = {
  color: string
}

type ViewProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  _ViewProps
>

type ViewComponent = <C extends React.ElementType = 'div'>(
  props: ViewProps<C>,
) => React.ReactNode | null

export const View: ViewComponent = forwardRef(
  <T extends React.ElementType = 'div'>(
    { component, color, ...props }: ViewProps<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    const Element = component || 'div'
    return <Element ref={ref} {...props} style={{ color }} />
  },
)
