import React, { useContext } from "react";
import { PagesContext } from "../../services/PagesContext";
import deletePage from "../../services/PagesContext/actions/DeletePage";

const DeletePage = () => {
  const { dispatch } = useContext(PagesContext);

  const handleClick = () => dispatch(deletePage());

  return (
    <button className="btn" onClick={() => handleClick()}>
      <i className="fa fa-trash"></i> Delete Page
    </button>
  );
};

export default DeletePage;
