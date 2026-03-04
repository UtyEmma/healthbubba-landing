import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function PostItem({post, className}) {
    return (
        <div className={`p-1 rounded-2xl min-h-full md:hover:shadow-xl border border-gray-200 transition-all duration-150 ${className}`}>
            <Link href={route('blog.show', {post})} className='block rounded-xl overflow-hidden aspect-[4/3]'>
                <img src={post.featured_image} className='object-cover size-full' alt={post.title} />
            </Link>
            <div className="p-3 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                    <p className="text-sm font-medium text-primary">{post.category.name}</p>
                    <div className="space-y-2">
                        <Link href={route('blog.show', {post})} className="font-bold hover:text-primary active:text-primary-500 text-lg line-clamp-2" >{post.title}</Link>
                        <p className="text-muted line-clamp-3">{post.excerpt}</p>
                    </div>
                </div>

                <div>
                    <Link href={route('blog.show', {post})} className="py-2 px-3 w-full border-gray-200 border-2 space-x-5 text-primary-500 font-medium rounded-[50px] shadow-sm inline-flex items-center justify-center">Read More</Link>
                </div>
            </div>
        </div>
    )
}
