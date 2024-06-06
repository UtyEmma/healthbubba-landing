import React from 'react'

export default function ({children, ...props}) {
  return (
    <button className={`btn ${props.className}`} {...props}>{children}</button>
  )
}
