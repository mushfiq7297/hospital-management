

const SearchBar = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-100 border-4 border-slate-500 w-full rounded-md">
      <select className="p-3">
        <option value="Select">Select</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
        <option value="category3">Category 3</option>
      </select>
      
      <textarea
        className="flex-grow"
        placeholder="Types hospitals, doctors, medicine names"
      />
      <button className="bg-blue-500 text-white py-4 font-semibold text-xl px-10 hover:bg-red-500">
        Search
      </button>
    </div>
  );
};

export default SearchBar;