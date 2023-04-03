const STORE_ALBUMS = 'STORE_ALBUMS';

const storeAlbumRecords = payload => ({
  type: STORE_ALBUMS,
  payload,
});

export {storeAlbumRecords};
