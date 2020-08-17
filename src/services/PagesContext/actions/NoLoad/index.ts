import { createAction } from "@reduxjs/toolkit";
import { PagesActionTypes } from "..";
import { PagesState } from "../../";

export type noLoad = { type: PagesActionTypes.noLoad };

const action = createAction(PagesActionTypes.noLoad);

export const reducer = (state: PagesState) => {};

export default action;
