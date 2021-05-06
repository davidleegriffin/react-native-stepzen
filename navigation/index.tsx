import React from 'react';
import {
  StyleSheet, View, ActivityIndicator,
} from 'react-native';
import Auth from '@aws-amplify/auth';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userToken: null,
      loading: true,
    };
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  async componentDidMount() {
    await this.loadApp();
  }

  async loadApp() {
    await Auth.currentAuthenticatedUser()
      .then((user) => {
        this.signIn(user);
      })
      .catch(() => {
        console.log('err signing in');
      });
    this.setState({
      loading: false,
    });
  }

  async signOut() {
    await Auth.signOut()
      .catch((err) => {
        console.log('ERROR: ', err);
      });
    this.setState({ userToken: null });
  }

  async signIn(user) {
    this.setState({
      userToken: user.signInUserSession.accessToken.jwtToken,
    });
  }

  render() {
    const { userToken, loading } = this.state;
    const showLoadingSpinner = (!userToken && loading);
    let view = '';
    if (showLoadingSpinner) {
      view = (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#aaa" />
        </View>
      );
    } else if (!userToken) {
      view = <AuthNavigator signIn={this.signIn} />;
    } else {
      view = <AppNavigator signOut={this.signOut} />;
    }
    return (
      <NavigationContainer>
        {view}
      </NavigationContainer>
    );
  }
}


export default AuthLoadingScreen;


/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import * as React from 'react';
// import { ColorSchemeName } from 'react-native';

// import NotFoundScreen from '../screens/NotFoundScreen';
// import { RootStackParamList } from '../types';
// import BottomTabNavigator from './BottomTabNavigator';
// import LinkingConfiguration from './LinkingConfiguration';

// export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
//   return (
//     <NavigationContainer
//       linking={LinkingConfiguration}
//       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <RootNavigator />
//     </NavigationContainer>
//   );
// }

// // A root stack navigator is often used for displaying modals on top of all other content
// // Read more here: https://reactnavigation.org/docs/modal
// const Stack = createStackNavigator<RootStackParamList>();

// function RootNavigator() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Root" component={BottomTabNavigator} />
//       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
//     </Stack.Navigator>
//   );
// }
