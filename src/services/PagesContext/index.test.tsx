import { initialState, reducer } from "./index";
//import the action creator functions for each action you want to test
import addPage from "./actions/AddPage";
import deletePage from "./actions/DeletePage";
import setCurrentPage from "./actions/SetCurrentPage";

//a helper function that creates Page objects
import getPage from "../GetPage";

const page0 = getPage(0);
const page1 = getPage(1);
const page2 = getPage(2);

const stateWithPages = { ...initialState, pages: [page0, page1, page2] };

describe("PagesContext reducer", () => {
  it("returns state", () => {
    const action = { type: undefined };
    expect(reducer(initialState, action)).toEqual(initialState);
  });

  //testing an action with no payload
  it("removes a page from state", () => {
    const newState = { ...stateWithPages, current: 1 };
    expect(newState.pages.length).toBe(3);
    expect(newState.pages.find((p) => p.number === newState.current)).toBe(
      page1
    );

    //use the action creator function to make the action
    const action = deletePage();

    //make assertion about the return value
    expect(reducer(stateWithPages, action).pages.length).toEqual(2);
  });

  //testing an action with an object in the payload
  it("adds a page", () => {
    const newState = { ...stateWithPages };
    expect(newState.pages.length).toBe(3);

    //create a new page object
    const newPage = getPage(3);

    //call the action creator
    const action = addPage({ page: newPage });

    //make the assertion about the return value
    expect(reducer(stateWithPages, action).pages.length).toEqual(4);
  });

  //testing an action with a primitive (number) payload
  it("sets the current page", () => {
    const newState = { ...stateWithPages, current: 0 };
    expect(newState.pages.find((p) => p.number === 1)).toBe(page1);

    //call the action creator
    const action = setCurrentPage(1);

    //make the assertion about the return value
    expect(reducer(stateWithPages, action).current).toEqual(1);
  });
});
