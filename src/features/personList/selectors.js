import {useSelector} from 'react-redux';

export const useLoadingState = () => {
  const {isLoading, hasError, isFulfilled} = useSelector(state => state.person);
  return {isLoading, hasError, isFulfilled};
};

export const usePersonList = () =>
  useSelector(state => state.person.personList);
