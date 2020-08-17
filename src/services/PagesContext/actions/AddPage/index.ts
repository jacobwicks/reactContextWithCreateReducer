import { PagesState } from "../../";
import { hasPage, PagesActionTypes } from "..";
import { createAction } from "@reduxjs/toolkit";

export type addPage = {
  type: PagesActionTypes.addPage;
  payload: hasPage;
};

const action = createAction<hasPage, PagesActionTypes.addPage>(
  PagesActionTypes.addPage
);

export const reducer = (
  state: PagesState,
  { payload }: { payload: hasPage }
) => {
  state.pages.push(payload.page);
};

export default action;
