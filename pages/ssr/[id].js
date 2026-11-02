export default function SSRPage({ post }) {
  return (
    <div>
      <h1>Server-Side Rendering</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Post ID: {post.id}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}