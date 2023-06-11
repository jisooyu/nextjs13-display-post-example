import Feed from '@/components/Feed';

export default function Home() {

  return (
    <div >
      <main >
        <h1 className='m-4'>Authentication in Next.js app using Next-Auth</h1>
        <p className="desc text-center">
          Next JS Posts Display
        </p>
        <Feed />
      </main>
    </div>
  )
}