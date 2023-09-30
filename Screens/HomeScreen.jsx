import * as React from 'react';
import { Text, View, StyleSheet, Button,Pressable} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="tachometer" size={24} color="black" />
        <Text>Home ererer2!</Text>
      </View>
    );
  }