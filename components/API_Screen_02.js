import { View, Text,FlatList, ActivityIndicator, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'

const API_Screen_02 = ({navigation}) => {
  // var data,setData= useState([]);
  // const [isLoading,setIsLoading] = useState(true);
  // useEffect(()=> {
  //   fetch('https://6544c50f5a0b4b04436cf1b9.mockapi.io/api/v1/users')
  //   .then(response => response.json())
  //   .then(json =>
  //         setData(json),
  //         console.log(data)
  //       );
  // },[])
    // const getListPro = async ()=> {
    //   let url = 'https://6544c50f5a0b4b04436cf1b9.mockapi.io/api/v1/users';
    //   try {
    //     const response = await fetch(url);//load dl
    //     const json = await response.json();
    //     setData(json);
    //     console.log(data)
        
    //   } catch (error) {
    //       console.error(error);
        
    //   } finally {
    //     //ket thuc qua trinh load du lieu,ke ca xay ra loi
    //     setIsLoading(false);
    //   }
    // }
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [task,setTask] = useState([]);
  const getMovies = async () => {
    try {
      const response = await fetch('https://6544c50f5a0b4b04436cf1b9.mockapi.io/api/v1/users');
      const json = await response.json();
      setData(json);
      console.log(json.tasks);
     
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getTasks = async () => {
    try {
      const response = await fetch('https://6544c50f5a0b4b04436cf1b9.mockapi.io/api/v1/users/1/tasks');
      const json = await response.json();
      setTask(json);
    
     
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    try {
      const response = await fetch('https://6544c50f5a0b4b04436cf1b9.mockapi.io/api/v1/users/1/tasks/' + id,{
        method:"DELETE"
      });
      getTasks();
    
     
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  

  // const update = async () => {
  //   try {
  //     const response = await fetch('https://6544c50f5a0b4b04436cf1b9.mockapi.io/api/v1/users/1/tasks',{
  //       method:"POST",
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         "name": text
        
  //       }),
       
  //     });
      
     
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  useEffect(() => {
    getMovies();
    getTasks();
  }, []);
  return (
    <View style={{flex: 1,alignItems:"center"}}>
 
      
      {isLoading ? (
        <ActivityIndicator />
      ) : (
       
         
           data.filter((item)=> {return item.id == 1}).map((item)=> {
             return(
               <View style={{flex:1}}>
                        <Image source={require('../assets/Icon Button 11.png')}  style={{width:50,height:50,borderRadius:25}}></Image>
                        <View style={{flexDirection:"row",position:"absolute",top:10,right:5}}>
                        
                        
                        {/* <Image source={require("../assets/Frame (2).png")} style={{width:25,height:25}}></Image> */}
                        <Image source={item.avatar} style={{width:50,height:50,borderRadius:25}}></Image>
                         <View style={{marginLeft:10,alignItems:"center"}}>
                            <Text style={{fontFamily:"Inter",fontSize:16,fontWeight:700}}>Hi {item.name}</Text>
                            <Text style={{fontFamily:"Epilogue",fontWeight:700,fontSize:14,color:"#00000084"}}>Have agrate day head</Text>
                         </View>
                        </View>
                    <TextInput style={{width:334,height:200,borderRadius:4,borderWidth:1,marginTop:40,paddingLeft:50,paddingBottom:15,paddingTop:8}} placeholder='Search'>
                   
                     </TextInput>
                     <Image source={require('../assets/Frame (3).png')} style={{width:24,height:24,position:"absolute",left:10,top:95}} resizeMode='contain' ></Image>
                    
                         
                    <View style={{marginTop:50}}>{
                         task.map((item_1)=> {
                           return(
                             <ScrollView>
                                <View key={item_1.id} style={{alignItems:"center",justifyContent:"center",width:335,height:48,borderRadius:24,backgroundColor:"#DEE1E678",margin:10}}>
                                   <TouchableOpacity style={{position:"absolute",left:20}} onPress={()=> remove(item_1.id)}>
                                         <Image source={require('../assets/Frame (4).png')} style={{width:24,height:24}} resizeMode='contain' ></Image>
                                   </TouchableOpacity>
                                 <Text style={{fontFamily:"Inter",fontSize:16,fontWeight:700}}>{item_1.name}</Text>
                                    <TouchableOpacity style={{position:"absolute",right:20}} onPress={()=> {navigation.navigate('API_Screen_update',{data:item,task:item_1})}}>
                                         <Image source={require('../assets/Frame (1).png')} style={{width:24,height:24}} resizeMode='contain' ></Image>
                                    </TouchableOpacity>
                                  
                                 
                             </View>
                             </ScrollView>
                           )
                        })
                      }</View>
                      
                    <TouchableOpacity style={{alignItems:'center',marginTop:20}}
                    onPress={()=> {navigation.navigate('API_Screen_03',item)}}>
                         <Image source={require('../assets/Group 13.png')} style={{width:69,height:69}} resizeMode='contain'></Image>
                                  
                    </TouchableOpacity>
               </View>
             )
           })
           
          //  console.log(data)
         
         
         
        )
     }
    </View>
  )
}

export default API_Screen_02