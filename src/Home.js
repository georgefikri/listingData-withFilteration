export const Home = ({ search, setSearch, searchData }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {searchData.map((item, index) => {
          return <li key={index}>{item.login}</li>;
        })}
      </ul>
    </div>
  );
};
