import {useSelector} from 'react-redux';

export const useLoadingState = () => {
  const {isLoading, hasError, isFulfilled} = useSelector(state => state.person);
  return {isLoading, hasError, isFulfilled};
};
