import Link from "next/link";
import { sanityClient, urlFor } from "../../sanity";


function Post({ posts }: any) {
  // sanity studio
  console.log(posts);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6" >
      {posts.map(post => (
        <div className="border rounded-lg group cursor-pointer overflow-hidden">
          <Link
            key={post._id}
            href={`/post/${post.slug.current}`}
          >
            <img
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
              src={urlFor(post.mainImage).url()!}
              alt=""
            />

            <div className="flex items-center justify-between p-5 bg-white ">

              <div>
                <p className="text-lg font-bold">{post.title}</p>
                <p className="text-xs">{post.description} by {post.author.name}</p>
              </div>

              <img
                className="h-12 w-12 rounded-full object-contain"
                src={urlFor(post.author.image).url()!}
                alt=""
              />

            </div>

          </Link>
        </div>
      ))}
    </div>
  )
}

export default Post

