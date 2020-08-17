//this action has no payload, so you don't have to import the action creator
//just the reducer function
import { reducer } from "./index";
import { initialState } from "../../../PagesContext";
import getPage from "../../../GetPage";

const page0 = getPage(0);
const page1 = getPage(1);

const stateWithPages = { ...initialState, current: 1, pages: [page0, page1] };

it("deletes a page from state", () => {
  const newState = { ...stateWithPages };
  expect(newState.pages.length).toBe(2);

  //the reducer mutates the newState object
  //because we aren't using the Immer library in the testing environment
  //in actual use, the createReducer function uses Immer so that instead of mutating state
  //a new state is generated
  reducer(newState);

  //but here, without immer
  //we expect the state object to be mutated
  expect(newState.pages.length).toBe(1);
});

it("doesn't delete a page if no page is currently selected", () => {
  const newState = { ...stateWithPages, current: undefined };
  expect(newState.pages.length).toBe(2);

  reducer(newState);
  expect(newState.pages.length).toBe(2);
});
