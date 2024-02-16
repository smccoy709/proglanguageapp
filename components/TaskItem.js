import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

const TaskItem = (props) => {
    const [languages, setLanguages] = useState([]);
    const options = [''];

    function pickLanguages(selectedLanguages) {        
        if (languages .includes(selectedLanguages)) {
            setLanguages(languages.filter(Language => Language !== selectedLanguages));
            return;
        }

        setLanguages(Languages => Languages.concat(selectedLanguages));
    }
    return (
        <View style={styles.items}>
            <View style={styles.options}>
                {options.map(option => (
                    <View key={option} style={styles.languages}>
                        <TouchableOpacity style={styles.checkBox} onPress={() => pickLanguages(option)}>
                            {languages.includes(option) && (<Text>✓</Text>)}
                        </TouchableOpacity>
                        <Text style={styles.languageName}>{option}</Text>
                    </View>
                ))}
            </View>
            <Text style={styles.itemLeft}>
                {props.text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 5,
        marginTop: 10,
    },
    languageName: {
        textTransform: 'capitalize',
        fontSize: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    options: {
        alignSelf: 'flex-start',
        marginLeft: 50,
    },
    items: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,

    },
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        marginRight: 150,
        paddingLeft: 25,
        paddingRight: 105,
    }
});

export default TaskItem;