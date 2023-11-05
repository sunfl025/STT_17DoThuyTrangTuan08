import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const API_Screen_01 = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Image source={require("../assets/Image 95.png")} style={{width:271,height:271}} resizeMode='contain'></Image>
      <Text style={{fontFamily:"Epilogue",color:"#8353E2",fontSize:24,fontWeight:700,marginTop:20}}>MANAGE YOUR</Text>
      <Text style={{fontFamily:"Epilogue",color:"#8353E2",fontSize:24,fontWeight:700}}>TASK</Text>
      
      <View style={{marginTop:50}}>
        <TextInput style={{width:334,height:43,borderWidth:1,borderRadius:12,paddingLeft:50,marginTop:50,marginBottom:150,borderColor:"#BCC1CA"}} placeholder='Enter your name' placeholderTextColor={"#BCC1CA"}></TextInput>
        <Image source={require("../assets/Frame.png")} style={{width:25,height:25,position:"absolute",left:20,top:59}} resizeMode='contain'></Image>
      </View>

      <TouchableOpacity style={{width:190,height:44,borderRadius:12,backgroundColor:"#00BDD6",justifyContent:"center",alignItems:"center",position:"absolute",bottom:50}}
      onPress={()=> {navigation.navigate('API_Screen_02')}}>
          <Text style={{fontFamily:"Inter",fontSize:16,fontWeight:400,color:"#FFF"}}>GET STARTED</Text>

      </TouchableOpacity>
    </View>
  )
}

export default API_Screen_01