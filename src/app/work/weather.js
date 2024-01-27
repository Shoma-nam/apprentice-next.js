import Layout from "../components/Layout";

// pages/blog.js
export default function Blog() {
  return (
    <div>
      <Layout>
        <main>
          <h1>Blog</h1>
          <article>
            <h2>ブログタイトル</h2>
            <p>ブログの本文を記載します</p>
          </article>
        </main>
      </Layout>
    </div>
  );
}
