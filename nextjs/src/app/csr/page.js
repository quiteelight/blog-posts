'use client'

import dynamic from 'next/dynamic'

const ClientList = dynamic(() => import('@/components/ClientList'), {
  ssr: false,
})

export default function Page() {
  return <ClientList />
}