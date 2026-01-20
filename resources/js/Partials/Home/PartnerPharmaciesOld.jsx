import React from 'react'

export default function PartnerPharmacies() {
    return (
		<section className="bg-secondary overflow-hidden relative py-16 bg-left bg-no-repeat bg-contain bg-top" style={{backgroundImage: 'url(/assets/imgs/media/doodle-bg.svg)'}}>
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
							<img src="/assets/imgs/brands/sinocare.png" className='h-6 filter brightness-0 invert-[1]' alt="" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src="/assets/imgs/brands/onehealth.svg" alt="" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src="/assets/imgs/brands/healthtracka.png" className='h-6 filter brightness-0 invert-[1]' alt="" />
						</a>
					</div>
				</div>
				{/* <div className="flex space-x-7 items-center justify-around gap-2 gap-y-5 sm:gap-y-3 sm:gap-3 flex-wrap">
					<div>
						<a href="#">
							<img src="/assets/imgs/brands/synlab.svg" alt="" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src="/assets/imgs/brands/onehealth.svg" alt="" />
						</a>
					</div>
				</div>
				<div >
					<div className='text-center'>
						<a href="https://www.sinocareintl.com/" target='__blank'>
							<img src="/assets/imgs/brands/sinocare.png" className='h-5 duration-200 hover:filter-none filter hover:invert-0 invert hover:brightness-100 brightness-0' alt="" />
						</a>
					</div>
				</div> */}
			</div>
		</section>
    )
}
