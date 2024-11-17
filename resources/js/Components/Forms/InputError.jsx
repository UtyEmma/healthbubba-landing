import React from 'react'

export default function InputError({error}) {
    return (
        <p className='text-red-600'>{error}</p>
    )
}
