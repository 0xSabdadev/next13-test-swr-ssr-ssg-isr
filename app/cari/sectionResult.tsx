import useSWR from 'swr'
import Link from 'next/link'
import ListItemSearch from '@/components/ListItemSearch'
const fetcher = (url: string) => fetch(url).then(res => res.json())
interface Props {
    query: string
}
//{query}: {query: string}
export default function SectionResult({query}: Props) {
    const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
    var loading = !data && !error
    return (
        <div style={{marginTop: '10px'}}>
            <p className='text-lg'>
                Hasil Pecarian : <span className='font-bold'>{query}</span>
            </p>
            <div className='mt-10'>
                {loading && 'Loading...'}
                {data &&
                    data.items.map((user: any, idx: number) => {
                        return (
                            <ListItemSearch
                                key={idx}
                                name={user.login}
                                imageUrl={user.avatar_url}
                                reposUrl={user.repos_url}
                            />
                        )
                    })}
            </div>
        </div>
    )
}
