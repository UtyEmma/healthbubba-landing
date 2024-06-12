import React from 'react'

export const SubscriptionCTA = (props) => {
    return (
        <div {...props}>
            <div className="space-y-5">

                <div class="p-5 rounded-xl shadow border space-y-3 bg-white">
                    <h5 class={'font-semibold'}>Subscribe to Our Newsletter</h5>
                    <div className="flex space-x-3">
                        <input type="text" placeholder='Email Address' class="form-control flex-1" />
                        <button class="btn btn-primary">Subscribe</button>
                    </div>

                    <div class={'text-center'}>
                        <p class={'font-medium text-sm'}>・ Unsubscribe anytime.</p>
                    </div>
                </div>

                <div class={'space-y-2'}>
                    <a href="" className="block underline">Download our Android App</a>
                    <a href="" className="block underline">Download our iOS App</a>
                </div>

                <div class={'flex w-2/3 items-center space-x-3'}>
                    <div className="p-1 flex-shrink-0 shadow-md inline-block rounded-lg">
                        <img src="/assets/imgs/qr-code.svg" alt="" />
                    </div>

                    <div class={'flex-1'}>
                        <p className="text-lg font-semibold">Scan to download the Patient App</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
