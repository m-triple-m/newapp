import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import About from '../screens/About';
import DiceSimulator from '../screens/DiceSimulator';
import TodoList from '../screens/TodoList';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dice" component={DiceSimulator} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Signup" component={Signup} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="todolist" component={TodoList} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;