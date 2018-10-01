import React, {Component} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, TextInput, Button, Keyboard,ImageBackground, StatusBar,Alert} from 'react-native';


export default class Calculate extends Component {

    constructor (props) {
        super(props);
        this.state = {
            weight: "",
            food_cal: "",
            sport_cal: "",
            loss: "",
            message: "",
            age: "",
        }
    }

    calculate_loss= ()=> {
        if(this.state.food_cal===""){
            Alert.alert(
                'Empty Field',
                "You should enter the calorie of the food.",
                [
                  {text: 'Okay', style: 'cancel'},
                ],
                { cancelable: false });
        }
        let loss= (this.state.food_cal)/7700;
        this.setState({loss : loss,
            message: "If you eat this "+ this.state.food_cal + " calories food, you will gain "+ loss*1000 + " grams."});
        Keyboard.dismiss();

    };
    calculate_basal= ()=> {
        if(this.state.weight===""){
            Alert.alert(
                'Empty Field',
                "You should enter your weight.",
                [
                  {text: 'Okay', style: 'cancel'},
                ],
                { cancelable: false });
        }
        if(this.state.height===""){
            Alert.alert(
                'Empty Field',
                "You should enter your height.",
                [
                  {text: 'Okay', style: 'cancel'},
                ],
                { cancelable: false });
        }
        if(this.state.age===""){
            Alert.alert(
                'Empty Field',
                "You should enter your age.",
                [
                  {text: 'Okay', style: 'cancel'},
                ],
                { cancelable: false });
        }
        let basal = 655 + (9.6* this.state.weight) + (1.8 * this.state.height ) - (4.7 * this.state.age);
        this.setState({basal : basal,
            message: "Your basal methobolism needs "+ basal + " calories per day."});
        Keyboard.dismiss();
    };




  render() {
    return (
        <ImageBackground source={require("./back.jpg")} style={{width: '100%', height: '100%'}}>
        <StatusBar hidden />

      <KeyboardAvoidingView behavior="position" style={styles.container}>

        <View style={{alignItems: 'center',marginTop: 100,}}>

          <TextInput
            style={[styles.input, {backgroundColor: '#48b9ad'}]}
            keyboardType='numeric'
            placeholder="Your weight"
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={this.props.autoCorrect}
            autoCapitalize={this.props.autoCapitalize}
            returnKeyType={this.props.returnKeyType}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onChangeText={(weight) => this.setState({weight})}
          />
            <TextInput
            style={[styles.input, {backgroundColor: '#98b96e'}]}
            keyboardType='numeric'
            placeholder="Your height"
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={this.props.autoCorrect}
            autoCapitalize={this.props.autoCapitalize}
            returnKeyType={this.props.returnKeyType}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onChangeText={(height) => this.setState({height})}
          />
            <TextInput
            style={[styles.input, {backgroundColor: '#cab435'}]}
            keyboardType='numeric'
            placeholder="Your age"
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={this.props.autoCorrect}
            autoCapitalize={this.props.autoCapitalize}
            returnKeyType={this.props.returnKeyType}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onChangeText={(age) => this.setState({age})}
          />
         <Button
          onPress={this.calculate_basal}
          title="Calculate basal methabolism."
          color="#5642CA"
        />
           <TextInput
            style={[styles.input,{marginTop: 50, backgroundColor: '#ca2640'}]}
            keyboardType='numeric'
            placeholder="Food calori"
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={this.props.autoCorrect}
            autoCapitalize={this.props.autoCapitalize}
            returnKeyType={this.props.returnKeyType}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
            onChangeText={(food_cal) => this.setState({food_cal})}
          />

        <Button
          onPress={this.calculate_loss}
          title="Calculate weight of the food"
          color="#44AAB9"
        />
            <Text style={{fontSize: 20, color: '#fdffee', margin: 40, fontWeight: 'bold'}}>{this.state.message}</Text>
      </View>

      </KeyboardAvoidingView>
            </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
    color: '#04090a',
    marginBottom: 20,
  },

});
