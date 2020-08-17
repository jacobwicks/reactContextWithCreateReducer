import addPage, { reducer } from "./index";
import { initialState } from "../../../PagesContext";
import getPage from "../../../GetPage";

const page0 = getPage(0);
const page1 = getPage(1);

const stateWithPages = { ...initialState, current: 1, pages: [page0, page1] };

it("adds a page to state", () => {
  const newState = { ...stateWithPages };
  expect(newState.pages.length).toBe(2);

  //create the new Page object
  const newPage = getPage(2);

  //call the action creator with the payload object that contains the new page
  const action = addPage({ page: newPage });

  //the reducer mutates the newState object
  //because we aren't using the Immer library in the testing environment
  //in actual use, the createReducer function uses Immer so that instead of mutating state
  //a new state is generated
  reducer(newState, action);

  //but here, without immer
  //we expect the state object to be mutated
  expect(newState.pages.length).toBe(3);
});
