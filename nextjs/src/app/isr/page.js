import { getData } from "@/services/data"
import List from '@/components/List'

export const revalidate = 60

export default async function Page() {
  const data = await getData()

  return <List items={data} />
}