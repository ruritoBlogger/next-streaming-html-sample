import { useEffect, useState } from 'react'

type Input = {
  header: string
  sidebar: string
  content: string
}

function SSR({ header, sidebar, content }: Input): JSX.Element {
  return (
    <div className={'root'}>
      <div className={'header'}>{header}</div>
      <div className={'container'}>
        <div className={'sidebar'}>{sidebar}</div>
        <div className={'content'}>{content}</div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const [header, sidebar, content] = await Promise.all([
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
      return 'header is loaded!!!'
    })(),
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return 'sidebar is loaded!!!'
    })(),
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      return 'content is loaded!!!'
    })(),
  ])

  const props: Input = {
    header,
    sidebar,
    content,
  }

  return {
    props: props,
  }
}

export default SSR
