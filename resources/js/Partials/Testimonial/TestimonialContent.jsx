import React from 'react'

export default function ({message, author, role, image}) {
    return (
        <div className='space-y-5'>
            <p className="text-muted text-lg font-medium leading-relaxed">"{message}"</p>
            <div className="justify-start items-center gap-4 inline-flex">
                <img className="h-14" src={image} />
                <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-neutral-900 font-medium">{author}</div>
                    <div className="text-gray-600 text-base font-normal">{role}</div>
                </div>
            </div>
        </div>
    )
}
