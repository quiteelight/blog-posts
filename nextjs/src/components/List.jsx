export default function List({ items }) {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {items.map((post) => {
        return (
          <article key={post.id} className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              By <span className="font-medium text-gray-700">{post.author}</span>
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">{post.content}</p>
            <button className="inline-block text-sm font-medium text-blue-600 hover:text-blue-800 transition cursor-pointer">Read more</button>
          </article>
        )
      })}
    </div>
  )
}