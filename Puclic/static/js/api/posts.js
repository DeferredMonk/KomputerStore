export default async function fetchPosts() {
  try {
    const postsRespose = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await postsRespose.json();
    return posts;
  } catch (e) {
    console.log(e);
  }
}
