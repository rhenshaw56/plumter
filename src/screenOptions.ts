export const bottomTabs = {
  id: 'BOTTOM_TABS_LAYOUT',
  children: [
    {
      stack: {
        id: 'ACCOUNTS_TAB',
        children: [
          {
            component: {
              id: 'ACCOUNTS_TAB',
              name: 'app.Account',
            },
          },
        ],
        options: {
          bottomTab: {
            icon: require('./assets/icons/layer.png'),
          },
        },
      },
    },
    {
      stack: {
        id: 'PROFILE_TAB',
        children: [
          {
            component: {
              id: 'PROFILE_SCREEN',
              name: 'app.Login',
            },
          },
        ],
        options: {
          bottomTab: {
            icon: require('./assets/icons/card.png'),
          },
        },
      },
    },
    {
      stack: {
        id: 'PROFILE_TAB',
        children: [
          {
            component: {
              id: 'PROFILE_SCREEN',
              name: 'app.Login',
            },
          },
        ],
        options: {
          bottomTab: {
            icon: require('./assets/icons/share.png'),
          },
        },
      },
    },
    {
      stack: {
        id: 'PROFILE_TAB',
        children: [
          {
            component: {
              id: 'PROFILE_SCREEN',
              name: 'app.Login',
            },
          },
        ],
        options: {
          bottomTab: {
            icon: require('./assets/icons/reader.png'),
          },
        },
      },
    },
  ],

};
