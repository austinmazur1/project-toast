import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ handleDismiss, toasts }) {

  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast radioType={toast.radioVariant} handleDismiss={() => handleDismiss(toast.id)}
            message={toast.message} />
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
