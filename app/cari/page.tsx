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
            <form onSubmit={onSearch}>
                <input type='text' placeholder='Cari User' />
                <button>cari orang</button>
            </form>
            {query && <SectionResult query={query} />}
        </div>
    )
}
