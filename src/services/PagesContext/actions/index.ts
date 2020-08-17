import { addPage } from "./AddPage";
import { deletePage } from "./DeletePage";
import { Page } from "..";
import { setCurrentPage } from "./SetCurrentPage";

//enum containing the action types
export enum PagesActionTypes {
  addPage = "addPage",
  addQuestion = "addQuestion",
  deletePage = "deletePage",
  setCurrentPage = "setCurrentPage",
}

//declare payload interfaces
export interface hasPage {
  page: Page;
}

//union type for all possible actions
export type PagesAction = addPage | deletePage | setCurrentPage;
