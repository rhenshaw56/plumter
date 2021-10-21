import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent(
    'app.Login',
    () => require('./screens/Login').default,
  );
  // Navigation.registerComponent(
  //   'blog.AddPost',
  //   () => require('./posts/screens/AddPost').default,
  // );
  // Navigation.registerComponent(
  //   'blog.ViewPost',
  //   () => require('./posts/screens/ViewPost').default,
  // );
}
