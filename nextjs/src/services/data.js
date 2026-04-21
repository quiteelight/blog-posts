export async function getData() {
  await new Promise((r) => setTimeout(r, 700))

  const lorem = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
  `.repeat(15)

  return Array.from({ length: 200 }).map((_, i) => ({
    id: i,
    title: `Post ${i}`,
    author: `Author ${i % 10}`,
    content: lorem,
  }))
}