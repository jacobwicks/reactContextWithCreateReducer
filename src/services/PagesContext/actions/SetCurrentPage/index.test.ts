//import the action creator and the reducer function
import setCurrentPage, { reducer } from "./index";
import { initialState } from "../../../PagesContext";
import getPage from "../../../GetPage";

const page0 = getPage(0);
const page1 = getPage(1);
const page2 = getPage(2);
const page3 = getPage(3);

const stateWithPages = {
  ...initialState,
  current: 1,
  pages: [page0, page1, page2, page3],
};

it("changes the current page", () => {
  const newState = { ...stateWithPages };
  expect(newState.pages.length).toBe(4);
  expect(newState.current).toBe(1);

  //call the action creator
  const action = setCurrentPage(3);

  //the reducer mutates the newState object
  //because we aren't using the Immer library in the testing environment
  //in actual use, the createReducer function uses Immer so that instead of mutating state
  //a new state is generated
  reducer(newState, action);

  //but here, without immer
  //we expect the state object to be mutated
  expect(newState.current).toBe(3);
});
