export const ACTION = {
  NONE: 'NONE',
  MORE_ACTION: 'MORE_ACTION',
  OPEN_DETAIL: 'OPEN_DETAIL',
  CREATE: 'CREATE',
  CLONE: 'CLONE',
  DELETE: 'DELETE',
  DELETE_MULTI: 'DELETE_MULTI',
};

export const DESC = 'DESC';
export const ASC = 'ASC';
export const PAGE_INDEX = 1;
export const PAGE_SIZE = 10;

export enum ERequestStatus {
  NONE = 1,
  REQUESTING = 2,
  REQUESTSUCCESS = 3,
  REQUESTFAIL = 4,
}

export const DEFAULT_DATA = {
  data: [],
  listState: {
    totalCount: 0,
    pageIndex: 1,
    pageSize: 10,
    sortBy: undefined,
    sortDirection: undefined,
    moreFilter: {},
  },
  fetchState: ERequestStatus.NONE,
  interactItem: null,
  anchorEl: null,
  itemAction: ACTION.NONE,
  selectable: false,
  selectedItems: [],
  checkAll: false,
};