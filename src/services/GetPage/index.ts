import getRandomInt from "../GetRandomInt";
import getQuestions from "../GetQuestions";

const getPage = (number: number, numberOfQuestions?: number) => ({
  number,
  questions: getQuestions(
    numberOfQuestions ? numberOfQuestions : getRandomInt(2, 10)
  ),
});

export default getPage;
