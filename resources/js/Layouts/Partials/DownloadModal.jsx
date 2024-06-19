import { useContext, useRef } from "react"
import { DownloadContext } from "../GuestLayout"
import Disclose from "@/Components/Display/Disclose"
import DownloadQR from "@/Components/QRCodes/DownloadQR"
import Button from "@/Components/Button"
import { motion, AnimatePresence } from "framer-motion"
import { Transition } from "@headlessui/react"

export default function () {

    const {status, close} = useContext(DownloadContext)
    const qr = useRef(null)

    const hide = (e) => qr.current.contains(e.target) ? null : close();

    return (
        <>
            <Transition show={status}>
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30" onClick={hide}>
                    <Transition.Child
                        show={status}
                        enter="transition ease-in-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition-all duration-150"
                        leaveFrom="translate-y-0"
                        leaveTo="translate-y-full"
                    >
                        <div ref={qr} className="absolute bottom-3 right-0 left-0 px-3 md:flex md:justify-end justify-center duration-200 transition-all">
                            <div className="w-5/6 sm:w-4/5 md:w-1/5 mx-auto md:mx-0 space-y-5 aspect-square p-3 bg-[#1F1F1F] rounded-[14.51px]">
                                <DownloadQR className="w-full" />

                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <Button className="text-[12px] w-full px-3 rounded-lg btn border border-[#383838] bg-[#282828] text-white hover:bg-black transition-all duration-300">Download iOS</Button>
                                    </div>
                                    <div>
                                        <Button className="text-[12px] w-full px-3 rounded-lg btn border border-[#383838] bg-[#282828] text-white hover:bg-black transition-all duration-300">Download Android</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Transition>
        </>
    )

}
