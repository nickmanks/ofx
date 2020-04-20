import styles from './index.scss';

export const getClassName = (error, focused)=> {
  if (error && focused) {
    return `${styles.textbox} ${styles.textboxError} ${styles.textboxFocused}`;
  }

  if (error) {
    return `${styles.textbox} ${styles.textboxError}`;
  }

  if (focused) {
    return `${styles.textbox} ${styles.textboxFocused}`;
  }

  return styles.textbox;
};
