import React, { FC } from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void
}
const Input: FC<Props> = ({ icon, placeholder, onChangeText }) => {
    return (
        <View style={{ padding: 15,justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'flex-start' }} >
                <Icon
                    name={icon}
                    size={20}
                    color="#000"
                />

            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TextInput placeholder={placeholder}
                    onChangeText={onChangeText} placeholderTextColor={'#000'} style={{ borderBottomWidth: 1 }} />
            </View>
        </View>
    )
}
export default Input