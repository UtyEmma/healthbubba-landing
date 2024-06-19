import React from 'react'

export const PolicyItem = ({title, children}) => {
    return (
        <div class={'md:py-5 py-2 space-y-3'}>
            <h2 class={'text-xl md:text-2xl font-medium'}>{title}</h2>

            <div class={'bg-gray-100 text-sm md:text-base p-4 md:p-5 space-y-3 border rounded-lg text-muted'}>
                {children}
            </div>
        </div>
    )
}
