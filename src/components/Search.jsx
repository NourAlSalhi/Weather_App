import React from 'react'

export const Search = () => {
    return (
        <div className='flex gap-8 justify-between m-auto w-fit'>
            <div className='flex gap-4 items-center'>
                <input
                    type="text"
                    placeholder='Search for city...'
                    className='px-3 py-2 text-black border rounded border-gray-300 focus:outline-none focus:border-indigo-500'
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 12 12"><path fill="white" d="M6 .5A4.5 4.5 0 0 1 10.5 5c0 1.863-1.42 3.815-4.2 5.9a.5.5 0 0 1-.6 0C2.92 8.815 1.5 6.863 1.5 5A4.5 4.5 0 0 1 6 .5Zm0 1A3.5 3.5 0 0 0 2.5 5c0 1.355 1.059 2.918 3.224 4.653L6 9.871l.276-.218C8.441 7.918 9.5 6.355 9.5 5A3.5 3.5 0 0 0 6 1.5ZM6 4a1 1 0 1 1 0 2a1 1 0 0 1 0-2Z" /></svg>
            </div>
            <div className='text-lg text-white flex items-center gap-2'>
                <p><span> ْ</span> C </p>
                <span>|</span>
                <p><span> ْ</span> F </p>
            </div>
        </div>
    )
}

export default Search