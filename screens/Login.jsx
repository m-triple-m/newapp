import { Button, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

const themeColor = '#2d665f';

const Login = () => {

    return <View style={styles.container}>
        <View style={styles.loginInfo}>
            <Text style={styles.title}>Welcome</Text>
            <Text style={styles.subTitle}>Sign in to Continue</Text>
        </View>
        <View style={styles.loginForm}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput style={styles.input} placeholder="Enter email address" keyboardType="email-address" />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry />

            {/* <Button title="Login" color={themeColor} onPress={ () => { alert('form submitted') } } /> */}

            <Pressable style={styles.loginBtn}
                onPress={() => { alert('button pressed') }}
                onLongPress={() => { alert('button long pressed') }}
            >
                <Text style={styles.btnText}>Login</Text>
            </Pressable>

        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themeColor,
        paddingTop: 30
    },
    loginInfo: {
        flex: 1,
        padding: 30,
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 50,
        marginVertical: 10
    },
    subTitle: {
        color: '#fff',
        fontSize: 20
    },
    loginForm: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 50
    },
    label: {
        color: themeColor,
        fontSize: 20,
        fontWeight: '500',
    },
    input: {
        borderColor: themeColor,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 3,
        fontSize: 20,
        color: themeColor
    },
    loginBtn: {
        backgroundColor: themeColor,
        padding: 15,
        borderRadius: 5,
    },
    btnText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center'
    }
})

export default Login;