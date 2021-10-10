import {GET_PERSON_LIST} from './actionTypes';
import PersonListReducer from './PersonListReducer';

describe('features > personList > RandomReducer', () => {
  it('returns initial state, if non matched action is dispatched', () => {
    const initialState = {
      isLoading: false,
      hasError: false,
      isFulfilled: false,
    };

    const action = {
      type: 'FOO',
    };

    expect(PersonListReducer(initialState, action)).toBe(initialState);
  });

  it.each([
    [`${GET_PERSON_LIST}_FULFILLED`],
    [`${GET_PERSON_LIST}_PENDING`],
    [`${GET_PERSON_LIST}_REJECTED`],
  ])(`updates state according to dispatched action`, actionType => {
    const initialState = {
      personList: [],
    };

    const payload =
      actionType === `${GET_PERSON_LIST}_FULFILLED`
        ? {
            data: {
              allPeople: {
                edges: [
                  {
                    node: {
                      id: 'cGVvcGxlOjE=',
                      name: 'Luke Skywalker',
                      gender: 'male',
                      filmConnection: {
                        edges: [
                          {
                            node: {
                              id: 'ZmlsbXM6MQ==',
                              title: 'A New Hope',
                            },
                          },
                          {
                            node: {
                              id: 'ZmlsbXM6Mg==',
                              title: 'The Empire Strikes Back',
                            },
                          },
                          {
                            node: {
                              id: 'ZmlsbXM6Mw==',
                              title: 'Return of the Jedi',
                            },
                          },
                          {
                            node: {
                              id: 'ZmlsbXM6Ng==',
                              title: 'Revenge of the Sith',
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          }
        : undefined;

    const action = {
      type: actionType,
      payload,
    };

    expect(PersonListReducer(initialState, action)).toMatchSnapshot();
  });
});
