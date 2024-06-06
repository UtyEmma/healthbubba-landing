import React from 'react'

export const PolicyItem = ({title, children}) => {
    return (
        <div class={'py-5 space-y-3'}>
            <h2 class={'text-2xl font-medium'}>{title}</h2>

            <div class={'bg-gray-100 p-5 space-y-3 border rounded-lg text-muted'}>
                {children}
            </div>
        </div>
    )
}
