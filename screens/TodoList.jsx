import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { AnimatedFAB, Button, Card, Text, TextInput } from 'react-native-paper'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const TaskCard = ({ text, completed, createdAt }) => {
    return <Card style={styles.taskCard} elevation={1}>
        <Card.Content>
            <Text variant="titleLarge">{text}</Text>
            <Text variant="bodyMedium">Card content</Text>
        </Card.Content>
        <Card.Actions>
            <Button>
                <MaterialIcon name="pencil" size={20} />
            </Button>
            <Button >
                <MaterialIcon name="delete" size={20} />
            </Button>
        </Card.Actions>
    </Card>
}

const TodoList = () => {

    const [taskList, setTaskList] = useState([
        { text: 'Task 1', completed: false, createdAt: new Date() },
        { text: 'Task 2', completed: false, createdAt: new Date() },
        { text: 'Task 3', completed: false, createdAt: new Date() },
        { text: 'Task 1', completed: false, createdAt: new Date() },
        { text: 'Task 2', completed: false, createdAt: new Date() },
        { text: 'Task 3', completed: false, createdAt: new Date() },
        { text: 'Task 1', completed: false, createdAt: new Date() },
        { text: 'Task 2', completed: false, createdAt: new Date() },
        { text: 'Task 3', completed: false, createdAt: new Date() },
        { text: 'Task 1', completed: false, createdAt: new Date() },
        { text: 'Task 2', completed: false, createdAt: new Date() },
        { text: 'Task 3', completed: false, createdAt: new Date() },
        { text: 'Task 1', completed: false, createdAt: new Date() },
        { text: 'Task 2', completed: false, createdAt: new Date() },
        { text: 'Task 3', completed: false, createdAt: new Date() },

    ])

    // const fabStyle = { [animateFrom]: 16 };

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title} variant="headlineLarge">Display Large</Text> */}
            <View style={styles.taskListContainer}>
                <FlatList
                    data={taskList}
                    renderItem={({ item }) => <TaskCard {...item} />}
                    keyExtractor={(item, index) => index}
                />
                {/* {
                    taskList.map((task, index) => <TaskCard key={index} {...task} />)
                } */}
                <AnimatedFAB
                
                    icon={'plus'}
                    label={'Label'}
                    // extended={false}
                    onPress={() => console.log('Pressed')}
                    // visible={visible}
                    animateFrom={'right'}
                    iconMode={'static'}
                    style={[styles.fabStyle]}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 10
    },
    title: {
        fontWeight: 'bold'
    },
    taskListContainer: {
        padding: 10
    },
    taskCard: {
        margin: 10
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
        borderRadius: 100,
    },
})

export default TodoList