import React from 'react'

export default function ({show, children}) {
    return (
        <>
            {show ? children : <></>}
        </>
    )
}
