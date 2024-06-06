import React from 'react'

export default function () {
    return (
        <div className="p-1 rounded-2xl shadow-xl ">
            <div>
                <img src="/assets/imgs/packages/microbiology.png" alt="" />
            </div>
            <div className="p-3 space-y-4">
                <div className="space-y-2">
                <a className="font-semibold " href="#">Microscopy</a>
                <p className="text-muted line-clamp-3">This test looks at a sample of choice under a microscope. It can see cells from your urinary tract, blood cell...</p>
                </div>
                <button className="py-2 px-5 border space-x-3 rounded-[50px] shadow">Read More <i className="bi bi-arrow-right" /></button>
            </div>
        </div>
    )
}
