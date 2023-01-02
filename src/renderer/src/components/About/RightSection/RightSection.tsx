import React from 'react';
import { Card } from 'antd';

import styles from './RightSection.module.scss';

import Languages from '../Languages/Languages';

import Contacts from '../Contacts/Contacts';

const RightSection: React.FC = (): JSX.Element => {
  return (
    <Card className={styles.card}>
      <Contacts />

      <Languages />
    </Card>
  );
};

export default RightSection;
