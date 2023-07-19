import { forwardRef } from 'react'
import { PolymorphicComponentProps, PolymorphicRef } from '@design/styles'

type _ViewProps = {
  color: string
}

type ViewProps<T extends React.ElementType> = PolymorphicComponentProps<
  T,
  _ViewProps
>

// PolymorphicComponentProps에서 ref?: PolymorphicRef<T>를 제외하면 ViewComponent여기서는 ref가 없어서 결국 에러남
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

// type TestProps<T extends React.ElementType> = {
//   as?: T
// }

const a = <T extends React.ElementType>(a: T) => a

a('a')
