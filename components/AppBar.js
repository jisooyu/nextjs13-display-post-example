'use client'
import {useState, useEffect} from 'react'
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
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center text-sky-600 hover:text-sky-700" href="/">
        Home
      </Link>
      <Link className="text-sky-600 hover:text-sky-700" href="/admin/panel">
        Panel
      </Link>
    {/* Desktop Navigation */}
      <div  className='sm:flex hidden'>
      {session ? (
          <div className="flex gap-3 md:gap-5 text-sky-600 hover:text-sky-700">
              <Link href='/create-prompt' className='blue_btn'>Create Prompt</Link>
              <button type="button" onClick={signOut} className="text-sky-600 hover:text-sky-700" >
                Sign out
              </button>

          </div>
          ): (
        <>
          {
            <p className='text-sky-600 hover:text-sky-700' onClick={()=>signIn()}>Sign In</p>
          }
          </>
        )}
        </div>
    </nav>
  )
}

export default AppBar