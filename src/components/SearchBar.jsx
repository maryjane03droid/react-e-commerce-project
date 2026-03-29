export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}