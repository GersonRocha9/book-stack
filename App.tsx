import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Home, Login, SignUp } from "./src/screens";

const Tab = createNativeStackNavigator();

export default function App() {
  // essa variável isLogged simula o estado de autenticação do usuário
  // true = usuário está logado = <Home /> // false = usuário não está logado = <Login /> e <SignUp />
  const isLogged = false;

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          {isLogged ? (
            <Tab.Screen name="Home" component={Home} />
          ) : (
            <>
              <Tab.Screen name="Login" component={Login} />
              <Tab.Screen name="SignUp" component={SignUp} />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}
