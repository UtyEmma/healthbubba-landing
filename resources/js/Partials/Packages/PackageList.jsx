import React, { useEffect, useState } from 'react'
import SinglePackage from './SinglePackage'
import Disclose from '@/Components/Display/Disclose'

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import {Swiper, SwiperSlide} from 'swiper/react';

export default function ({categories}) {

    const [active, setActive] = useState(0)

    return (
        <>
            <div className="flex justify-center items-center gap-2 md:gap-3 flex-wrap">
                {
                    categories.map((category, index) => {
                        return (
                            <button onClick={() => setActive(index)} className={`border-2 text-sm items-center space-x-1 p-1 px-2 md:px-3 hover:bg-black hover:border-black hover:text-white hover:shadow-lg transition-all duration-300 rounded-[50px] ${index == active ? ' border-black bg-black shadow-lg text-white' : 'bg-gray-100'}`}>{category.category_name}</button>
                        )
                    })
                }
            </div>

            <div >
                {
                    categories.map((category, index) => (
                        <div className={`md:grid hidden  md:grid-cols-4 gap-5 ${index == active ? 'block' : 'hidden'}`}>
                            <CategoryPackages category={category} active={active} index={index}  />
                        </div>
                    ))
                }

                {
                    categories.map((category, index) => (
                        <CategoryPackages category={category} active={active} index={index} />
                    ))
                }
            </div>
        </>
    )
}

const CategoryPackages = ({category, index, active}) => {
    const [tests, setTests] = useState([])

    const listTests = async () => {
        const data = await fetch(route('tests.list', {
            category: category.category_id
        }), {
            headers: {
                'Accept' : 'application/json'
            }
        }).then(
            (res) => res.json(),
            (err) => err
        ).catch(err => console.log(err))
        if(data) setTests(data.tests);
    }

    useEffect(() => {
        listTests()
    }, [])

    const test = ""

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <>
            <div className={`md:grid hidden  md:grid-cols-4 gap-5 ${index == active ? 'block' : 'hidden'}`}>
                {
                    tests.map((test, index) => (
                        <Disclose show={index < 4} >
                            <SinglePackage test={test}  />
                        </Disclose>
                    ))
                }
            </div>
            <div className='md:hidden' >
                <div className={`${index == active ? 'flex' : 'hidden'}`}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                    >
                        {
                            tests.map((test, index) => (
                                <Disclose  show={index < 4} >
                                    <SwiperSlide>
                                        <SinglePackage test={test}  />
                                    </SwiperSlide>
                                </Disclose>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </>
    )
}


