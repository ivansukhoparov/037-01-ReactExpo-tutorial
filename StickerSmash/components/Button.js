import {
    Pressable, // button
    StyleSheet, // component to create styles
    Text, // block of text
    View // container
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome"; // library with vector icons from expo

export default function Button({label, theme, onPress}) {
    if (theme === "primary") {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, {backgroundColor: "#fff"}]}
                           onPress={onPress}>
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, {color: "#25292e"}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress} >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer: {
        width: 100,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
    buttonIcon: {
        paddingRight: 8,
    }
})