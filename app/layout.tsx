import Link from 'next/link'
export default function RootLayout({children}: {children: React.ReactNode}) {
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
                        {' '}
                        <Link href={'/setting'}>Setting</Link>
                    </li>
                </ul>
                {children}
                <div>Footer</div>
            </body>
        </html>
    )
}
