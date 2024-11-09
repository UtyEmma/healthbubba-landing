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
                        <p class={'text-muted'}>Last updated May 25, 2023</p>
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

                        <PolicyItem title='Consent'>
                            <p>When processing your personal data, based on consent, we will obtain your explicit agreement at the time of data collection. By accessing our services, you consent to the processing of your personal information. You can withdraw your consent at any time, but this will not affect the lawfulness of data processing based on consent before withdrawal.</p>
                        </PolicyItem>

                        <PolicyItem title='Age Restriction'>
                            <p>You confirm that you are over 18 years old and have the right to enter into contractual agreements. Healthbubba's services are intended for users above 18 years, and individuals below this age should have a legal guardian or parent sign up on their behalf.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Protection Policies'>
                            <p>We adhere to the principles outlined in Data Protection Legislation. Personal data must be processed lawfully, fairly, and transparently. It should be accurate, limited to the necessary purpose, kept up to date, and stored securely.</p>
                        </PolicyItem>

                        <PolicyItem title='Information We Collect'>
                            <p>We collect both non-personal and personal data to provide efficient diagnostic services. Information collected automatically includes domain names, IP addresses, and browsing statistics. Information provided by users includes usernames, passwords, contact information, identity details, test samples, health records, and test results.</p>
                        </PolicyItem>

                        <PolicyItem title='Using Your Personal Data'>
                            <p>Your personal data is used to provide diagnostic services, verify identity, fulfill contractual obligations, analyze data for improvement, communicate results, and comply with legal obligations. We do not share personal information without legal basis, and your data is not processed for unrelated reasons.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Accuracy'>
                            <p>We ensure your personal data is accurate, updated, and not misleading. Efforts are made to correct or erase inaccurate data promptly.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Retention'>
                            <p>We retain personal data for the duration necessary for the purposes it was collected. Health data is retained permanently unless a valid erasure request is received.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Confidentiality'>
                            <p>Your information is confidential and is not disclosed to third parties except under legal conditions. We follow strict security measures to protect your data.</p>
                        </PolicyItem>

                        <PolicyItem title='Disclosure'>
                            <p>We do not sell or publish personal data. Information may be shared with third parties for services or as outlined in this policy with user permission.</p>
                        </PolicyItem>

                        <PolicyItem title='Transfer of Personal Data'>
                            <p>We may engage third parties for data processing, ensuring adequate protection. Transfers outside Nigeria adhere to data protection laws.</p>
                        </PolicyItem>

                        <PolicyItem title='Your Rights'>
                            <p>You have rights under Data Protection Legislation, including notification of data transfers, erasure, rectification, and the right to halt data dissemination.</p>
                        </PolicyItem>

                        <PolicyItem title='Website Security'>
                            <p>We employ physical, electronic, and managerial procedures, including SSL, to secure information. Employee training ensures data privacy compliance.</p>
                        </PolicyItem>

                        <PolicyItem title='Use of Cookies'>
                            <p>Cookies are used for user identification, enhancing user experience, and security. Users can disable cookies, but this may limit website functionality.</p>
                        </PolicyItem>

                        <PolicyItem title='Data We Retain'>
                            <p>We retain data as necessary for service provision, legal obligations, and verification with financial institutions.</p>
                        </PolicyItem>

                        <PolicyItem title='Data Breach Management Procedure'>
                            <p>In the event of a data breach, we notify affected parties, investigate, and take remedial actions promptly.</p>
                        </PolicyItem>

                        <PolicyItem title='Limitation of Liability'>
                            <p>While we take reasonable measures, we are not liable for unauthorized disclosure through no fault of ours.</p>
                        </PolicyItem>

                        <PolicyItem title='Changes to this Privacy Policy'>
                            <p>Any changes to this policy will be notified and take effect immediately.</p>
                        </PolicyItem>

                        <PolicyItem title='Contact Us'>
                            <p>For inquiries or comments on this Privacy Policy, contact us at <a href="mailto:support@healthbubba.com">support@healthbubba.com</a>.</p>
                        </PolicyItem>
                    </div>
                </div>
            </div>
        </GuestLayout>
    )
}
