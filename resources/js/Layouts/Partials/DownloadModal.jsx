import { useContext, useRef, useState } from "react"
import { DownloadContext } from "../GuestLayout"
import Disclose from "@/Components/Display/Disclose"
import DownloadQR from "@/Components/QRCodes/DownloadQR"
import Button from "@/Components/Button"
import { motion, AnimatePresence } from "framer-motion"
import { Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid"

export default function () {

    const {status, close} = useContext(DownloadContext)
    const qr = useRef(null)

    const hide = (e) => qr.current.contains(e.target) ? null : close();

    const [provider, setProvider] = useState('android')

    return (
        <>
            <Transition show={status}>
                <div className="fixed top-0 bottom-0 right-0 left-0 z-[999999] bg-black bg-opacity-30" onClick={hide}>
                    <Transition.Child
                        show={status}
                        enter="transition ease-in-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all duration-150"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >
                        <button onClick={close} class="absolute top-5 right-5" >
                            <XMarkIcon className="text-white size-10" />
                        </button>
                        <div ref={qr} className="absolute z-[999999999] bottom-3 right-0 left-0 px-3 md:flex md:justify-end justify-center duration-200 transition-all">
                            <div className="w-full sm:w-4/5 md:w-2/6 mx-auto md:mx-0 space-y-5 aspect-square p-3 bg-[#1F1F1F] rounded-[14.51px]">
                                <Disclose show={provider == 'android'} >
                                    <img src="/assets/bubba_play.png" class="w-full aspect-square"  alt="" />
                                </Disclose>
                                <Disclose show={provider == 'ios'} >
                                    <img src="/assets/bubba_ios.png" class="w-full aspect-square"  alt="" />
                                </Disclose>

                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Button onClick={() => setProvider('ios')} className={`text-[12px] w-full px-3 rounded-lg btn border border-[#383838]  ${provider == 'ios' ? 'bg-black' : 'bg-[#282828]'} text-white  transition-all duration-300`}>Download iOS</Button>
                                    </div>
                                    <div>
                                        <Button onClick={() => setProvider('android')} className={`text-[12px] w-full px-3 rounded-lg btn border border-[#383838]  ${provider == 'android' ? 'bg-black' : 'bg-[#282828]'} text-white  transition-all duration-300`}>Download Android</Button>
                                    </div>
                                    {/* <div>
                                        <Button onClick="() => setProvider('android')" className="text-[12px] w-full px-3 rounded-lg btn border border-[#383838] bg-[#282828] text-white hover:bg-black transition-all duration-300">Download Android</Button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Transition>
        </>
    )

}
