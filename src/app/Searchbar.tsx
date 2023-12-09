"use client";

import { useState } from "react";
import { SearchIcon } from "./SearchIcon";
import { list } from "./CarList";
import Link from "next/link";

const Searchbar = () => {
  const [activeSearch, setActiveSearch] = useState([] as any);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      list.filter((c) =>
        c.title.toUpperCase().includes(e.currentTarget.value.toUpperCase())
      )
    );
  };

  return (
    <form className="lg:w-[500px] w-[150px] relative z-20 group">
      <div className="relative">
        <input
          type="search"
          placeholder="Search for a car"
          className="w-full lg:p-3 p-2 rounded-full bg-slate-800 text-sm lg:text-md"
          onChange={(e) => handleSearch(e)}
        />
        <label className="absolute right-1 top-1/2 -translate-y-1/2 lg:p-3 p-2 bg-slate-900 rounded-full">
          <SearchIcon />
        </label>
      </div>
      {activeSearch.length > 0 && (
        <div className="hidden group-focus-within:flex absolute top-[60px] p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex-col gap-2">
          {activeSearch.map((s: { title: string; id: string }) => (
            <span key={s.id}>
              <Link href={`/cars/${s.id}`}>{s.title}</Link>
            </span>
          ))}
        </div>
      )}
    </form>
  );
};

export default Searchbar;
