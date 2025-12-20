import React from 'react'

export default function PartnerPharmacies() {
    return (
		<section className="bg-[#068940] overflow-hidden relative py-10 md:py-20" >
			<div className="text-center max-w-3xl mx-auto text-white px-4 flex flex-col items-center space-y-5">
				<p>Trusted by fast-growing Pharmacies and Healthcare companies around the world</p>
				<div className="flex gap-x-7 justify-center items-center gap-2 gap-y-5 sm:gap-y-3 sm:gap-5 flex-wrap">
					<div>
						<a href="#">
							<img src="/assets/imgs/brands/synlab.svg" alt="" />
						</a>
					</div>
					<div>
						<a href="https://www.sinocareintl.com/" target='__blank'>
							<img src="/assets/imgs/brands/smart-pharm.svg" className='h-6' alt="" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src="/assets/imgs/brands/onehealth.svg" alt="" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src="/assets/imgs/brands/healthtracka.png" className='h-6' alt="" />
						</a>
					</div>
				</div>
			</div>
		</section>
    )
}
