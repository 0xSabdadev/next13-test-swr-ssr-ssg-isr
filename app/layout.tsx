'use client'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
export default function RootLayout({children}: {children: React.ReactNode}) {
    const router = useRouter()
    const onClickUrl = (url: string) => {
        router.push(url)
    }
    return (
        <html>
            <head />
            <body>
                <ul>
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href={'/settings'}>Setting</Link>
                    </li>
                    <li>
                        <Link href={'/cari'}>Cari USer</Link>
                    </li>
                </ul>
                {children}
                <div>Footer</div>
            </body>
        </html>
    )
}
