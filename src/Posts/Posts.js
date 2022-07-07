export const Posts = ({
  search,
  handleChange,
  currentPosts,
  setClearSearch,
}) => {
  return (
    <div className="list-data">
      <h1>Posts</h1>
      <input type="text" value={search} onChange={handleChange} />
      <button onClick={() => setClearSearch(true)}>x</button>
      <ul>
        {currentPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
