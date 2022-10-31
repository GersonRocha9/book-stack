import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Home, NewAuthor, NewBook, SignIn, SignUp } from "./src/screens";

const Tab = createNativeStackNavigator();

export default function App() {
  const isLogged = true;

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          {isLogged ? (
            <>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="NewBook" component={NewBook} />
              <Tab.Screen name="NewAuthor" component={NewAuthor} />
            </>
          ) : (
            <>
              <Tab.Screen name="SignIn" component={SignIn} />
              <Tab.Screen name="SignUp" component={SignUp} />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}
