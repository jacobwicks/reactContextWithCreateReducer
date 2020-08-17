import { PagesState } from "../../";
import { PagesActionTypes } from "..";
import { createAction } from "@reduxjs/toolkit";

export type deletePage = {
  type: PagesActionTypes.deletePage;
};

const action = createAction(PagesActionTypes.deletePage);

export const reducer = (state: PagesState) => {
  state.pages = state.pages.filter((p) => p.number !== state.current);
  state.current = undefined;
};

export default action;
