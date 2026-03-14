import Link from 'next/link'
import { auth } from "@/auth"
import { logout } from '@/lib/actions'


async function Footer() {
    const session = await auth();
    // console.log(session);

    return (
        <footer className="text-hoverPink bg-customHG flex px-10 py-5 justify-between items-center">
            <div className='border-white border-4 rounded-4xl px-3 py-2'>

            {session ?
                <div className='flex gap-2 items-center justify-center'>
                    <img src={session?.user.image || '/images/icon.png'} className='w-8 h-8 border-none rounded-4xl'/>
                    <p>Hello, <span className='font-bold'>{session?.user.name}</span>!</p>    
                </div>
                : <p>Welcome back!</p>
            }

            </div>
        </footer>
    )
}

export default Footer