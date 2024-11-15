import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { PolicyItem } from './Partials/PolicyItem'
import { Head } from '@inertiajs/react'

export default function () {
    return (
        <GuestLayout className="bg-gray-100">
            <Head title='Terms and Conditions' />
            <div className="max-w-6xl mx-auto px-4">
                <div className="md:p-20 p-4 bg-white divide-y">
                    <div class={'md:space-y-2'}>
                        <h1 class={'text-2xl md:text-4xl font-semibold'}>Terms and Conditions</h1>
                        {/* <p class={'text-muted'}>Last updated May 25, 2023</p> */}
                    </div>

                    <div>
                        <PolicyItem title='Introduction and Acceptance of Terms'>
                            <p>Welcome to Health Bubba Limited, a registered and licensed healthcare technology company based in Lagos, Nigeria. You agree that by accessing or using our website https://www.healthbubba.com  you acknowledge that you have read, understood and agree to be bound by all these Terms and Conditions. Please read them carefully before using our services, if you do not agree to all of these Terms and Conditions, then you are expressly prohibited from using the Site and you must cease use instantly.</p>
                            <p>These Terms and Conditions constitute a legally binding agreement made between you and Health Bubba Limited, outlining your access and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected.
                            </p>
                            <p>Additional Terms and Conditions or documents that may be posted on the Site intermittently are hereby expressly incorporated herein by reference. We reserve the right to modified these terms and conditions at any time and for any reason. Notice of any change will be communicated by updating the “last updated” date and you accept to waive any right to receive this notice in any specific manner.
                            </p>
                            <p>It is your responsibility to periodically review these Terms and Conditions to stay informed of updates. You will be subject to and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms and Conditions by your continued use of the Site after the date such revised Terms and Conditions are posted.
                            </p>
                            <p>The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
                            </p>
                            <p>Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent to which the local laws are applicable
                            </p>
                        </PolicyItem>

                        <PolicyItem title='Definitions'>
                            <ul className="list-disc list-inside">
                                <li>"The Company" refers to Health Bubba Limited, its staff, healthcare providers, and affiliates.</li>
                                <li>"Patient" refers to any individual who uses the Company's telemedicine services.</li>
                                <li>"Telemedicine" refers to the delivery of healthcare services via electronic communications, including consultations and diagnoses, without the need for physical visits.</li>
                                <li>“Healthcare Technology” refers to the use of technologies developed for the purpose of improving any and all aspects of the healthcare system.</li>
                            </ul>
                        </PolicyItem>

                        <PolicyItem title='Services Provided'>
                            <p>The Company offers remote medical consultations, advice, and follow-ups through its Site.</p>
                            <p>Our services include but are not limited to:</p>
                            <ul className='list-disc list-inside'>
                                <li>Video or audio consultations with licensed healthcare professionals.</li>
                                <li>Utilization of our artificial intelligence “Ask Bubba AI” to get answers to questions patients may have.</li>
                                <li>Collection of Patients’ samples remotely for laboratory tests.</li>
                                <li>Remote diagnosis and treatment recommendations.</li>
                                <li>Prescription services.</li>
                                <li>Delivery of prescribed medication, if requested.</li>
                            </ul>
                        </PolicyItem>

                        <PolicyItem title='Eligibility'>
                            <p>Patients must be:</p>

                            <ul className="list-disc list-inside">
                                <li>18 years of age or older, or have the consent of a legal guardian for those under the age of 18.</li>
                                <li>Residing in Nigeria or another specified jurisdiction where telemedicine services are regulated/permitted.</li>
                                <li>Able to provide personal medical history and accurate health information during the consultation process.</li>
                            </ul>
                        </PolicyItem>

                        <PolicyItem title='User Representations'>
                            <p>By using the Site, you represent and warrant that:</p>

                            <ul className="list-disc list-inside">
                                <li>all information you shall provide at the time of registration will be true, accurate, current, and complete;</li>
                                <li>you will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
                                <li>you have the legal capacity and you agree to comply with these Terms and Conditions;</li>
                                <li>you are not under the age 18;</li>
                                <li>you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental consent to use the Site; </li>
                                <li>you will not access the Site through automated or non-human means, whether through a bot, script, or otherwise;</li>
                                <li>you will not use the Site for any illegal or unauthorized purpose; your use of the Site will not violate any applicable law or regulation.</li>
                            </ul>

                            <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).</p>
                        </PolicyItem>

                        <PolicyItem title='Intellectual Property Rights'>
                            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks , service marks and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the Federal Republic of Nigeria, foreign jurisdictions, and applicable international conventions.</p>

                            <p>The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms and Conditions, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>

                            <p>Provided that you are eligible to use the Site, you are granted a limited non-exclusive, non-sublicensable, revocable, non-transferrable license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks.</p>
                        </PolicyItem>

                        <PolicyItem title='User Registration'>
                            <p>For you to use the Site you shall be required to register and create an account with a username and password. You agree to keep your password confidential and will be responsible for all use of your account and password. You must immediately notify the Company of any unauthorized use of your account or of any breach of security that you become aware of at <a href="mailto:support@healthbubba.com" className='text-primary'>support@healthbubba.com</a>. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
                        </PolicyItem>

                        <PolicyItem title='Risks of Telemedicine'>
                            <p>You understand and agree with the risks which are inherent in the use of telemedicine for your wellbeing and health care consultations. The risks of telemedicine which we envisage include but are not limited to the following:</p>

                            <ul className="list-disc list-inside">
                                <li>Delays as a result of technical glitches or connectivity interruptions.</li>
                                <li>The possibility of insufficient information despite reasonable efforts to diagnose and treat your condition as opposed to an in-person visit.</li>
                                <li>Medical consultations through Health Bubba limited may not be sufficient for medical conditions that require in-person consultation.</li>
                            </ul>
                        </PolicyItem>

                        <PolicyItem title='Consent to Telemedicine Services'>
                            <p>By using our services, you acknowledge and consent to:</p>

                            <ul className="list-disc list-inside">
                                <li>The use of electronic communications to deliver healthcare services.</li>
                                <li>The potential limitations of telemedicine, such as the inability to perform physical examinations, which may affect diagnosis or treatment.</li>
                            </ul>
                        </PolicyItem>

                        <PolicyItem title='Confidentiality and Data Protection'>
                            <p>The Company is committed to protecting your privacy and personal health information as one of our top priorities. Patients’ data shared during consultation shall remain highly confidential and undisclosed to unauthorized persons. All personal health information of patients shall be handled in accordance with the relevant Nigerian Legislations e.g. Nigerian Constitution, the National Health Act, and the Nigerian Data Protection Act, 2023 and other applicable laws. The Company may collect, use, and store your health data for the purpose of providing medical care. For more information, please refer to our <a href={route('privacy-policy')} className='text-primary'>Privacy Policy here</a>. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms and Conditions.</p>

                            <p>Please be advised that the Site is hosted in the Federal Republic of Nigeria. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the Federal Republic of Nigeria, then through your continued use of the Site, you are transferring your data to the Federal Republic of Nigeria, and you expressly consent to have your data transferred to, stored and processed in the Federal Republic of Nigeria</p>
                        </PolicyItem>

                        <PolicyItem title='Payment for Services Rendered'>
                            <ul className="list-disc list-inside">
                                <li>Our telemedicine consultations are provided on a “fee-for-service” basis and patients agree to pay the applicable fees prior to the consultation, unless otherwise discussed and agreed.</li>
                                <li>The Company reserves the right to change fees and payment terms at any time. Any changes will be communicated electronically, in advance.</li>
                                <li>Insurance coverage may be available but you are responsible for verifying coverage and paying for any services not covered by your insurance plan.</li>
                            </ul>
                        </PolicyItem>

                        <PolicyItem title='Cancellation and Refund Policy'>
                            <ul className="list-disc list-inside">
                                <li>Patients may cancel a scheduled appointment on the platform at least 24 hours prior to avoid being billed.</li>
                                <li>Failure to cancel within the stipulated timeframe above attracts a cancellation fee.</li>
                                <li>Patients agree to our non-refund policy except in circumstances, such as technical issues preventing the delivery of services, the services provided are defective or does not meet healthcare standards.</li>
                                <li>Refund requests shall be processed within 14 business days of receipt.</li>
                            </ul>
                        </PolicyItem>

                        <PolicyItem title='Website Security'>
                            <p>We employ physical, electronic, and managerial procedures, including SSL, to secure information. Employee training ensures data privacy compliance.</p>
                        </PolicyItem>

                        <PolicyItem title='Prescription Policy'>
                            <p>Prescriptions will only be issued after a thorough consultation, and only if deemed medically necessary. Health Bubba Limited is compliant with the relevant Nigerian laws regarding the prescription of medication via telemedicine. Some medications may not be prescribed through remote consultations.</p>
                        </PolicyItem>

                        <PolicyItem title='Electronic Communication, Transactions and Signatures'>
                            <p>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing.</p>

                            <p>You hereby agree to the use of electronic signatures, contracts, orders, and other records, and to electronic delivery of notices, policies, and records of transactions initiated or completed by us or via the Site.</p>

                            <p>You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means.</p>
                        </PolicyItem>

                        <PolicyItem title='Limitations of Liability'>
                            <ul className="list-disc list-inside">
                                <li>Health Bubba Limited will make every effort to ensure accessible, accurate and efficient telemedicine services, but telemedicine has inherent limitations. The Patient acknowledges that telemedicine may not be suitable for all medical conditions, and the Company is not liable for any adverse outcomes resulting from incomplete information or lack of physical examination.</li>
                                <li>In emergencies, Patients should seek immediate in-person medical attention rather than relying solely on telemedicine services.</li>
                                <li>To the fullest extent permitted by the law, the company, its directors, its staff, agents, healthcare providers, and affiliates will not be liable for any direct, indirect, consequential, or incidental damages arising from your use of our services, except in cases of gross negligence, willful misconduct or data privacy breaches.</li>
                            </ul>
                        </PolicyItem>

                        <PolicyItem title='Termination of Services'>
                            <p>These Terms and Conditions shall remain in full force and effect while you use the Site. The Company reserves the right to terminate the provision of services to any patient/user at its discretion, including but not limited to cases of:</p>

                            <ul className="list-disc list-inside">
                                <li>Non-compliance with these terms and conditions.</li>
                                <li>Abusive or inappropriate behavior towards its staff, healthcare providers and affiliates.</li>
                                <li>Misrepresentation of medical history or personal information.</li>
                            </ul>

                            <p>Breach of any representation, warranty, or covenant contained in these terms and conditions or of any applicable law or regulation.</p>
                        </PolicyItem>

                        <PolicyItem title='Disclaimer of Warranties'>
                            <p>The Company makes no express or implied warranties of any kind regarding the accuracy of the telemedicine services tailored to your specific healthcare needs. The Company tries to keep the services up and running, provide a good user experience but no specific promises are made. The services are provided on “as-is” and “as available” basis and to the extent the law permits.</p>

                            <p>You agree that your use of the Site and our services will be at your sole risk. To the fullest extent permitted by law, we disclaim all warranties, express or implied, in connection with the Site and your use thereof, including without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We  make no warranties or representation about the accuracy or completeness of the Site’s content or the content of any websites linked to the Site and we will assume no liability or responsibility for any (1) errors, mistakes, or inaccuracies of content and materials, (2) personal injury or property damage, of any nature whatsoever, resulting from your access to and use of the Site, (3) any unauthorized access to or use of our secure servers and/or any and all personal information and/or financial information stored therein, (4) any interruption or cessation of transmission to or from the Site, (5) any bugs, viruses, trojan horses, or the like which may be transmitted to or through the Site by any third party, and/or (6) any errors or omissions in any content and materials or for any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the Site.</p>
                        </PolicyItem>

                        <PolicyItem title='Dispute Resolution'>
                            <p>Any disputes arising out of the use of telemedicine services will be resolved in accordance with the laws of Nigeria. Parties agree to first attempt to resolve disputes through mediation for at least 14 (Fourteen) days. Such mediations commence upon written notice from one party to the other Party. If mediation fails, the dispute shall be referred to arbitration in accordance with the provisions of the Arbitration and Mediation Act of Nigeria 2023 or any statutory re-enactment or modification thereof. The place of arbitration shall be Lagos, Nigeria and the proceedings shall be conducted in English Language. Each Party shall bear its own cost and expenses in relation to the arbitration proceedings except where an award has been made by the Arbitrator for cost to be borne by a particular party. The decision of the Arbitrator shall be enforced by any competent Court of law.  Patients agree also to waive any right to bring a class action lawsuit against the Company.</p>
                        </PolicyItem>

                        <PolicyItem title='Governing Law'>
                            <p>These Terms and Conditions shall be governed by and construed in accordance with the relevant Laws of the Federal Republic of Nigeria, without regard to its conflict of law principles.</p>
                        </PolicyItem>

                        <PolicyItem title='Indemnification'>
                            <p>Patients hereby agree to the extent permitted by the law to indemnify and hold harmless the Company, its staff, affiliates, investors, agents, licensors, partners, collaborators, representatives and their respective successors and assigns from and against any and all liability, complaints, expenses (including legal fees), costs or other losses incurred in connection to any claims arising from their use of the services or any product even if recommended by the Company in  breach of these terms or any applicable law or regulation. The company reserves the right to assume at its own expense the exclusive defense and control of any matter otherwise subject to indemnification by patients.</p>
                        </PolicyItem>

                        <PolicyItem title='Amendment of Terms'>
                            <p>The Company reserves the right to modify these terms and conditions at any time to reflect services provided. The Company may add or remove features, products or functionalities and may also suspend or stop services entirely. Patients may not be notified of any significant changes beforehand. Continued use of the services after modification shall be construed as acceptance of any modified terms.</p>
                        </PolicyItem>

                        <PolicyItem title='Corrections'>
                            <p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions that may relate to the Site, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice.</p>
                        </PolicyItem>

                        <PolicyItem title='User/Patient Data'>
                            <p>We will maintain certain data that you transmit to the Site for the purpose of managing the Site as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site.</p>
                        </PolicyItem>

                        <PolicyItem title='Miscellaneous'>
                            <p>These Terms and Conditions and any policies or operating rules posted by us on the Site constitute the entire agreement and understanding between you and the Company. Our failure to exercise or enforce any right or provision of these Terms and Conditions shall not operate as a waiver of such right or provision.</p>

                            <p>These Terms and Conditions operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to other at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control.</p>

                            <p>If any provision or part of a provision of these Terms and Conditions is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms and Conditions and does not affect the validity and enforceability of any remaining provisions.</p>

                            <p>There is no joint venture, partnership, employment or agency relationship created between you and the Company as a result of these Terms and Conditions or use of the Site. You agree that these Terms and Conditions will not be construed against us by virtue of having drafted them.</p>

                            <p>You are herby waive any and all defenses you may have based on the electronic form of these Terms and Conditions and the lack of signing by the parties hereto to execute these Terms and Conditions.</p>
                        </PolicyItem>

                        <PolicyItem title='Contact Us'>
                            <p>For any questions or concerns regarding these terms, please contact us at:</p>

                            <ul>
                                <li>
                                    <p className='font-medium'>Company Name</p>
                                    <p className='text-gray-400'>Health Bubba Ltd. </p>
                                </li>
                                <li>
                                    <p className='font-medium'>Address</p>
                                    <p className='text-gray-400'>G24/25 Triangle Business Place beside Circle Mall, Osapa Lekki, Lagos State, Nigeria.</p>
                                </li>
                                <li>
                                    <p className='font-medium'>Phone Number</p>
                                    <p className='text-gray-400'>0916 332 6000</p>
                                </li>
                                <li>
                                    <p className='font-medium'>Email Address</p>
                                    <p className='text-gray-400'>info@healthbubba.com</p>
                                </li>
                            </ul>

                            <p>By using our services, you confirm that you have read, understood, and agree to be bound by these terms and conditions.</p>
                        </PolicyItem>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
