import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { PolicyItem } from './Partials/PolicyItem'
import { Head } from '@inertiajs/react'

export default function () {
    return (
        <GuestLayout className="bg-gray-100">
            <Head title='Privacy Policy' />
            <div className="max-w-6xl mx-auto px-4">
                <div className="md:p-20 p-4 bg-white divide-y">
                    <div class={'md:space-y-2'}>
                        <h1 class={'text-2xl md:text-4xl font-semibold'}>Privacy Policy</h1>
                        <p class={'text-muted'}>This privacy policy was last revised on October 26, 2024.</p>
                    </div>

                    <div>
                        <PolicyItem title='Introduction'>
                            <p>We at Health Bubba Limited, Lagos, Nigeria and its directors, staff, agents, healthcare providers, and affiliates (“The Company”, “us”, “our”, or “we”) understand that your privacy is important to you. We are highly committed to respecting your privacy and protecting your personal data. This privacy policy describes how we protect your personal data when we collect it through the use of Company’s website, applications, social, services and communications.</p>
                            <p>By using Health Bubba's services, you agree to the Terms outlined in this Privacy Policy.</p>
                            <p>Your privacy is of utmost importance to us, and we are committed to safeguarding your personal and health information. This Privacy Policy outlines how we collect, use, share, and protect your personal data in connection with your use of our services.</p>
                        </PolicyItem>

                        <PolicyItem title='Consent'>
                            <p>The Company collects and processes your data in accordance with the applicable privacy laws of the Federal Republic of Nigeria. By accessing our services, you give consent to the processing of your personal information for optimal provision of our services. You can withdraw your consent at any time, but this will not affect the lawfulness of data processing based on consent before withdrawal.</p>
                        </PolicyItem>

                        <PolicyItem title='Age Restriction'>
                            <p>Health bubba Limited does not intentionally use its Site to collect and maintain personal data from individuals under the age of 18. You confirm that you are over 18 years old and have the right to enter into contractual agreements. Health bubba's services are intended for users above 18 years, and individuals below this age should have the required legal consent from the parent, guardian in accordance with the applicable laws.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Protection Policies'>
                            <p>We adhere to the principles outlined in Data Protection Legislation. Personal data must be processed lawfully, fairly, and transparently. It should be accurate, limited to the necessary purpose, kept up to date, and stored securely.</p>
                        </PolicyItem>

                        <PolicyItem title='Information Collection'>
                            <p>We collect personal information such as name, email address, phone number, and location to provide efficient diagnostic services. Information collected automatically includes domain names, IP addresses, and browsing statistics. Information provided by users includes usernames, passwords, contact information, identity details, test samples, health records, and test results. We also collect health information during consultations and medical history submissions.</p>
                        </PolicyItem>

                        <PolicyItem title='Personal Data Use'>
                            <p>Your personal data is used to provide diagnostic services, verify identity, fulfill contractual obligations, analyze data for improvement, communicate results, and comply with legal obligations. We do not share personal information without legal basis, and your data is not processed for unrelated reasons.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Accuracy'>
                            <p>We ensure your personal data is accurate, updated, and not misleading. Efforts are made to correct or erase inaccurate data promptly.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Retention'>
                            <p>The Company keeps your data only as long as necessary for business purposes and will securely delete your personal data promptly afterwards. We retain personal data for the duration necessary for the purposes it was collected. Health data is retained permanently unless a valid erasure request is received.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Confidentiality'>
                            <p>Your information is confidential and is not disclosed to third parties except under legal conditions. We follow strict security measures to protect your data.</p>
                        </PolicyItem>

                        <PolicyItem title='Disclosure'>
                            <p>We do not sell or publish personal data. Information may be shared with third parties for services or as outlined in this policy with user permission.</p>
                        </PolicyItem>

                        <PolicyItem title='Transfer of Personal Data'>
                            <p>We may share personal information with healthcare providers for treatment purposes, with third party vendors (e.g. cloud storage providers) who assist in operations, data processing, and ensuring optimal data protection.  Personal data may also be transferred to government bodies and agencies where we are legally required to do so. Transfers outside Nigeria adhere to data protection laws.</p>
                        </PolicyItem>

                        <PolicyItem title='Your Rights'>
                            <p>You have rights in accordance with the Data Protection and Privacy laws applicable in the Federal Republic of Nigeria, they include right to access your data, right to rectify incorrect information, right to withdraw consent, right to lodge a complaint, right to data deletion, notification of data transfers, and the right to halt data dissemination.</p>
                        </PolicyItem>

                        <PolicyItem title='Website Security'>
                            <p>We employ physical, electronic, and managerial procedures, including SSL, to secure information. Employee training ensures data privacy compliance.</p>
                        </PolicyItem>

                        <PolicyItem title='Use of Cookies'>
                            <p>Cookies are used for user identification, enhancing user experience, and security. Users can disable cookies, but this may limit website functionality.</p>
                        </PolicyItem>

                        <PolicyItem title='Data We Retain'>
                            <p>We retain data as long as necessary for service provision, legal obligations, and verification with financial institutions.</p>
                        </PolicyItem>

                        <PolicyItem title='Procedure for Data Breach'>
                            <p>We generally use accepted standards of technical and operational security to protect your personal data against accidental or unlawful loss, misuse, alteration, or destruction. We require the same level of protection from our staff, agents, healthcare providers, and affiliates. Despite these precautions however, the Company cannot guarantee that unauthorized persons will not obtain access to your personal data and as such we notify affected parties, conduct a thorough investigation into the breach, and take remedial actions promptly.</p>
                        </PolicyItem>

                        <PolicyItem title='Limitation of Liability'>
                            <p>While we take reasonable measures, we are not liable for unauthorized disclosure through no fault of ours.</p>
                        </PolicyItem>

                        <PolicyItem title='Changes to this Privacy Policy'>
                            <p>Users will be notified of any change electronically and the process for updating any change will take effect immediately.</p>
                        </PolicyItem>

                        <PolicyItem title='Contact Us'>
                            <p>For inquiries or comments on this Privacy Policy, contact us at <a href="mailto:support@healthbubba.com" className='text-primary'>support@healthbubba.com</a>.</p>
                        </PolicyItem>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
