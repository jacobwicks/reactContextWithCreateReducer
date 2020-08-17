import React, { useContext } from "react";
import { PagesContext } from "../../services/PagesContext";
import AddPage from "../AddPage";

const RemovePage = () => (
  <button className="btn">
    <i className="fa fa-trash"></i>Delete Page
  </button>
);

const Sidebar = () => {
  const { pages } = useContext(PagesContext);
  return (
    <div className="sidenav">
      <AddPage />
      <RemovePage />
      {pages &&
        pages.map((page) => (
          <a>
            {page.page} <br />
            {page.questions.length} Question
            {page.questions.length !== 1 ? "s" : ""}
          </a>
        ))}
    </div>
  );
};

export default Sidebar;
