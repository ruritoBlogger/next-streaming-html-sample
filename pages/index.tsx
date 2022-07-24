import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>SSRやSSR-Streamingのサンプルです</p>
      <Link href='/ssr'>
        <a>SSRのサンプル</a>
      </Link>
    </div>
  )
}
