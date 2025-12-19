import React from 'react'

export default function Disclose({show, children, as: Element, fallback: Fallback, ...props}) {
    return (
        show 
        
        ?

        <>
            {
                Element

                ?

                <Element {...props}>
                    {children}
                </Element>

                :

                children 
            }
        </>

        :

        Fallback ?? null
    )
}