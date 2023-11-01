import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'signup',
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
