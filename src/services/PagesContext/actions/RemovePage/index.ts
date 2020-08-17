import { PagesState } from "../../";
import { hasPage, PagesActionTypes } from "..";
import { createAction } from "@reduxjs/toolkit";

export type removePage = {
  type: PagesActionTypes.removePage;
  payload: hasPage;
};

const action = createAction<hasPage, PagesActionTypes.removePage>(
  PagesActionTypes.removePage
);

export const reducer = (
  state: PagesState,
  { payload }: { payload: hasPage }
) => {
  //state.pages = state.pages.filter((p) => p.page !== payload.page);
};

export default action;
