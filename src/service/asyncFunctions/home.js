import { setAlertData } from "../../store/home";

export const setAlert = (type, content) => async (dispatch) => {
  if (type) {
    dispatch(
      setAlertData({
        type,
        content,
        showAlert: true,
      })
    );
  }
};
