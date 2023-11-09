import { View, Text, StyleSheet ,Dimensions} from "react-native"
import { Fruit } from "../common/data"
import React, { FC } from 'react'
const width=Dimensions.get('screen').width
export const ListItem: FC<Fruit> = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ ...styles.listItem, alignItems: 'flex-start' }}>
                <Text>{props.name}</Text>
            </View>
            <View style={{ ...styles.listItem, alignItems: 'flex-end' }}>
                <Text style={styles.item}>{props.price}</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: width / 1.05,
        borderBottomWidth: 1,
        borderBottomColor: '#aaa',
        marginVertical: 10
    },
    listItem: {
        flex: 0.5,
        justifyContent: 'center'
    },
    item: {
        padding: 5,
        fontWeight: "600",
        fontSize: 16

    }
})