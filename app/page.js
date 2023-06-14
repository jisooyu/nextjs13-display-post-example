import Feed from '@/components/Feed';

export default function Home() {

  return (
    <div >
      <main  className='feed text-blue-900 font-bold'>
        <h1>Authentication of Next.js using Next-Auth</h1>
        <p>
          Next JS Posts Display
        </p>
        <Feed />
      </main>
    </div>
  )
}