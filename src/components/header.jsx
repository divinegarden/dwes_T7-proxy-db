import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'

// Iconos
import { Home } from 'lucide-react';
import { LogIn, LogOut } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';
import { Info } from 'lucide-react';

async function Header() {
    const session = await auth();
    // console.log(session);

    return (
        <header className="text-white bg-customHG flex px-10 py-5 justify-between items-center">
            <nav className='flex gap-4 items-center'>
                <Link className='hover:text-hoverPink' href="/">
                    <Home />
                </Link>
                {session?.user?.role === 'ADMIN'
                    && <Link className='bg-customPink hover:bg-hoverPink hover:font-bold border-4 border-white rounded-4xl px-3 py-2' href="/admin">
                            <Shield /> Admin panel
                        </Link>
                }
                <Link 
                className='bg-customPink hover:bg-hoverPink hover:font-bold border-4 border-white rounded-4xl px-3 py-2'
                href="/dashboard"><CircleUserRound /> Dashboard</Link>
                <Link 
                className='bg-customPink hover:bg-hoverPink hover:font-bold border-4 border-white rounded-4xl px-3 py-2'
                href="/about"><Info /> About</Link>
            </nav>
            <div className='flex gap-4'>
                {session
                    ? <form><button className='bg-customPink hover:bg-hoverPink hover:font-bold border-4 border-white rounded-4xl px-3 py-2' formAction={logout}><LogOut /> Logout</button></form>
                    : <Link 
                    className='bg-customPink hover:bg-hoverPink hover:font-bold border-4 border-white rounded-4xl px-3 py-2'
                    href="/auth/login"><LogIn /> Login</Link>
                }
            </div>
        </header>
    )
}

export default Header