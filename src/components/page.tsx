import React from 'react'
import 'normalize.css'

export type PageProps = {
  className?: string
  children: React.ReactNode
}

const Page = ({ className, children }: PageProps) => (
  <>
    <div className={className}>{children}</div>
  </>
)

export default Page
