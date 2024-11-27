import { useState } from "react";

const Filter = ({ onSelect , onSearch }) => {
  const [input, setInput] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    onSearch(input);

  };
  const selectHandler = (e) => {
 
const regionName=e.target.value;
onSelect(regionName)
  };

  return (
    <section className="filter">
      <form onSubmit={submitHandler} className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search for a country"
        />
      </form>
      <div className="region-filter">
        <select
          name="select"
          id="select"
          className="select"
          onChange={selectHandler}
        
        >
          <option >Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="America">America</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
