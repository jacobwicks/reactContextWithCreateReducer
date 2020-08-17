import { PagesState } from "../../";
import { PagesActionTypes } from "..";
import { createAction } from "@reduxjs/toolkit";

export type setCurrentPage = {
  type: PagesActionTypes.setCurrentPage;
  payload: number;
};

const action = createAction<number, PagesActionTypes.setCurrentPage>(
  PagesActionTypes.setCurrentPage
);

export const reducer = (
  state: PagesState,
  { payload }: { payload: number }
) => {
  state.current = payload;
};

export default action;
