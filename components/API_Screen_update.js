import { View, Text,FlatList, ActivityIndicator, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'

const API_Screen_update = ({navigation,route}) => {




  const data = [route.params?.data];

  console.log("data",data)
//   console.log("task",route.params?.task.id)
//   const [task,setTask] = useState(route.params?.task)
  const [text,setText] = useState(route.params?.task.name);

  // const getData = async () => {
  //   try {
  //     const response = await fetch('https://6544c50f5a0b4b04436cf1b9.mockapi.io/api/v1/users');
  //     const json = await response.json();
  //     setData(json);
    
     
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const update = async (id) => {
    try {
      const response = await fetch('https://6544c50f5a0b4b04436cf1b9.mockapi.io/api/v1/users/1/tasks/' + id,{
        method:"PUT",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "name": text
        
        }),
       
      });
      
     
    } catch (error) {
      console.error(error);
    } 
  };

  // useEffect(() => {
  //   getData();
   
  // }, []);
  return (
    <View style={{flex: 1, padding: 24}}>
 
      
      {

      data.map((item)=> {
       {console.log(item.name)}
    return(
      <View style={{flex:1}}>
                
                  <View key={item.id} style={{flexDirection:"row",position:"absolute",top:10,left:5}}>
                  
                  
                  
                  <Image source={item.avatar} style={{width:50,height:50,borderRadius:25}}></Image>
                  <View style={{marginLeft:10,alignItems:"center"}}>
                      <Text style={{fontFamily:"Inter",fontSize:16,fontWeight:700}}>Hi {item.name}</Text>
                      <Text style={{fontFamily:"Epilogue",fontWeight:700,fontSize:14,color:"#00000084"}}>Have agrate day head</Text>
                  </View>
                  <Image source={require('../assets/Icon Button 11.png')}  style={{width:50,height:50,borderRadius:25,marginLeft:110}}></Image>
                  </View>
                 <View style={{alignItems:"center"}}>
                      <Text style={{fontFamily:"Epilogue",fontSize:32,fontWeight:700,marginTop:100}}>UPDATE YOUR JOB</Text>
                      <View style={{width:334,height:44,borderRadius:4,borderWidth:1,marginTop:100,justifyContent:"center"}}>
                <Image source={require('../assets/Frame (5).png')}  style={{width:24,height:24,position:"absolute",left:10}}></Image>
                  <TextInput style={{width:334,height:44,paddingLeft:50}}  value={text} onChangeText={
                    (text)=> setText(text)}>
            
                  </TextInput>
              </View>
              <TouchableOpacity style={{width:190,height:44,borderRadius:12,backgroundColor:"#00BDD6",justifyContent:"center",alignItems:"center",marginTop:50}}
              onPress={()=> {update(route.params?.task.id),navigation.navigate('API_Screen_02')}}>
                  <Text style={{fontFamily:"Inter",fontSize:16,fontWeight:400,color:"#FFF"}}>FINISH</Text>

              </TouchableOpacity>
              <Image source={require("../assets/Image 95.png")} style={{width:190,height:170,marginTop:60}} resizeMode='contain'></Image>
            </View>
              
              
        </View>
    )
  })
      }
      </View>
  )
}

export default API_Screen_update