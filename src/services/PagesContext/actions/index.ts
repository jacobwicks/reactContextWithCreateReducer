import { addPage } from "./AddPage";
import { noLoad } from "./NoLoad";
import { ok } from "./Ok";
import { removePage } from "./RemovePage";
import { Page } from "..";

//enum containing the action types
export enum PagesActionTypes {
  addPage = "addPage",
  removePage = "removePage",
  ok = "ok",
  noLoad = "noLoad",
}

//declare payload interfaces
export interface hasPage {
  page: Page;
}

export interface anotherPayload {
  whatever: number;
}

//union type for all possible actions
export type PagesAction = addPage | noLoad | ok | removePage;
