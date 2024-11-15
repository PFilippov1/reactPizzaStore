import React from 'react';
import styles from './stylesNotFound.module.scss';

function NotFoundBlock() {
  return (
    <div>
      <h1>404</h1>
      <div className={styles.cloak__wrapper}>
        <div className={styles.cloak__container}>
          <div className={styles.cloak}></div>
        </div>
      </div>
      <div className={styles.info}>
        <h2 >We can't find that page</h2>
        <p>
          We're fairly sure that page used to be here, but seems to have gone missing. We do
          apologise on it's behalf.
        </p>
        <a href="https://jhey.dev" target="_blank" rel="noreferrer noopener">
          Home
        </a>
      </div>
    </div>
  );
}

export default NotFoundBlock;
