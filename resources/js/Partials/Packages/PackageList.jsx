import React, { useEffect, useState } from 'react'
import SinglePackage from './SinglePackage'
import Disclose from '@/Components/Display/Disclose'

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';
import { Transition } from '@headlessui/react';
import Carousel from 'react-multi-carousel';

export default function ({categories}) {
    const [active, setActive] = useState(0)

    return (
        <>
            <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
                {
                    categories?.map((category, index) => {
                        return (
                            <button onClick={() => setActive(index)} className={`border-2 text-sm items-center space-x-1 p-1 px-2 md:px-3 hover:bg-black hover:border-black hover:text-white hover:shadow-lg transition-all duration-300 rounded-[50px] ${index == active ? ' border-black bg-black shadow-lg text-white' : 'bg-gray-100'}`}>{category.category_name}</button>
                        )
                    })
                }
            </div>

            <div >
                {
                    categories?.map((category, index) => (
                        <CategoryPackages key={`${index}-category`} category={category} active={active} index={index}  />
                    ))
                }
            </div>
        </>
    )
}

const CategoryPackages = ({category, index, active}) => {
    return (
        <>
            <div className="md:block hidden">
                <div className={`${index == active ? 'grid grid-cols-4 gap-5' : 'hidden'}`}>
                    {
                        category.tests.map((test, index) => (
                            <Disclose key={'test-md-'+index} show={index < 4} >
                                <SinglePackage test={test}  />
                            </Disclose>
                        ))
                    }
                </div>
            </div>

            <div className='md:hidden' >
                <div className='relative'>
                    <div className={`${index == active ? 'block' : 'hidden'}`}>
                        <PackageCarousel tests={category.tests} />
                    </div>
                </div>
            </div>
        </>
    )
}

const PackageCarousel = ({tests}) => {
    return (
        <div className='max-w-full overflow-x-auto'>
            <div  className='inline-flex  relative gap-x-3 w-auto py-4 '>
                {
                    tests.map((test, index) => (
                        <div className={`w-[70vw]`}>

                            <SinglePackage key={'test'+index} test={test}  />
                        </div>
                    ))
                }
            </div>
        </div>

    )
}


{/* <Swiper
    slidesPerView={2}
    // slidesPerView={'auto'}
    spaceBetween={10}
    // slideActiveClass='!w-[80%]'
    // onSlideChange={(swiper) => swiper.acti}
    pagination={{
        clickable: true,
        enabled: false
    }}
    modules={[Pagination]}
    // slideActiveClass='w-4/5'
    // slideNextClass=''
>
    {
        category.tests.map((test, index) => (
            <Disclose key={'test-'+index} show={index < 4} >
                <SwiperSlide>
                    <SinglePackage test={test}  />
                </SwiperSlide>
            </Disclose>
        ))
    }
</Swiper> */}


