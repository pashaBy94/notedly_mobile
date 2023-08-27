import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';
import { NoteFeed } from '../components/NoteFeed';

const st = StyleSheet.create({
  container:{ flex: 1, justifyContent: 'center', alignItems: 'center'},
  h1:{color: '#0077cc', fontSize: 48, alignItems: 'center'},
  p:{ marginTop: 24, marginBottom: 24, fontSize: 18}
});

const Home = () => {
  return (
    <View style={st.container}>
      <Text style={st.h1}>Home</Text>
      <Text style={st.p}>This page wonts to have a good Friend!!!</Text>
      <Image source={require('../../assets/images/hello-world.jpg')}></Image>
      <NoteFeed />
    </View>
  );
};

export default Home;
