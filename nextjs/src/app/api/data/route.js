import { getData } from "@/services/data"

export async function GET() {
  const data = await getData()
  return Response.json(data)
}