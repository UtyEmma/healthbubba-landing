import React from 'react'

export const SubscriptionCTA = (props) => {
    return (
        <div {...props}>
            <div className="space-y-5">

                <div className="p-5 rounded-xl shadow border space-y-3 bg-white">
                    <h5 className={'font-semibold'}>Subscribe to Our Newsletter</h5>
                    <div className="flex space-x-3">
                        <input type="text" placeholder='Email Address' className="form-control flex-1" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>

                    <div className={'text-center'}>
                        <p className={'font-medium text-sm'}>・ Unsubscribe anytime.</p>
                    </div>
                </div>

                <div className={'space-y-2'}>
                    <a href="" className="block underline">Download our Android App</a>
                    <a href="" className="block underline">Download our iOS App</a>
                </div>

                <div className={'flex w-2/3 items-center space-x-3'}>
                    <div className="p-1 flex-shrink-0 shadow-md inline-block rounded-lg">
                        <img src="/assets/bubba_play.png" className="size-20"  alt="" />
                    </div>

                    <div className={'flex-1'}>
                        <p className="text-lg font-semibold">Scan to download the Patient App</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
