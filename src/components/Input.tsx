import React from "react"

/**
 * Example : 1
 * It's a React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
 */
// type TPropsInput = {} & React.DetailedHTMLProps<
//   React.InputHTMLAttributes<HTMLInputElement>,
//   HTMLInputElement
// >

/**
 * Example : 2
 * The `input` element is a built-in React element.
 */
// type TPropsInput = JSX.IntrinsicElements["input"]

/**
 * Example : 3
 * It's a React component that has a `ref` property.
 */
// type TPropsInput = React.ComponentPropsWithRef<"input">

/**
 * Example : 4
 * The type of the props of the React component that is returned by the function.
 */
type TPropsInput = React.ComponentPropsWithoutRef<"input">

export function Input({ ...props }: TPropsInput) {
  return <input type="text" {...props} />
}
