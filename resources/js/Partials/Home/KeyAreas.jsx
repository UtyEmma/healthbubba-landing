import Marquee from 'react-fast-marquee';
import React from 'react'

export default function KeyAreas() {
  return (
    <section id='about'>
        <div key="about-text" className='hidden lg:block'>
            <div className="text-sm mx-auto py-10 px-4 md:px-10 justify-between flex overflow-x-auto gap-7 md:gap-10">
                <div className="flex flex-col items-center justify-stretch shrink-0 text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                        <img src="/assets/icons/primary-care.png" className="w-2/3" />
                    </div>
                    <div className="font-medium">Primary Care</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                        <img src="/assets/icons/manage.png" className="w-2/3" />
                    </div>
                    <div className="font-medium">Manage your Condition</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/behaviour.png" className="w-2/3" />
                    </div>
                    <div className="font-medium">Mental &amp; Behavioural Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                        <img src="/assets/icons/sexual-health.png" className="w-2/3" />
                    </div>
                    <div className="font-medium">Sexual Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/children.png" className="w-2/3" />
                    
                    </div>
                    <div className="font-medium">Children's Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/senior-health.png" className="w-2/3" />                                    
                    </div>
                    <div className="font-medium">Senior Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/womens-health.png" className="w-2/3" />     
                    </div>
                    <div className="font-medium">Women's Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/mens-haelth.png" className="w-2/3" />    
                    </div>
                    <div className="font-medium">Men's Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/prescriptions.png" className="w-2/3" />    
                    </div>
                    <div className="font-medium">Online Prescriptions</div>
                </div>
            </div>
        </div>

        <div key="text-about" className='lg:hidden'>
            <Marquee >
                <div className="text-sm mx-auto py-10 px-0 justify-between overflow-x-auto gap-7 md:gap-10 flex" >
                <div className="flex flex-col items-center justify-stretch shrink-0 text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                        <img src="/assets/icons/primary-care.png" className="w-2/3" />
                    </div>
                    <div className="font-medium">Primary Care</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                        <img src="/assets/icons/manage.png" className="w-2/3" />
                    </div>
                    <div className="font-medium">Manage your Condition</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/behaviour.png" className="w-2/3" />
                    </div>
                    <div className="font-medium">Mental &amp; Behavioural Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                        <img src="/assets/icons/sexual-health.png" className="w-2/3" />
                    </div>
                    <div className="font-medium">Sexual Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/children.png" className="w-2/3" />
                    
                    </div>
                    <div className="font-medium">Children's Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/senior-health.png" className="w-2/3" />                                    
                    </div>
                    <div className="font-medium">Senior Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/womens-health.png" className="w-2/3" />     
                    </div>
                    <div className="font-medium">Women's Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/mens-haelth.png" className="w-2/3" />    
                    </div>
                    <div className="font-medium">Men's Health</div>
                </div>
                <div className="flex flex-col items-center shrink-0 justify-stretch text-center">
                    <div className="shadow border rounded-xl p-2 w-16 flex items-center justify-center aspect-square mb-4">
                    <img src="/assets/icons/prescriptions.png" className="w-2/3" />    
                    </div>
                    <div className="font-medium">Online Prescriptions</div>
                </div>
                </div>
            </Marquee>
        </div>
    </section>
  )
}
