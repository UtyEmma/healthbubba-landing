import GuestLayout from '@/Layouts/GuestLayout'
import React from 'react'
import { PolicyItem } from './Partials/PolicyItem'

export default function () {
    return (
        <GuestLayout className="bg-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="md:p-20 p-4 bg-white divide-y">
                    <div class={'md:space-y-2'}>
                        <h1 class={'text-2xl md:text-4xl font-semibold'}>Terms and Conditions</h1>
                        <p class={'text-muted'}>Last updated May 25, 2023</p>
                    </div>

                    <div>
                        <PolicyItem title='Introduction'>
                            <p>Welcome to Healthbubba, a health-focused platform dedicated to providing diagnostic services. Healthbubba is owned and operated by Healthbubba Technologies ("Healthbubba," "we," "us").</p>
                            <p>By using Healthbubba's services, you agree to the terms outlined in this Privacy Policy.</p>
                            <p>Your privacy is of utmost importance to us, and we are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, share, and protect your personal data in connection with your use of our diagnostic services.</p>
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
