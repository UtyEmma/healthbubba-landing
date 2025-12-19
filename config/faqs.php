<?php

return [

    'patients' => [
        [
            'section' => 'Onboarding & Verification',
            'faqs' => [
                [
                    'question' => 'How long does the verification process take?',
                    'answer' => "Once you submit your application, our team will review your credentials. This typically takes 24-48 business hours. We'll email you upon activation."
                ],
                [
                    'question' => 'Why do I need to upload my signature?',
                    'answer' => "Your e-signature is required for generating secure e-prescriptions and other official documents for your patients."
                ],
                [
                    'question' => 'What if I practice in multiple specialties?',
                    'answer' => "You can list your primary specialty in the main field. Once onboarded, you can further detail your areas of expertise in your public profile."
                ],
            ]
        ],
        [
            'section' => 'Managing Consultations',
            'faqs' => [
                [
                    'question' => 'How do I set my availability?',
                    'answer' => "During onboarding, you'll set your initial schedule. You can modify this at any time from your practitioner dashboard, blocking out times or setting recurring availability."
                ],
                [
                    'question' => 'What if a patient misses their appointment?',
                    'answer' => "Our platform includes a cancellation policy. If a patient cancels with insufficient notice or fails to show up, you may still be entitled to a portion of the consultation fee. You can review the full [Cancellation & Rescheduling Policy] here."
                ],
                [
                    'question' => 'How does the "in-person code" work?',
                    'answer' => "When a patient books an in-person consultation, they are given a unique, one-time code. They must present this code to you at the clinic to confirm the appointment. This protects both you and the patient and triggers the payment process."
                ],
                [
                    'question' => 'Can I consult with patients in other countries?',
                    'answer' => 'This depends on your professional license and its jurisdictional limitations. You are responsible for ensuring you are compliant with all relevant medical regulations when consulting with patients.'
                ],
            ]
        ],
        [
            'section' => 'Payments & Settlements',
            'faqs' => [
                [
                    'question' => 'What are the platform fees?',
                    'answer' => "Healthbubba charges a small service fee per consultation to cover platform maintenance, payment processing, and support. The full fee structure is outlined in your [Practitioner Agreement]."
                ],
                [
                    'question' => "What's the difference between ".'"Pending"'." and ".'"Settled"'." balance?",
                    'answer' => "Pending Balance represents fees for consultations that are booked but not yet completed. Settled Balance represents your earnings from completed consultations. This is the amount you are free to withdraw."
                ],
                [
                    'question' => 'How long do withdrawals take?',
                    'answer' => "Once you initiate a withdrawal from your settled balance, it is processed to your linked bank account. This typically takes 1-3 business days, depending on your bank."
                ],
                [
                    'question' => 'When do I fill out the case note?',
                    'answer' => "You are required to fill out a case note after each consultation to mark it as complete. This is a mandatory step before the consultation fee can be moved to your settled balance."
                ],
            ]
        ],
        [
            'section' => 'Compliance & Rules of Conduct',
            'faqs' => [
                [
                    'question' => 'What happens if I miss a scheduled consultation?',
                    'answer' => 'We expect all practitioners to be punctual. We understand emergencies happen, but repeated unavailability (more than three defaults) is a violation of our Rules of Conduct and may result in your account being suspended.'
                ],
                [
                    'question' => "How is patient data protected?",
                    'answer' => 'We take data privacy extremely seriously. Our platform is HIPAA-compliant, and all video/messaging communication is end-to-end encrypted. You must also adhere to all data protection guidelines as outlined in our Privacy Policy.'
                ],
                [
                    'question' => 'What if I receive a negative review from a patient?',
                    'answer' => 'We have a review dispute process. If you believe a review is false or malicious, you can flag it for our support team to investigate. However, we encourage professional and constructive resolution directly with the patient when possible.'
                ],
                [
                    'question' => 'What are the Rules of Conduct?',
                    'answer' => 'Our practitioners are expected to uphold the highest professional and ethical standards. This includes punctuality, reliability, and respectful communication. Offensive, discriminatory, or unprofessional conduct is strictly prohibited. You can review the full Rules of Conduct in our Legal & Compliance section.'
                ],
            ]
        ],
    ],
    
    'practitioners' => [
        [
            'section' => 'Compliance & Rules of Conduct',
            'faqs' => [
                [
                    'question' => 'What happens if I miss a scheduled consultation?',
                    'answer' => 'We expect all practitioners to be punctual. We understand emergencies happen, but repeated unavailability (more than three defaults) is a violation of our Rules of Conduct and may result in your account being suspended.'
                ],
                [
                    'question' => "How is patient data protected?",
                    'answer' => 'We take data privacy extremely seriously. Our platform is HIPAA-compliant, and all video/messaging communication is end-to-end encrypted. You must also adhere to all data protection guidelines as outlined in our Privacy Policy.'
                ],
                [
                    'question' => 'What if I receive a negative review from a patient?',
                    'answer' => 'We have a review dispute process. If you believe a review is false or malicious, you can flag it for our support team to investigate. However, we encourage professional and constructive resolution directly with the patient when possible.'
                ],
                [
                    'question' => 'What are the Rules of Conduct?',
                    'answer' => 'Our practitioners are expected to uphold the highest professional and ethical standards. This includes punctuality, reliability, and respectful communication. Offensive, discriminatory, or unprofessional conduct is strictly prohibited. You can review the full Rules of Conduct in our Legal & Compliance section.'
                ],
            ]
        ]
    ]

];