import React from 'react'

export default function Card({children, className = ''}) {
  return (
    <div className={`md:p-10 p-5 shadow-xl border bg-white rounded-2xl space-y-5 ${className}`} >{children}</div>
  )
}
