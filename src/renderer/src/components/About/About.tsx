import React from 'react';
import { Col, Row } from 'antd';

import styles from './About.module.scss';

import LeftSection from './LeftSection/LeftSection';
import RightSection from './RightSection/RightSection';

const About: React.FC = (): JSX.Element => {
  return (
    <section className={styles.about}>
      <div className={styles.wrap}>
        <Row justify={'center'} align={'stretch'} gutter={[8, 16]}>
          <Col xs={24} sm={24} md={20} lg={10} xl={10}>
            <LeftSection />
          </Col>
          <Col xs={24} sm={24} md={20} lg={14} xl={14}>
            <RightSection />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default About;
