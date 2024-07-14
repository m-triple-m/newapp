import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';
import TabNavigator from './components/TabNavigator';
import TopTabNavigator from './components/BottomTabNavigator';
import { StatusBar } from 'expo-status-bar';
import DrawerNavigator from './components/DrawerNavigator';
// const statusBarHeight = StatusBar.currentHeight;
// console.log('statusBarHeight:', statusBarHeight);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: 20 }}>
        <Text>Nice</Text>
      </View>
      <StatusBar style='light' translucent={false} />
      <NavigationContainer>
        {/* <Navigation /> */}
        {/* <TabNavigator /> */}
        {/* <TopTabNavigator /> */}
        <DrawerNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
