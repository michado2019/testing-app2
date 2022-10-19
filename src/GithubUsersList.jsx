import React from "react";
import { useSearchParams } from "react-router-dom";
import { items } from "./Data";

export default function GithubUsersList() {
  const [searchParams, setSearchParams] = useSearchParams();

  items.map((itemList) => {
    return (
      <div>
        <a href="https://www.bhg.com/recipes/how-to/bake/how-to-make-a-cake/">
          <li key={itemList.id}>{itemList[0]}</li>
        </a>
        
      </div>
    );
  });

  //
  const handleChangee = (e) => {
    e.preventDefault();
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter: filter, sort: true });
    } else {
      setSearchParams({});
    }
  };
  return (
    <div>
      <h1>Search for Users</h1>
      <form>
        <input
          type="text"
          placeholder="Search for a user"
          name="searchParams"
          value={searchParams.searchParams}
          onChange={handleChangee}
        />
      </form>
      {items
        .filter((item) => {
          let filter = searchParams.get("filter");
          return item.item.includes(filter);
        })
        .map((item) => {
          return (
            <li key={item.id} className="color">
              {item.item}
            </li>
          );
        })}
    </div>
  );
}
