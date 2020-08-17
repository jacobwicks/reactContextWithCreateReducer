export const reducer: Reducer<
  AlbumsState,
  AlbumsAction
> = createReducer(
  initialState,
  (builder) =>
    builder
      .addCase(accept, acceptReducer)
      .addCase(createNewAlbum, createNewAlbumReducer)
      .addCase(delete, deleteReducer)
      .addCase(deleteAlbum, deleteAlbumReducer)
);