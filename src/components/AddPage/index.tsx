import React, { useContext } from "react";
import { PagesContext } from "../../services/PagesContext";
import getPage from "../../services/GetPage";
import addPage from "../../services/PagesContext/actions/AddPage";

const AddPage = () => {
  const { dispatch, pages } = useContext(PagesContext);

  const handleClick = () => {
    const pageNumber = pages.length ? pages[pages.length - 1].number + 1 : 1;
    const newPage = getPage(pageNumber);
    dispatch(addPage({ page: newPage }));
  };

  return (
    <button className="btn" onClick={() => handleClick()}>
      <i className="fa fa-plus"></i> Add Page
    </button>
  );
};

export default AddPage;
