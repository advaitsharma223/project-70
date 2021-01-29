import React from 'react';
import { Text, View, Header, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class WriteStoryScreen extends  React.Component{
    render() {
        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TextInput style = {styles.inputBox} 
                    placeholder = "Title" 
                />
                <TextInput style = {styles.inputBox} 
                    placeholder = "Author" 
                />
                <TextInput multiline = {true} style = {styles.inputBox} 
                    placeholder = "Write story" 
                />

                <TouchableOpacity style = {styles.submitButton} 
                    onPress = {async () => {
                
                    }} >
                        <Text style = {styles.submitButtonText}>Submit</Text>                        
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputView:{
      flexDirection: 'row',
      margin: 20
    },
    inputBox:{
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20
    },
    submitButton:{
        backgroundColor: 'green',
        width: 100,
        height:50
      },
      submitButtonText:{
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight:"bold",
        color: 'white'
      }

  });
  