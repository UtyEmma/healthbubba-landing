import Accordion from '@/Components/Accordion'
import Disclose from '@/Components/Display/Disclose'
import GuestLayout from '@/Layouts/GuestLayout'
import { CalendarDaysIcon, ChevronRightIcon, InformationCircleIcon, UserIcon } from '@heroicons/react/24/solid'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import PostItem from './Partials/PostItem'


export default function Show({post, posts}) {
    return (
        <GuestLayout hideGap>
            <Head title={post.title} />
            <div className=' border-y  py-5 mb-5 md:mb-10'>
                <div className={'max-w-7xl px-2 md:px-0 space-y-2 mx-auto'}>
                    <h2 className='text-2xl md:text-3xl font-semibold' >{post.title}</h2>
                    <ul className={'flex flex-wrap font-medium text-[14px] gap-1 items-center'}>
                        <li>
                            <Link className='text-muted hover:text-primary' href={route('home')}>Home</Link>
                        </li>
                        <li><ChevronRightIcon className='size-3' /></li>
                        <li>
                            <Link className='text-muted hover:text-primary' href={route('blog')}>Blog</Link>
                        </li>
                        <li><ChevronRightIcon className='size-3' /></li>
                        <li>{post.title}</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-2 pb-5 md:px-0 space-y-5">
                <div className='rounded-xl'>
                    <img src={post.featured_image} className='aspect-video object-cover rounded-xl md:rounded-3xl' alt="" />
                </div>

                <div className="space-y-2">
                    <div className="text-[13px] p-2 rounded inline-flex bg-primary-100 text-primary-500 font-medium py-1">
                        {post.category.name}
                    </div>
                    <h1 className='text-2xl md:text-3xl font-semibold' >{post.title}</h1>
                    <div className="flex prose items-center gap-2 text-sm font-medium text-gray-600">
                        <div className="gap-1.5 flex items-center">
                            <UserIcon className='size-5 text-primary' />
                            {post.author.name}
                        </div>
                        <div className="gap-1.5 flex items-center">
                            <CalendarDaysIcon className='size-5 text-primary' />
                            {post.date}
                        </div>
                    </div>
                </div>                

                <div className='prose w-full max-w-full' dangerouslySetInnerHTML={{__html: post.content}} ></div>

                <Disclose show={post.faqs?.length > 0} >
                    <div className="mb-10 pb-5 space-y-5">
                        <div >
                            <h2 className='md:text-2xl font-semibold' >{post.faq_title ?? 'Frequently Asked Questions'}</h2>
                        </div>

                        <ul className='list-decimal list-outside ms-4'>
                            {
                                post.faqs.map((item) => (
                                    <li key={item.id}  >
                                        <h4 className='text-lg font-medium'>{item.question}</h4>
                                        <p className='text-gray-500'>{item.answer}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* {
                            <Accordion className='!border-0 !p-0 divide-y !shadow-none' >
                                {
                                    post.faqs.map((item) => (
                                        <Accordion.Panel className='!border-0 overflow-hidden !p-0 !shadow-none' key={item.id} >
                                            <Accordion.Button className='!p-0'>{item.question}</Accordion.Button>
                                            <Accordion.Content className='!py-2 !px-0'>{item.answer}</Accordion.Content>
                                        </Accordion.Panel>
                                    ))
                                }
                            </Accordion>
                        } */}
                    </div>
                </Disclose>

                <Disclose show={!!post.reviewer} as={'div'} className="bg-primary-50 rounded-xl p-3 px-5 space-y-2" >
                    <div>
                        <h5 className='font-semibold text-lg'>Reviewed By</h5>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <div className="size-20">
                                <img src={post.reviewer.image} className='rounded-lg' alt="" />
                            </div>
                        </div>
                        <div className='py-2 flex-1'>
                            <div className="flex items-center gap-1">
                                <h4 className='text-lg leading-none font-semibold' >{post.reviewer.name}</h4>
                                -
                                <p className="leading-none text-muted  font-medium">{post.reviewer.specialty}</p>
                            </div>

                            <div className="">
                                <p className='text-gray-500'>{post.reviewer.description}</p>
                            </div>
                        </div>
                    </div>
                </Disclose>

                <div className="bg-amber-50 border border-amber-100 px-4 py-2 rounded-lg items-center gap-2 flex">
                    <InformationCircleIcon className='text-amber-500 size-6' />
                    <p className="text-amber-500">This article is for informational purposes only and is not a substitute for professional medical advice.</p>
                </div>

                <div className='flex py-3 border-y items-center gap-2'>
                    <p className='font-semibold'>Tags:</p>
                    {
                        post.tags.map(tag => (
                            <div className='inline-flex items-center font-medium bg-primary-50 border-2 py-1 border-primary-200 text-primary-600 px-3 text-sm rounded'>
                                {tag}
                            </div>
                        ))
                    }
                </div>

            </div>

            <Disclose show={posts.length > 0} as="div" className='max-w-7xl mx-auto space-y-5' >
                <div>
                    <h4 className='text-2xl font-semibold'>Recent Posts</h4>
                </div>

                <div>
                    <div className="grid md:grid-cols-3 gap-5 mb-4">
                        {
                            posts.map(post => <PostItem key={post.id} post={post} />)
                        }
                    </div>
                </div>
            </Disclose>
        </GuestLayout>
    )
}
