'use client'

import {useState} from 'react'
import SectionResult from './sectionResult'

export default function page() {
    const [query, setQuery] = useState('')
    const onSearch = (e: any) => {
        e.preventDefault()
        //ambil value dr input pertama (Index 0)
        const inputQuery = e.target[0].value
        setQuery(inputQuery)
    }
    return (
        <div>
            <form onSubmit={onSearch} className='flex w-full space-x-3 mt-10'>
                <input
                    type='text'
                    className='bg-zinc-100 w-5/6 px-3 rounded-md'
                    placeholder='Cari Github User'
                />
                <button className='bg-blue-600 text-white rounded-lg py-2 w-1/6'>Search</button>
            </form>
            {query && <SectionResult query={query} />}
        </div>
    )
}
