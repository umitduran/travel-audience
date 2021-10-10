import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {gql} from '@apollo/client';
import client from '../../config';
import {GET_FILM_LIST} from './actionTypes';

const query = gql`
  query {
    allFilms {
      films {
        id
        title
        episodeID
      }
    }
  }
`;

const useGetFilmListQuery = () => {
  const dispatch = useDispatch();
  return useCallback(
    () =>
      dispatch({
        type: GET_FILM_LIST,
        payload: client.query({
          query,
        }),
      }),
    [dispatch]
  );
};

export default useGetFilmListQuery;
