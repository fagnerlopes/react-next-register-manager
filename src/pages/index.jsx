import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${inter.className}`}>
        <h1>Fundamentos de Next.js</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores explicabo, molestias, necessitatibus odit reiciendis velit quis aliquam ipsum commodi, neque totam dignissimos provident veniam fugiat possimus sint illo fugit dolorem.</p>
      </main>
    </>
  )
}
