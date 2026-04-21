export const dynamic = 'force-dynamic'

import { getData } from "@/services/data"
import List from '@/components/List'

export default async function Page() {
  const data = await getData()

  return <List items={data} />
}