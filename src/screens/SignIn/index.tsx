import React from "react";
import { styles } from "./styles";
import { Image, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";

const SignIn: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = React.useState("");
  const [emailValid, setEmailValid] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [passwordValid, setPasswordValid] = React.useState(true);

  const checkEmail = () => {
    let valid: boolean;
    var emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    valid = emailRegex.test(email);
    setEmailValid(valid);

    return valid;
  };

  const checkPassword = () => {
    let valid: boolean;
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.*\w).{8,}$/;

    valid = passwordRegex.test(password);
    setPasswordValid(valid);

    return valid;
  };

  const onLogin = () => {
    if (checkEmail() && checkPassword()) {
      // Chama e passa input pro BACK, espera a resposta e loga
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/book-stack-logo.png")}
        style={styles.logo}
      />

      {/* INPUT DE EMAIL */}
      <View style={styles.ctInput}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(input) => setEmail(input)}
          placeholder="Entre com seu email"
          keyboardType="email-address"
          style={styles.inputField}
        />
        <Text
          style={[
            styles.inputInvalid,
            { display: emailValid ? "none" : "flex" },
          ]}>
          Formato Invalido
        </Text>
      </View>

      {/* INPUT DE SENHA */}
      <View style={styles.ctInput}>
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={(input) => setPassword(input)}
          placeholder="Entre com sua senha"
          keyboardType="default"
          secureTextEntry={true}
          style={styles.inputField}
        />
        <Text
          style={[
            styles.inputInvalid,
            { display: passwordValid ? "none" : "flex" },
          ]}>
          Formato Invalido
        </Text>
      </View>

      <Button
        onPress={onLogin}
        style={styles.buttonStyle}
        labelStyle={styles.buttonLabel}>
        Logar
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        style={styles.borderlessButtonStyle}
        labelStyle={styles.borderlessButtonLabel}>
        Cadastre-se
      </Button>
    </View>
  );
};

export default SignIn;
