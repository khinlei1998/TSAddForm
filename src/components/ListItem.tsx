import { View,Text } from "react-native"
import { Fruit } from "../common/data"
const ListItem: FC<Fruit> =(props)=>{
    return(
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}