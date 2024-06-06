import React from 'react'

export const SelectPackageItem = ({name, price}) => {
    return (
        <label role='button' className="bg-white w-full rounded-xl shadow-md p-3 text-muted flex items-center space-x-3">
            <div class={'shrink-0'}>
                <input type="checkbox" class={'w-5 h-5 rounded shadow-sm border-gray-200 text-primary'} name="" id="" />
            </div>
            <div class={'flex-1'}>
                <p class={'font-medium'}>{name}</p>
                <p class={'text-gray-400'}>{price}</p>
            </div>
            <div class={'shrink-0'}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.06274 0.9375C1.75208 0.9375 1.50024 1.18934 1.50024 1.5C1.50024 1.81066 1.75208 2.0625 2.06274 2.0625H3.56274C4.08051 2.0625 4.50024 2.48223 4.50024 3V4.5V8.75C4.50024 10.9591 6.2911 12.75 8.50024 12.75H12.5002C14.7094 12.75 16.5002 10.9591 16.5002 8.75V7C16.5002 4.79086 14.7094 3 12.5002 3H5.62524C5.62524 1.86091 4.70183 0.9375 3.56274 0.9375H2.06274ZM7.12524 16.5C7.74656 16.5 8.25024 15.9963 8.25024 15.375C8.25024 14.7537 7.74656 14.25 7.12524 14.25C6.50392 14.25 6.00024 14.7537 6.00024 15.375C6.00024 15.9963 6.50392 16.5 7.12524 16.5ZM15.0002 15.375C15.0002 15.9963 14.4966 16.5 13.8752 16.5C13.2539 16.5 12.7502 15.9963 12.7502 15.375C12.7502 14.7537 13.2539 14.25 13.8752 14.25C14.4966 14.25 15.0002 14.7537 15.0002 15.375ZM11.2502 6C11.2502 5.58579 10.9145 5.25 10.5002 5.25C10.086 5.25 9.75024 5.58579 9.75024 6V7.125H8.62524C8.21103 7.125 7.87524 7.46079 7.87524 7.875C7.87524 8.28921 8.21103 8.625 8.62524 8.625H9.75024V9.75C9.75024 10.1642 10.086 10.5 10.5002 10.5C10.9145 10.5 11.2502 10.1642 11.2502 9.75V8.625H12.3752C12.7895 8.625 13.1252 8.28921 13.1252 7.875C13.1252 7.46079 12.7895 7.125 12.3752 7.125L11.2502 7.125V6Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </label>
    )
}
