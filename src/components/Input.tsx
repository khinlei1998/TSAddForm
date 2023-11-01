import React, { FC } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const Input: FC = () => {
    return (
        <View>
            <Icon
                name="arrow-left"
                size={20}
                color="#000"
                style={{ width: 20, height: 20 }}
            />
        </View>
    )
}
export default Input