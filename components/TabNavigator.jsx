import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Login from '../screens/Login';
import About from '../screens/About';
import Signup from '../screens/Signup';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ ...styles.tabBarButton, backgroundColor: isFocused ? '#f3e5f5' : '#fff' }}
                    >
                        <MaterialIcon name={label === 'Home' ? 'home' : label === 'Login' ? 'login' : label === 'Signup' ? 'person-add' : 'info'} size={30} color={isFocused ? '#673ab7' : '#222'} />
                        <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    tabBarButton: {
        flex: 1,
        marginBottom: 10,
        alignItems: 'center',
        padding: 5
    }
});

const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Signup" component={Signup} />
            <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
    )
}

export default TabNavigator