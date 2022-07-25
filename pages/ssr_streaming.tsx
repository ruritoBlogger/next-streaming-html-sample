import { Suspense } from 'react'
import type { NextPage } from 'next'

const heavyTask = async (timeout_ms: number): Promise<string> => {
  await new Promise((resolve) => setTimeout(resolve, timeout_ms))
  return 'is loaded!!!'
}

let headerMessage: string | undefined = undefined
const Header: NextPage = () => {
  if (headerMessage === undefined) {
    throw heavyTask(500).then((res) => {
      headerMessage = 'header ' + res
    })
  }
  return <p>{headerMessage}</p>
}

let sidebarMessage: string | undefined = undefined
const Sidebar: NextPage = () => {
  if (sidebarMessage === undefined) {
    throw heavyTask(2000).then((res) => {
      sidebarMessage = 'sidebar ' + res
    })
  }
  return <p>{sidebarMessage}</p>
}

let contentMessage: string | undefined = undefined
const Content: NextPage = () => {
  if (contentMessage === undefined) {
    throw heavyTask(4000).then((res) => {
      contentMessage = 'content ' + res
    })
  }
  return <p>{contentMessage}</p>
}

function SSRStreaming(): JSX.Element {
  return (
    <div className={'root'}>
      <div className={'header'}>
        <Suspense fallback={<p>loading...</p>}>
          <Header />
        </Suspense>
      </div>
      <div className={'container'}>
        <div className={'sidebar'}>
          <Suspense fallback={<p>loading...</p>}>
            <Sidebar />
          </Suspense>
        </div>
        <div className={'content'}>
          <Suspense fallback={<p>loading...</p>}>
            <Content />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default SSRStreaming
