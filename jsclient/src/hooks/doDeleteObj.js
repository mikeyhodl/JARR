import { apiUrl } from "../const";
import { doRetryOnTokenExpiration } from "../authSlice";
import doFetchFeeds from "./doFetchFeeds";

const doDeleteObj = (id, objType): AppThunk => async (dispatch, getState) => {
  await doRetryOnTokenExpiration({
    method: "delete",
    url: `${apiUrl}/${objType}${id ? `/${id}` : ""}`,
  }, dispatch, getState);
  dispatch(doFetchFeeds());
};

export default doDeleteObj;
