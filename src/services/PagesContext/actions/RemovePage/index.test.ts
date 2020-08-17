import { reducer } from "./index";
import { initialState } from "../../../PagesContext";
import { Page } from "../../../../types";

const makePage = (number: number): Page => ({
  page: `I'm page ${number}`,
  questions: [],
});

const page0 = makePage(0);
const page1 = makePage(1);

const stateWithPages = { ...initialState, pages: [page0, page1] };

it("removes a page from state", () => {
  const newState = { ...stateWithPages };
  expect(newState.pages.length).toBe(2);

  reducer(newState, { payload: { page: page1.page } });
  expect(newState.pages.length).toBe(1);
});

it("doesn't remove a page from state if the page isn't found", () => {
  const newState = { ...stateWithPages };
  expect(newState.pages.length).toBe(2);

  reducer(newState, { payload: { page: "Wrong Page" } });
  expect(newState.pages.length).toBe(2);
});
