type ComponentProps<T extends React.ElementType> = {
  component?: T
}

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>['ref']

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = unknown,
> = ComponentProps<T> &
  React.ComponentPropsWithoutRef<T> &
  Props & {
    ref?: PolymorphicRef<T>
  }
