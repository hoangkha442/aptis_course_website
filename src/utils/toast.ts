import { toast } from "react-toastify";

export const showToast = (message: string, type: "success" | "error" | "info" | "warning") => {
  toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
