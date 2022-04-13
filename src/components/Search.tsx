import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import * as queryString from "query-string";
import { useLocation, navigate } from "@reach/router";
import searchIcon from "../assets/openBook.png";
import PostList from "./PostList";

export default function Search({ data }) {
  const location = useLocation();
  const searchRef = useRef(null);
  const { search } = queryString.parse(location.search);
  const [query, setQuery] = useState(search || "");
  const { localSearchArticles } = useStaticQuery(graphql`
    query {
      localSearchArticles {
        index
        store
      }
    }
  `);

  const results = useFlexSearch(
    query,
    localSearchArticles.index,
    localSearchArticles.store,
  );

  return (
    <>
      <div className="search-bar">
        <input
          ref={searchRef}
          id="search"
          type="search"
          className="search-input"
          placeholder="Begin typing to search..."
          value={query}
          onChange={(e) => {
            navigate(e.target.value ? `/articles/?search=${e.target.value}` : '');
            setQuery(e.target.value);
          }}
        />
        <img className="search-icon" src={searchIcon} alt="Search" />
      </div>
      <section>
        {query ? (
          results.length > 0 ? (
            <PostList data={results} showYears query={query} />
          ) : (
            <p style={{ marginTop: "2rem" }}>
              Sorry, nothing matched that search.
            </p>
          )
        ) : (
          <PostList data={data} showYears />
        )}
      </section>
    </>
  );
}
