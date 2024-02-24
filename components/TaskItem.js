import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable
} from 'react-native';

const TaskItem = (props) => {
    const [languages, setLanguages] = useState([]);

    function pickLanguages(selectedLanguages) {        
        if (languages.includes(selectedLanguages)) {
            setLanguages(languages.filter(Language => Language !== selectedLanguages));
            return;
        }

        setLanguages(Languages => Languages.concat(selectedLanguages));
    }

    function getTaskItemStyle() {
        return languages.includes(props.text) ? styles.taskItemActiveColor : styles.taskItemColor;
    }

    return (
        <View style={[styles.taskItem, getTaskItemStyle()]}>
            <View style={styles.taskItemData}>
                <Pressable style={styles.taskItemCheckbox} onPress={() => pickLanguages(props.text)}>
                    {languages.includes(props.text) && <Text style={styles.taskItemCheckboxCheck}>✓</Text>}
                </Pressable>
                <Text style={styles.taskItemText}>
                    {props.text}
                </Text>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    taskItemData: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 30,
    },
    taskItem: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    taskItemActiveColor: {
        backgroundColor: 'lightgreen'
    },
    taskItemColor: {
        backgroundColor: '#fff'
    },
    taskItemCheckbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 15,
        alignSelf: 'center',
    },
    taskItemCheckboxCheck: {
        alignSelf: 'center',
    },
    taskItemText: {
        alignSelf: 'center',
        fontSize: 16,
        marginRight: 15
    }
});

export default TaskItem;