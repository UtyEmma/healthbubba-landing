import React from 'react'

export default function () {
    return (
        <div className="p-1 rounded-2xl hover:shadow-xl border border-gray-200 transition-all duration-150 ">
            <div>
                <img src="/assets/imgs/packages/microbiology.png" alt="" />
            </div>
            <div className="p-3 space-y-4">
                <div className="space-y-2">
                <a className="font-semibold " href="#">Microscopy</a>
                <p className="text-muted line-clamp-3">This test looks at a sample of choice under a microscope. It can see cells from your urinary tract, blood cell...</p>
                </div>
                <button className="py-2 px-5 border space-x-4 font-medium rounded-[50px] shadow flex items-center">Read More <i className="bi bi-arrow-right-short fs-2" /></button>
            </div>
        </div>
    )
}
