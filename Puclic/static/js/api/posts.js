export async function fetchPosts() {
  try {
    const postsRespose = await fetch(
      "https://hickory-quilled-actress.glitch.me/computers"
    );
    const posts = await postsRespose.json();
    return posts;
  } catch (e) {
    console.log(e);
  }
}
