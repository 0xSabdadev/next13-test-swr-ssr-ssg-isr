import useSWR from 'swr'
import Link from 'next/link'
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
            <p>Hasil Pecarian : {query}</p>
            <div>
                {loading && 'Loading...'}
                {data &&
                    data.items.map((user: any, idx: number) => {
                        return (
                            <ul key={idx}>
                                <li>
                                    <Link href={`/cari/${user.login}`}>{user.login}</Link>
                                </li>
                                <li>
                                    <Link href={user.repos_url}>Repository</Link>
                                </li>
                            </ul>
                        )
                    })}
            </div>
        </div>
    )
}
