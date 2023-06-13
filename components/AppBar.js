'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from "next/link";
import { useSession, signIn, signOut, getProviders } from 'next-auth/react'

const AppBar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

    useEffect(() => {
        const setUpProviders = async () => {
          const response = await getProviders()
            setProviders(response)
        }
        setUpProviders()
    }, []);
  return (  
    <nav className='nav_header'>
        <Link className="flex gap-2 flex-center text-slate-100 hover:text-sky-400" href="/">
          Home
      </Link>

        <Link className="text-slate-100 hover:text-sky-400" href="/admin/panel">
          Panel
        </Link>
      {/* Desktop Navigation */}
      <>
        {session ? (
            <div className="flex text-slate-100 hover:text-sky-400">
                <Link href='/create-prompt' className='hidden sm:block blue_btn' >Create Prompt</Link>
                <button type="button" onClick={signOut} className="text-slate-100 hover:text-sky-400" >
                  Sign out
                </button>
            </div>
            ): (
          <>
            {
              <p className='text-slate-100 hover:text-sky-400' onClick={()=>signIn()}>Sign In</p>
            }
            </>
        )}
      {session ?
        <Image
          src={session.user.image}
          alt='userimage'
          width={40}
          height={40}
          className='rounded-full object-contain'
        />
        : null}
          </>
      </nav>
  )
}

export default AppBar