import React from 'react';
import 'antd/dist/antd.css';
import {Col, Row, Layout} from 'antd';
import PersonList from 'components/PersonList';
import classes from './App.module.css';

const {Header} = Layout;

const App = () => (
  <Row className={classes.row}>
    <Col span={12} offset={6}>
      <Header className={classes.header}>
        Welcome to Umit Travel Audience Star Wars Challenge
      </Header>
    </Col>
    <Col span={12} offset={6}>
      <PersonList />
    </Col>
  </Row>
);

export default App;
