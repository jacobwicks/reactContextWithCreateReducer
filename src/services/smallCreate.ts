export const reducer: Reducer<
  PagesState,
  PagesAction
> = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(addPage, addPageReducer)
      .addCase(deletePage, deletePageReducer)
      .addCase(setCurrentPage, setCurrentPageReducer)
);