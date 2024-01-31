import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";
import VisuallyHidden from "../VisuallyHidden";

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastContext);

  return (
    <ol
      role="region"
      aria-live="polite"
      aria-label="Notification"
      className={styles.wrapper}
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <VisuallyHidden>{`${toast.radioVariant} -`}</VisuallyHidden>
          <Toast
            radioType={toast.radioVariant}
            handleDismiss={() => handleDismiss(toast.id)}
            message={toast.message}
          />
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
