import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native"

const Home = () => {

    const navigator = useNavigation();

    return (
        <View>
            <Text>Home Page</Text>
            <Button title="Go to Login" onPress={() => navigator.navigate('Login')} />
        </View>
    )
}


export default Home;