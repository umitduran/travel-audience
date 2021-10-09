import React from 'react';
import 'antd/dist/antd.css';
import {Avatar, Button, List} from 'antd';
import {
  useGetPersonListQuery,
  useLoadingState,
} from '../../features/personList';
import classes from './PersonList.module.css';

const PersonList = () => {
  const {isLoading, hasError, isFulfilled} = useLoadingState();

  const getPersonList = useGetPersonListQuery();

  const isPristine = !isLoading && !hasError && !isFulfilled;

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];

  return (
    <List
      className={classes.list}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                size={48}
                src="https://avatars.dicebear.com/api/female/jik.svg?background=%230000ff"
              />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
};

export default PersonList;
