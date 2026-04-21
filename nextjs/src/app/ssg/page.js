export const dynamic = 'force-static'

import { getData } from "@/services/data"
import List from '@/components/List'

export default async function Page() {
  const data = await getData()

  return <List items={data} />
}