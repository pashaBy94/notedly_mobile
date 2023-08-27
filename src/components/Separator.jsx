import { StyleSheet, View } from 'react-native';
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width;
const st = StyleSheet.create({
  sep: {
    alignSelf: 'stretch',
    height: 2,
    width: width,
    backgroundColor: '#E9E9E9',
  },
});
export function Separator() {
  return <View style={st.sep} />;
}
