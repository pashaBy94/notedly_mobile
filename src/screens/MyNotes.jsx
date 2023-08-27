import React from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';

const st = StyleSheet.create({
  container:{ flex: 1, justifyContent: 'center', alignItems: 'center'},
  h1:{color: '#0077cc', fontSize: 48, alignItems: 'center'},
  p:{ marginTop: 24, marginBottom: 24, fontSize: 18}
});

const MyNotes = () => {
  return (
    <View style={st.container}>
      <Text style={st.h1}>my notes</Text>
      <Text style={st.p}>This page wonts to have a good Friend!!!</Text>
      <Image source={require('../../assets/images/hello-world.jpg')}></Image>
    </View>
  );
};

export default MyNotes;
