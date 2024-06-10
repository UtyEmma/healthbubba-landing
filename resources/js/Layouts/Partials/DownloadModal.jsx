import { useContext, useRef } from "react"
import { DownloadContext } from "../GuestLayout"
import Disclose from "@/Components/Display/Disclose"
import DownloadQR from "@/Components/QRCodes/DownloadQR"
import Button from "@/Components/Button"
import { motion, AnimatePresence } from "framer-motion"

export default function () {

    const {status, close} = useContext(DownloadContext)
    const qr = useRef(null)

    const hide = (e) => qr.current.contains(e.target) ? null : close();

    return (

            <Disclose show={status}>
                <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30" onClick={hide}>
                    <div ref={qr} className=" absolute w-1/5 space-y-5 aspect-square bottom-3 right-3 p-4 bg-[#1F1F1F] rounded-[14.51px] duration-200 transition-all" data-taos-offset="300">
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
            </Disclose>
    )

}
