import React from 'react'

export default function ({active = false, message, name,index, next, prev, label,  role, avatar, classes = { message: '', image: '', author: '', role: '' }, className, ...props}) {
    return (
        <div className='relative py-5'>
            <div style={{
                zoom: active ? 1 : 0.95
            }} className={`${active ? '' : 'bg-white bg-opacity-60 p-5 md:p-10 md:rounded-3xl rounded-lg shadow-lg'}   ${className}`}>
                <div className={active ? 'md:rounded-3xl rounded-lg min-h-[200px] flex items-center md:min-h-[300px] shadow-lg bg-white bg-opacity-90 p-5 md:p-16 space-y-5 relative z-50' : 'blur-sm overflow-hidden'}>
                    <div className={`space-y-3 md:space-y-5`}>
                        <p className={`text-muted text-xs md:text-lg font-medium leading-relaxed ${classes.message} ${active ? "" : 'line-clamp-2'}`}>"{message}"</p>
                        <div className="justify-start items-center gap-2 md:gap-4 inline-flex">
                            <img className={`size-11 md:size-14 shrink-0 rounded-full object-cover ${classes.image}`} src={avatar} />
                            <div className="flex-col text-xs md:text-base justify-start items-start inline-flex">
                                <div className={`text-neutral-900 font-medium ${classes.author} ${active ? "" : 'line-clamp-1'}`}>{name}</div>
                                <div className={`text-gray-600 font-normal ${classes.role} ${active ? "" : 'line-clamp-1'}`}>{role}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
