import getRandomInt from "../GetRandomInt";
import getQuestions from "../GetQuestions";

const getPage = (pageNumber: number, numberOfQuestions?: number) => ({
  page: `This is page ${pageNumber}`,
  questions: getQuestions(
    numberOfQuestions ? numberOfQuestions : getRandomInt(2, 10)
  ),
});

export default getPage;
