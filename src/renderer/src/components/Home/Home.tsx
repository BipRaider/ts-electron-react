import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../../redux/user';

import styles from './Home.module.scss';
import textPage from './text.json';

const Home: React.FC = (): JSX.Element => {
  const isPrivate: boolean = useSelector(userSelector.isPrivate);

  const [text, _setText] = useState(textPage['en']);

  return (
    <section className={styles.home}>
      <div className={styles.wrap}>
        <h1 className={styles.title}>{text.title}</h1>
        <h2 className={styles.name}>{text.name}</h2>
        <p className={styles.hello}>{text.hello}</p>
        <p className={styles.hello}>{text.about}</p>
        {!isPrivate && (
          <div className={styles.auth}>
            <p className={styles.text}>{text.alert}</p>
            <p className={styles.text}>{text.allow}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
