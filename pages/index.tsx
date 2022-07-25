import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>SSRやSSR-Streamingのサンプルです</p>
      <Link href='/ssr'>
        <a>SSRのサンプル</a>
      </Link>
      <Link href='/ssr_streaming'>
        <a>SSR Streamingのサンプル</a>
      </Link>
    </div>
  )
}
