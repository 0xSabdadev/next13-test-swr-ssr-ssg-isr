'use client'
import {useEffect} from 'react'

export default function error({error, reset}: {error: Error; reset: () => void}) {
    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div>
            <p>Disini error</p>
            <button onClick={() => reset()}>Refresh</button>
        </div>
    )
}
