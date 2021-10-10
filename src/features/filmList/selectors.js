import {useSelector} from 'react-redux';

export const useLoadingState = () => {
  const {isLoading, hasError, isFulfilled} = useSelector(state => state.film);
  return {isLoading, hasError, isFulfilled};
};

export const useFilmList = () => useSelector(state => state.film.filmList);
