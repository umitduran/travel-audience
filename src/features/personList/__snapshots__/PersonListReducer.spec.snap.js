exports[
  `features > personList > PersonListReducer updates state according to dispatched action 1`
] = `
Object {
  "hasError": false,
  "isFulfilled": true,
  "isLoading": false,
  "personList": {allPeople: {
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
              },},
}
`;
