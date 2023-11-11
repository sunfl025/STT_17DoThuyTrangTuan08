import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import API_Screen_01 from "./components/API_Screen_01";
import API_Screen_02 from "./components/API_Screen_02";
import API_Screen_03 from "./components/API_Screen_03";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import API_Screen_update from "./components/API_Screen_update";
const Stack = createNativeStackNavigator();
export default function App() {
  
  return  (
    <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="API_Screen_02">
                  <Stack.Screen name="API_Screen_01" component={API_Screen_01}></Stack.Screen>
                  <Stack.Screen name="API_Screen_02" component={API_Screen_02}></Stack.Screen>
                  <Stack.Screen name="API_Screen_03" component={API_Screen_03}></Stack.Screen>
                  <Stack.Screen name="API_Screen_update" component={API_Screen_update}></Stack.Screen>
            </Stack.Navigator>
    </NavigationContainer>
  )
    
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
