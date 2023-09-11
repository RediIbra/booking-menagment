import { toast } from "react-toastify";
import { Flip } from "react-toastify";
export const Notification = (type, message, autoClose) => {
  toast?.[type](message, {
    transition: Flip,
    autoClose: autoClose,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
  });
};
