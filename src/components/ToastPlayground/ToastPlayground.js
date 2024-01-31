import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [radioVariant, setRadioVariant] = React.useState("notice");
  const [showDialog, setShowDialog] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);

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
    setMessage('')
    setRadioVariant('notice')
  };

  const handleDismiss = (toastId) => {
    const nextToasts = toasts.filter(({id}) => {
    return id !== toastId
    })
    setToasts(nextToasts)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {showDialog && (
        <ToastShelf
          toasts={toasts}
          handleDismiss={handleDismiss}
        />
      )}
      <form onSubmit={submitToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label key={option} htmlFor={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    onChange={(e) => {
                      setRadioVariant(e.target.value);
                      console.log(e.target);
                    }}
                    checked={option === radioVariant}
                    value={option}
                  />
                  {`${option}`}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
