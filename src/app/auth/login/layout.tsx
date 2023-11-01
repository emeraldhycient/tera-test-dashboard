import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'login',
  description: 'using next js, nest js, graphql and sqlite',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
