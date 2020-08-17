import React, { useContext } from "react";
import { PagesContext } from "../../services/PagesContext";
import DeletePage from "../DeletePage";

const Page = () => {
  const { current, pages } = useContext(PagesContext);

  const currentPage = pages.find((page) => page.number === current);

  if (!currentPage)
    return (
      <div className="main">
        <h2>No page selected</h2>
      </div>
    );

  const { questions } = currentPage;

  return (
    <div className="main">
      <h2>This is page {currentPage.number}</h2>
      <DeletePage />
      <br />
      <br />
      {questions.map((question, index) => (
        <div key={index}>
          <div>
            {index + 1}. {question}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
