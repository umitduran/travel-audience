import React, {useState, useEffect} from 'react';
import 'antd/dist/antd.css';
import {Avatar, Space, Table} from 'antd';
import {
  useGetPersonListQuery,
  useLoadingState,
  usePersonList,
} from '../../features/personList';
import {useGetFilmListQuery, useFilmList} from '../../features/filmList';

const PersonList = () => {
  const {isLoading} = useLoadingState();
  const personList = usePersonList();
  const filmList = useFilmList();
  const getPersonList = useGetPersonListQuery();
  const getFilmList = useGetFilmListQuery();
  useEffect(() => {
    getPersonList();
    getFilmList();
  }, []);

  const getDataSource = () => {
    const edges = personList.length !== 0 ? personList.allPeople.edges : [];
    return edges ? edges?.map(edge => edge.node) : [];
  };

  const getFilmFilters = () =>
    filmList?.allFilms?.films?.map(film => ({
      text: film.title,
      value: film.id,
    }));

  const onFilter = (value, record) => {
    const filteredPerson = record.filmConnection.edges.map(
      edge => edge.node.id === value
    );
    return filteredPerson.includes(true);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      // todo render should be function
      render: (name, row) => (
        <Space direction="vertical">
          <Avatar
            src={`https://avatars.dicebear.com/api/${row.gender}/${name}.svg?mood[]=happy&mood[]=happy`}
            size={{
              xs: 24,
              sm: 32,
              md: 36,
              lg: 48,
              xl: 56,
              xxl: 64,
            }}
          />
          <a>{name}</a>
        </Space>
      ),
    },
    {
      title: 'BirtYear',
      dataIndex: 'birthYear',
      key: 'birthYear',
      responsive: ['md', 'lg'],
    },
    {
      title: 'The Films (Appeared)',
      dataIndex: 'filmConnection',
      key: 'filmConnection',
      // todo render should be function
      render: filmConnection =>
        filmConnection?.edges.map(edge => (
          <div>
            <a>{edge.node.title}</a>
            <br />
          </div>
        )),
      filters: getFilmFilters(),
      onFilter: (value, record) => onFilter(value, record),
    },
  ];

  // todo error handle
  return (
    <Table columns={columns} dataSource={getDataSource()} loading={isLoading} />
  );
};

export default PersonList;
