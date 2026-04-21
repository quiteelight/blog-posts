import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

app.use(cors())

app.get('/api/data', async (req, res) => {
  await new Promise((r) => setTimeout(r, 700))

  const lorem = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  `.repeat(15)

  const data = Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    title: `Post ${i}`,
    author: `Author ${i % 10}`,
    content: lorem,
  }))


  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`)
})