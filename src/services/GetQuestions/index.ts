import getRandomInt from "../GetRandomInt";

const questions = [
  "What weird food combinations do you really enjoy?",
  "What social stigma does society need to get over?",
  "What food have you never eaten but would really like to try?",
  "What’s something you really resent paying for?",
  "What would a world populated by clones of you be like?",
  "Do you think that aliens exist?",
  "What are you currently worried about?",
  "Where are some unusual places you’ve been?",
  "Where do you get your news?",
  "What are some red flags to watch out for in daily life?",
  "What movie can you watch over and over without ever getting tired of?",
  "When you are old, what do you think children will ask you to tell stories about?",
  "If you could switch two movie characters, what switch would lead to the most inappropriate movies?",
  "What inanimate object would be the most annoying if it played loud upbeat music while being used?",
  "When did something start out badly for you but in the end, it was great?",
  "How would your country change if everyone, regardless of age, could vote?",
  "What animal would be cutest if scaled down to the size of a cat?",
  "If your job gave you a surprise three day paid break to rest and recuperate, what would you do with those three days?",
  "What’s wrong but sounds right?",
  "What’s the most epic way you’ve seen someone quit or be fired?",
  "If you couldn’t be convicted of any one type of crime, what criminal charge would you like to be immune to?",
  "What’s something that will always be in fashion, no matter how much time passes?",
  "What actors or actresses play the same character in almost every movie or show they do?",
  "In the past people were buried with the items they would need in the afterlife, what would you want buried with you so you could use it in the afterlife?",
  "What’s the best / worst practical joke that you’ve played on someone or that was played on you?",
  "Who do you go out of your way to be nice to?",
  "Where do you get most of the decorations for your home?",
  "What food is delicious but a pain to eat?",
  "Who was your craziest / most interesting teacher",
  "What “old person” things do you do?",
  "What was the last photo you took?",
  "What is the most amazing slow motion video you’ve seen?",
  "Which celebrity do you think is the most down to earth?",
  "What would be the worst thing to hear as you are going under anesthesia before heart surgery?",
  "What’s the spiciest thing you’ve ever eaten?",
  "What’s the most expensive thing you’ve broken?",
  "What obstacles would be included in the World’s most amazing obstacle course?",
  "What makes you roll your eyes every time you hear it?",
  "What do you think you are much better at than you actually are?",
  "Should kidneys be able to be bought and sold?",
  "What’s the most creative use of emojis you’ve ever seen?",
  "When was the last time you got to tell someone “I told you so.”?",
  "What riddles do you know?",
  "What’s your cure for hiccups?",
  "What invention doesn’t get a lot of love, but has greatly improved the world?",
  "What’s the most interesting building you’ve ever seen or been in?",
  "What mythical creature do you wish actually existed?",
  "What are your most important rules when going on a date?",
  "How do you judge a person?",
  "If someone narrated your life, who would you want to be the narrator?",
  "What was the most unsettling film you’ve seen?",
  "What unethical experiment would have the biggest positive impact on society as a whole?",
  "When was the last time you were snooping, and found something you wish you hadn’t?",
];

const getQuestions = (number = 1) => {
  let selected = [];
  for (let i = 0; i < number; i++) {
    selected.push(questions[getRandomInt(1, questions.length - 1)]);
  }
  return selected;
};

export default getQuestions;
