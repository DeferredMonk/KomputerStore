let currentPosts = [];

const getPosts = () => [...currentPosts];

const setPosts = (posts) => (currentPosts = posts);

const postsView = {
  getPosts,
  setPosts,
};

export default postsView;
