import React from 'react'

export const Header = () => {
    return (
        <header>
            <div className="max-w-3xl py-4 mx-auto grid gap-x-10 grid-cols-6">
            <div className="col-span-4">
                <div className="rounded-2xl bg-secondary p-2 flex items-center justify-between">
                <div>
                    <img src="/assets/imgs/logo.svg" alt="" />
                </div>
                <ul className="flex space-x-4 text-white">
                    <li>
                    <a href>About Us</a>
                    </li>
                    <li>
                    <a href>FAQ</a>
                    </li>
                    <li>
                    <a href>Services</a>
                    </li>
                    <li>
                    <a href>Download</a>
                    </li>
                </ul>
                <div>
                    <button className="btn btn-white">Sign Up</button>
                </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="rounded-2xl bg-secondary p-2 flex justify-between items-center">
                <div>
                    <button className="btn btn-white bg-opacity-10 text-white">For Patients <i className="bi bi-chevron-down" /></button>
                </div>
                <div className="bg-white px-1 h-full before:w-2 before:absolute before:h-2 before:bg-white before:rounded-full before:top-0 after:w-2 after:absolute after:h-2 after:bg-white after:rounded-full after:bottom-0" />
                <div>
                    <button className="btn btn-white h-full">
                    <svg className="w-5 h-5" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.66602 17.0835C9.66602 17.7739 9.10637 18.3335 8.41602 18.3335C7.72566 18.3335 7.16602 17.7739 7.16602 17.0835C7.16602 16.3931 7.72566 15.8335 8.41602 15.8335C9.10637 15.8335 9.66602 16.3931 9.66602 17.0835Z" stroke="#28303F" strokeWidth="1.5" />
                        <path d="M17.166 17.0835C17.166 17.7739 16.6064 18.3335 15.916 18.3335C15.2257 18.3335 14.666 17.7739 14.666 17.0835C14.666 16.3931 15.2257 15.8335 15.916 15.8335C16.6064 15.8335 17.166 16.3931 17.166 17.0835Z" stroke="#28303F" strokeWidth="1.5" />
                        <path d="M5.49935 3.33317H15.4993C17.3403 3.33317 18.8327 4.82555 18.8327 6.6665V10.8332C18.8327 12.6741 17.3403 14.1665 15.4993 14.1665H8.83268C6.99173 14.1665 5.49935 12.6741 5.49935 10.8332V3.33317ZM5.49935 3.33317C5.49935 2.4127 4.75316 1.6665 3.83268 1.6665H2.16602M5.49935 6.6665H18.416" stroke="#28303F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </header>
    )
}
