import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

export default function Post({ node, query, prefix, hideDate, yearOnly }) {
  const date = new Date(node.date);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  let newStatus = false;
  if (date > oneMonthAgo) newStatus = true;

  let formattedDate;
  let formattedYear;

  if (node.date) {
    const dateArr = node.date.split(" ");
    const year = dateArr.pop();

    dateArr[0] = dateArr[0].slice(0, 3);
    formattedDate = dateArr.join(" ").slice(0, -1);
    formattedYear = year;
  }

  const getTitle = (title, inQuery) => {
    if (inQuery) {
      const re = new RegExp(
        inQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
        "i",
      );
      const highlightStart = title.search(re);

      if (highlightStart !== -1) {
        const highlightEnd = highlightStart + inQuery.length;

        return (
          <h3>
            {title.slice(0, highlightStart)}
            <strong className="highlighted">
              {title.slice(highlightStart, highlightEnd)}
            </strong>
            {title.slice(highlightEnd)}
          </h3>
        );
      }
      return <h3>{title}</h3>;
    }
    return <h3>{title}</h3>;
  };

  return (
    <Link
      to={prefix ? `/${prefix}${node.slug}` : node.slug}
      key={node.id}
      className={newStatus ? "post new" : "post"}
    >
      <span className="flex" style={{ alignItems: "center" }}>
        {node.thumbnail && (
          <Img
            fixed={node.thumbnail}
            style={{ marginRight: "1rem", minWidth: "25px" }}
          />
        )}
        {getTitle(node.title, query)}
        <span className="new-badge">{newStatus && "New!"}</span>
      </span>
      <div>
        {formattedDate && !hideDate && (
          <time>{yearOnly ? formattedYear : formattedDate}</time>
        )}
      </div>
    </Link>
  );
}
