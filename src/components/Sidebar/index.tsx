import React, { useContext } from "react";
import { PagesContext } from "../../services/PagesContext";
import AddPage from "../AddPage";
import setCurrentPage from "../../services/PagesContext/actions/SetCurrentPage";

const Sidebar = () => {
  const { dispatch, current, pages } = useContext(PagesContext);
  return (
    <div className="sidenav">
      <AddPage />
      <br />
      {pages &&
        pages.map((page, index) => (
          <div key={index} style={{ padding: 10 }}>
            <button
              className="btn"
              style={
                current === page.number
                  ? { backgroundColor: "darkblue" }
                  : undefined
              }
              onClick={() => dispatch(setCurrentPage(page.number))}
            >
              Page {page.number} <br />
              {page.questions.length} Question
              {page.questions.length !== 1 ? "s" : ""}
            </button>
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
