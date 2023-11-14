import { InputHTMLAttributes } from 'react'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`border-primary border rounded p-2 outline-none text-primary text-sm placeholder:text-primary ${props.className}`}
    />
  )
}
