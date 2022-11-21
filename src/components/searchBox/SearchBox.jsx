import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { inst } from "../../services/inst";
import Movie from "./items/Movie";
import Person from "./items/person";
import Tv from "./items/Tv";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        const { data } = await inst("search/multi", {
          params: {
            query,
          },
        });
        setSearchResult(data.results);
      } else {
        setSearchResult([]);
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);
  function showItem(item) {
    switch (item.media_type) {
      case "tv":
        return <Tv key={item.id} item={item} />;
      case "movie":
        return <Movie key={item.id} item={item} />;
      case "person":
        return <Person key={item.id} item={item} />;
    }
  }

  return (
    <div className="py-20">
      <form className=" mt-64">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 left-48 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              strokeLinecap="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            id="default-search"
            className="block  outline-none w-3/4 mx-auto   p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a Movie,TV Show, or a celebrity ..."
          />
          <button
            type="submit"
            className="text-white absolute right-52 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      <div
        className={`flex flex-col gap-2  p-2 bg-slate-400 mx-auto rounded-md bg-opacity-80 border-slate-700  border-2 border-opacity-25
  z-10  w-3/4   transition-all duration-50 ${
    searchResult.length && query
      ? "max-h-[300px]  overflow-auto"
      : "h-0 overflow-hidden opacity-0"
  }`}
      >
        {searchResult.map((item) => (
          <div onClick={() => setSearchResult([])}>{showItem(item)}</div>
        ))}
      </div>
    </div>
  );
}
