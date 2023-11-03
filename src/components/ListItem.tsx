import { View,Text } from "react-native"
import { Fruit } from "../common/data"
const Item: FC<Fruit> =(props)=>{
    return(
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}
