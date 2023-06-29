export type _TransformedValues<Values> = (values: Values) => unknown

export interface UseFormReturnType<Values, TransformValues> {
  values: Values
}
