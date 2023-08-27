import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import NoteScreen from '../screens/NoteScreen';

const s = StyleSheet.create({
  note: {
    height: 100,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
export function Note({ note }) {
  const nav = useNavigation();
  return (
    <Pressable
      onPress={(ev) => {
        nav.navigate('NoteScreen', {
          screen: 'NoteScreen',
          params: { id: note.id },
        });
      }}
    >
      <View style={s.note}>
        <Text>{note.content}</Text>
      </View>
    </Pressable>
  );
}
