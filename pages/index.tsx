import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { Post } from "../interfaces/blog";
import PostComponent from "../components/PostComponent";
import { Layout } from "../components/Layout";

export default function Home() {
  const posts = useSelector((state) => state.posts);
  return (
    <Layout>
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main">
        {posts.reverse().map((post: Post) => (
          <PostComponent post={post} key={post.id} />
        ))}
      </main>
    </Layout>
  );
}
