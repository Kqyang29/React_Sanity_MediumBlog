import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from './components/Banner'
import Header from './components/Header'
import { sanityClient, urlFor } from '../sanity';
import Link from 'next/link'
import Post from './components/Post'
import PostPage from './components/Post'
// import { Post } from '../typings'


// interface Props {
//   posts: Post[];
// }
// const Home: NextPage = (props:Props) => {

// you can also just use ({posts}:Props)

const Home: NextPage = ({ posts }: any) => {

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      {/* Posts */}
      <Post posts={posts} />

    </div>
  )
}

export default Home

// change homepage Rule to SSR Page Rule
// pre-render in SSR page and fast show up in homepage
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author->{
    name,
    image,
  },
    slug,
  description,
  mainImage,
  }`;

  // server side rending
  const posts = await sanityClient.fetch(query);

  // get SSR back to homepage
  return {
    props: {
      posts,
    }
  }

}