import React from "react";
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [radioVariant, setRadioVariant] = React.useState("notice");
  const [showDialog, setShowDialog] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);

  const handleDismiss = (toastId) => {
    const nextToasts = toasts.filter(({ id }) => {
      return id !== toastId;
    });
    setToasts(nextToasts);
  };

  const submitToast = (e) => {
    e.preventDefault();
    setShowDialog(true);
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        radioVariant,
      },
    ];
    setToasts(nextToasts);
    setMessage("");
    setRadioVariant("notice");
  };

  return (
    <ToastContext.Provider
      value={{
        message,
        setMessage,
        radioVariant,
        setRadioVariant,
        showDialog,
        toasts,
        handleDismiss,
        submitToast
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;