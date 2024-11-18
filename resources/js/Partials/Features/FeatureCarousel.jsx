import React, { useEffect, useMemo, useRef, useState } from 'react'
import FeatureCarouselItem from './FeatureCarouselItem'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { motion, useAnimation } from 'framer-motion';
import Disclose from '@/Components/Display/Disclose';

export const FeatureCarousel = ({features}) => {

    const [active, setActive] = useState(0)

    const intervalRef = useRef(null);

    const nextItem = useMemo(() => {
        const next = active + 1;
        if(next >= features.length) return 0;
        return next;
    }, [active])

    const prevItem = useMemo(() => {
        const prev = active - 1;
        if(prev < 0) return features.length - 1;
        return prev;
    }, [active])

    const next = () => setActive(nextItem)
    const prev = () => setActive(prevItem)

    const startAutoplay = () => {
        stopAutoplay();
        intervalRef.current = setInterval(next, 5000);
    };

    const stopAutoplay = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, []);
    
    return (
        <div className='md:w-4/5 mx-auto py-10 space-y-5'>
            <div className='mb-5'>
                <div className="md:px-10 px-5">
                    <div className="rounded-xl rounded-b-none border-[3px] border-b-0 mx-auto bg-white border-gray-200 pt-2" >
                    </div>
                </div>
                <div className='relative' >
                    <div className="md:px-5 px-3">
                        <FeatureCarouselItem next={next} prev={prev} {...features[prevItem]} />
                    </div>

                    <div className="absolute top-3 bottom-0">
                        {
                            features.map((feature, index) => {
                                return (
                                    <Disclose show={active == index} >
                                        <motion.div 
                                            initial={{ translateY: '20%', type: ''}}
                                            animate={{translateY: '0%'}}
                                            exit={{scale: '70%'}}
                                            transition={{
                                                bounce: 0,
                                                damping: 0
                                            }}
                                        >
                                            <FeatureCarouselItem next={next} stopAutoplay={stopAutoplay} prev={prev} {...feature} />
                                        </motion.div>
                                    </Disclose>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


            <div className='space-x-2 flex justify-center md:hidden py-10' >
                <button onClick={prev} className="rounded-full p-3 bg-white shadow border">
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                
                <button onClick={next} className="rounded-full p-3 bg-white shadow border">
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
