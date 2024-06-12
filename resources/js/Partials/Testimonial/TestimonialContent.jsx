import React from 'react'

export default function ({message, author, role, image, classes = {
    message: '',
    image: '',
    author: '',
    role: ''
}, className, ...props}) {
    return (
        <div className={`space-y-5 ${className}`}>
            <p className={`text-muted text-sm md:text-lg font-medium leading-relaxed ${classes.message}`}>"{message}"</p>
            <div className="justify-start items-center gap-4 inline-flex">
                <img className={`h-14 ${classes.image}`} src={image} />
                <div className="flex-col justify-start items-start inline-flex">
                    <div className={`text-neutral-900 font-medium ${author}`}>{author}</div>
                    <div className={`text-gray-600 text-base font-normal ${role}`}>{role}</div>
                </div>
            </div>
        </div>
    )
}
