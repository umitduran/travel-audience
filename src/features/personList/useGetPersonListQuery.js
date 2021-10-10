import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {gql} from '@apollo/client';
import client from '../../config';
import {GET_PERSON_LIST} from './actionTypes';

const query = gql`
  query {
    allPeople {
      edges {
        node {
          id
          name
          height
          mass
          hairColor
          skinColor
          eyeColor
          birthYear
          gender
          filmConnection {
            edges {
              node {
                id
                title
              }
            }
          }
        }
      }
    }
  }
`;

const useGetPersonListQuery = () => {
  const dispatch = useDispatch();
  return useCallback(
    () =>
      dispatch({
        type: GET_PERSON_LIST,
        payload: client.query({
          query,
        }),
      }),
    [dispatch]
  );
};

export default useGetPersonListQuery;
