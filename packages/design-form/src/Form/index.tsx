import React, { forwardRef } from 'react'
import { UseFormReturnType } from '../types'

export interface FormProps<
  Form extends UseFormReturnType<any, TransformedValues>,
> extends React.ComponentPropsWithRef<'form'> {
  form: Form
  onSubmit?(values: TransformedValues<Form>): void
}

export const Form = () => {
  return <div> Form </div>
}
