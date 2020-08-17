import React, { createContext, useReducer } from "react";
import { createReducer, Reducer } from "@reduxjs/toolkit";
import { PagesAction } from "./actions";
import addPage, { reducer as addPageReducer } from "./actions/AddPage";
import deletePage, { reducer as deletePageReducer } from "./actions/DeletePage";
import setCurrentPage, {
  reducer as setCurrentPageReducer,
} from "./actions/SetCurrentPage";
import getPage from "../GetPage";

export type Page = {
  //the number of the page
  number: number;

  //the questions that are on the page
  questions: string[];
};

export type PagesState = {
  current?: number;
  pages: Page[];
  dispatch: React.Dispatch<PagesAction>;
};

const page1 = getPage(1);
const page2 = getPage(2);
const page3 = getPage(3);

export const initialState = {
  current: 1,
  pages: [page1, page2, page3],
  dispatch: (action: PagesAction) => undefined,
} as PagesState;

export const reducer: Reducer<
  //type the state object that the reducer accepts
  PagesState,
  //type the actions that the reducer processes
  PagesAction
> = createReducer(
  //the initial state that the reducer starts with
  initialState,
  //the builder callback function
  (builder) =>
    builder
      //addCase adds a key and a reducer function to the reducer
      .addCase(
        //addPage is the action creator function,
        //but it can also be used as the key
        //thanks to the redux toolkit createAction function
        addPage,

        //the reducer function accepts state and action
        //and returns state
        //these all take PagesState and a PagesAction
        addPageReducer
      )

      //call addCase again to add all the other cases
      .addCase(deletePage, deletePageReducer)
      .addCase(setCurrentPage, setCurrentPageReducer)
);

const PagesContext = createContext(initialState);

//the Props that the PagesProvider will accept
type PagesProps = {
  //You can put react components inside of the Provider component
  children: React.ReactNode;

  //We might want to pass a state into the Provider for testing purposes
  testState?: PagesState;

  //We might want to pass a dispatch function for testing purposes
  //I give it args: any because
  //I don't always want to have to accept valid actions
  //when I'm testing
  testDispatch?: (args: any) => void;
};

const PagesProvider = ({ children, testState, testDispatch }: PagesProps) => {
  //useReducer returns an array containing the state at [0]
  //and the dispatch method at [1]
  //use array destructuring to get state and dispatch
  const [state, dispatch] = useReducer(
    reducer,
    //if testState provided, use it
    testState ? testState : initialState
  );

  //add dispatch to value object
  const value: PagesState = {
    ...state,
    dispatch: testDispatch ? testDispatch : dispatch,
  };

  return (
    <PagesContext.Provider value={value}>{children}</PagesContext.Provider>
  );
};

export { PagesContext, PagesProvider };
