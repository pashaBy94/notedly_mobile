import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, WebView } from 'react-native';

const s = StyleSheet.create({
  note: {
    height: 100,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
});
const NoteScreen = () => {
    const nav = useNavigation();
    console.log(window);
  return (
    <View style={s.note}>
            <WebView
        source={{ uri: 'https://example.com' }}
        onNavigationStateChange={handleNavigationStateChange}
      />
    <Text>7utrt</Text>
  </View>
  );
};

export default NoteScreen;
