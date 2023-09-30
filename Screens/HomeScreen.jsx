import * as React from 'react';
import { Text, View, StyleSheet, Button,Pressable,SafeAreaView,ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Card,List,Paragraph,Title} from 'react-native-paper';

function HomeScreen({navigation}) {
    return (
        <>
      <SafeAreaView>
        <ScrollView>
            <Text style={styles.title}>International Potato Day</Text>
            <Card style={styles.card}>
                <Card.Content>
                  <Title>Welcome</Title>  
                  <Paragraph>Thank you</Paragraph>  
                </Card.Content>
                <Card.Cover 
                    style={{margintop:10,height:200}} 
                    source={{uri:"https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg"}}></Card.Cover>
            </Card>
                
                <Text style={styles.title}>Home 1!</Text>
                <FontAwesome name="tachometer" size={24} color="black" />
                <Button
                onPress={() => {
                navigation.navigate("Home2");
                }}
                title="Home2"
                ></Button>
        </ScrollView>

      </SafeAreaView>  

      </>
    );
  }

  function HomeScreen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="tachometer" size={24} color="black" />
        <Text>Home Screen2!</Text>
      </View>
    );
  }

  const Stack = createStackNavigator();

  export default function HomeStack(){
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home1" component={HomeScreen}/>
          <Stack.Screen
          name="Home2"
          component={HomeScreen2}
        ></Stack.Screen>
        </Stack.Navigator>
  
  
      )
  }

const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight:"Bold",
        textAlign:"center",
        marginTop:20,
    },

    card:{
        marginTop:20,
        marginLeft:15,
        marginRight:15,
    }
})




