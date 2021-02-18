import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { Post } from "../interfaces/blog";
import PostComponent from "../components/PostComponent";
import { Layout } from "../components/Layout";
import { useEffect } from "react";
import { fetchPosts } from "../store/actions";

export default function Home() {
  const posts = useSelector((state) => state.posts);
  const postslist = new Array(...posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!posts.isLoaded)
    dispatch(fetchPosts());
  }, []);

  return (
    <Layout>
      <Head>
        <title>Blog App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main__page">
        {postslist
          .reverse()
          .filter((el) => el.title && el.body)
          .map((post: Post) => (
            <PostComponent post={post} key={post.id} />
          ))}
      </main>
    </Layout>
  );
}
