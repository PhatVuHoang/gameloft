import React from 'react'

export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`border border-primary text-primary py-2 px-8 inline hover:bg-primary hover:text-white mx-16 rounded ${props.className}`}
    >
      {props.children}
    </button>
  )
}
