import React, { useContext } from "react";
import { PagesContext } from "../../services/PagesContext";

const Page = () => {
  const { current, pages } = useContext(PagesContext);

  const thisPage = pages.find((page) => page.page === current);

  if (!thisPage) return <div />;

  const { questions } = thisPage;

  return (
    <div>
      {questions.map((question, index) => (
        <div>
          <div>
            {index + 1}. {question}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
