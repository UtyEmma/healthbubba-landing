import Button from "@/Components/Button";
import { Dialog } from "@headlessui/react";
import { PlayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { router } from "@inertiajs/react";
import React, { useEffect, useMemo, useState } from "react";

export default function WelcomeModal() {
    const [isOpen, setIsOpen] = useState(false);

    const close = () => {
        setIsOpen(false);
    };

	const [type, setType] = useState('')

    useEffect(() => {
        if(!window.sessionStorage.getItem('VISITOR_TYPE')) setIsOpen(true)
    }, [])

	const visit = () => {
		window.sessionStorage.setItem('VISITOR_TYPE', type)
		setIsOpen(false)

		if(type == 'practitioner') return router.visit(route('practitioners'))
		if(type == 'patient') return router.visit(route('home'))
	}

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen bg-black/25 items-center justify-center p-4">
                <Dialog.Panel className="max-w-xl space-y-4 border rounded-2xl bg-white p-5 md:p-8">
                    <div className="flex justify-between">
                        <div>
                            <Dialog.Title className="font-semibold text-lg">
                                Welcome to healthbubba!
                            </Dialog.Title>
                            <Dialog.Description className="text-gray-500">
                                We provide healthcare and prescriptions all from
                                home
                            </Dialog.Description>
                        </div>

                        <div>
                            <button onClick={close}>
                                <XMarkIcon className="size-5" />
                            </button>
                        </div>
                    </div>

                    <div className="md:py-5 py-3 space-y-5">
                        <ItemSelect 
							value={'practitioner'} 
							setType={setType} type={type} 
							title="Are you a healthcare professional?" 
							description='Join HealthBubba to offer care, manage patients, and grow your practice.' 
						/>
                        
						<ItemSelect 
							value={'patient'} 
							setType={setType} type={type} 
							title="Are you seeking healthcare?" 
							description='Find trusted professionals and get the care you need, when you need it.' 
						/>
                    </div>
                    <div className="flex justify-end gap-4">
                        <Button className="btn btn-primary py-2" onClick={visit}>Continue <PlayIcon class={'text-white text-opacity-80 w-5 h-5'} /></Button>
                    </div>
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}

const ItemSelect = ({value, type, setType, title, description}) => {

	const isChecked = useMemo(() => type == value, [type, value])

	return (
		<label className="flex border items-center px-3 md:px-5 py-3.5 gap-3 md:gap-4 rounded-2xl">
			<div>
				<input type="radio" checked={type == value} onChange={() => setType(value)}  
					className={`size-5 border-gray-300 outline-none ring-0 ${isChecked ? 'text-primary' : ''}`} 
				/>
			</div>
			<div>
				<p className="font-medium">{title}</p>
				<p className="text-sm text-gray-500">{description}</p>
			</div>
		</label>
	)
}
