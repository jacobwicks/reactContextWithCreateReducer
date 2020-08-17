import { PagesState } from "../../";
import { anotherPayload, PagesActionTypes } from "../index";
import { createAction } from "@reduxjs/toolkit";

export type ok = {
  type: PagesActionTypes.ok;
  payload: anotherPayload;
};

const action = createAction<anotherPayload, PagesActionTypes.ok>(
  PagesActionTypes.ok
);

export const reducer = (
  state: PagesState,
  { payload }: { payload: anotherPayload }
) => {};

export default action;
