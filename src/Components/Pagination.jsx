import React from "react";

export default function Pagination({ postperpage, totalPost, paginate }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPost / postperpage); i++) {
    pageNumber.push(i);
  }

  const style = {
    position: "absolute",
    zIndex: 1,
  };
  return (
    <div className="text-center">
      <ul className="pagination">
        {pageNumber.map((number) => {
          return (
            <>
              <li key={number} className="page-item">
                <a
                  onClick={() => {
                    paginate(number);
                  }}
                  href="#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
