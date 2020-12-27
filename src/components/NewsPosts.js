import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

function SinglePost({ news }) {
  return <div className="py-12">
    <Link to={`/post/$(news.slug.current)`}>
      <h2 className="text-2xl font-grenze text-blue-lighter hover:underline">
        {news.name}
      </h2>
      <Img fluid={news.image.asset.fluid} alt={news.name} className="max-w-xs" />
    </Link>
  </div>
}

export default function NewsPosts({ news }) {
  return <div className="flex flex-row flex-wrap md:justify-center px-4 space-x-4">
    {news.map((news) => (
      <SinglePost key={news.id} news={news} />
    ))}
  </div>
}