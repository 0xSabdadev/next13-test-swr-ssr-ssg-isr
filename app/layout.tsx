'use client'
import '../styles/globals.css'
import Link from 'next/link'
import {useRouter} from 'next/navigation'
export default function RootLayout({children}: {children: React.ReactNode}) {
    const router = useRouter()
    const onClickUrl = (url: string) => {
        router.push(url)
    }
    const menuItem = (url: string, title: string, params?: string) => {
        return (
            <div className={`rounded-lg bg-black text-white py-2 px-3 ${params}`}>
                <Link href={url}>{title}</Link>
            </div>
        )
    }
    return (
        <html>
            <head />
            <body className=' container mx-auto py-[10px]'>
                {/* menu */}
                <div className='w-full inline-flex'>
                    {menuItem('/', 'Home')}
                    <div className='inline-flex  justify-end space-x-3 w-full'>
                        {menuItem('/dashboard', 'Dashboard')}
                        {menuItem('/settings', 'Setting')}
                        {menuItem('/cari', 'Cari User')}
                    </div>
                </div>
                <div>{children}</div>
                <div>Footer</div>
            </body>
        </html>
    )
}
