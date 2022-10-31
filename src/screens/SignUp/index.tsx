import React from "react";
import { styles } from "./styles";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";
import { useMutation } from "@tanstack/react-query";
import { postSignUp } from "../../hooks/post";

const SignUp: React.FC = ({ navigation }: any) => {
  const [email, setEmail] = React.useState("");
  const [emailValid, setEmailValid] = React.useState(true);
  const [confirmEmail, setConfirmEmail] = React.useState("");
  const [confirmEmailValid, setConfirmEmailValid] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [passwordValid, setPasswordValid] = React.useState(true);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = React.useState(true);
  const [formData, setFormData] = React.useState([{ email: "", password: "" }]);

  const checkEmail = () => {
    let valid: boolean;
    var emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    valid = emailRegex.test(email);
    setEmailValid(valid);

    return valid;
  };

  const checkConfirmEmail = () => {
    let valid: boolean;

    valid = email == confirmEmail ? true : false;
    setConfirmEmailValid(valid);

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

  const checkConfirmPassword = () => {
    let valid: boolean;

    valid = password == confirmPassword ? true : false;
    setConfirmPasswordValid(valid);

    return valid;
  };

  const completeCheck = () => {
    let valid: boolean = true;

    if (!checkEmail()) valid = false;
    if (!checkConfirmEmail()) valid = false;
    if (!checkPassword()) valid = false;
    if (!checkConfirmPassword()) valid = false;

    return valid;
  };

  React.useEffect(() => {
    setFormData([{ email: email, password: password }]);
  }, [email, password]);

  const { mutate } = useMutation(["signUp"], postSignUp);

  const onCreateAccount = () => {
    if (completeCheck()) {
      mutate(formData);
      navigation.navigate("SignIn");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se abaixo</Text>

      {/* INPUT DE EMAIL */}
      <View style={styles.ctInput}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(input) => setEmail(input)}
          placeholder="Insira um email"
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

      {/* INPUT DE CONFIRMACAO DE EMAIL */}
      <View style={styles.ctInput}>
        <Text style={styles.inputLabel}>Confirme email</Text>
        <TextInput
          value={confirmEmail}
          onChangeText={(input) => setConfirmEmail(input)}
          placeholder="Confirme o email"
          keyboardType="email-address"
          style={styles.inputField}
        />
        <Text
          style={[
            styles.inputInvalid,
            { display: confirmEmailValid ? "none" : "flex" },
          ]}>
          Os emails não estão iguais
        </Text>
      </View>

      {/* INPUT DE SENHA */}
      <View style={styles.ctInput}>
        <Text style={styles.inputLabel}>Senha</Text>
        <TextInput
          value={password}
          onChangeText={(input) => setPassword(input)}
          placeholder="Insira uma senha"
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

      {/* INPUT DE CONFIRMACAO DE SENHA */}
      <View style={styles.ctInput}>
        <Text style={styles.inputLabel}>Confirme a senha</Text>
        <TextInput
          value={confirmPassword}
          onChangeText={(input) => setConfirmPassword(input)}
          placeholder="Confirme a senha"
          keyboardType="default"
          secureTextEntry={true}
          style={styles.inputField}
        />
        <Text
          style={[
            styles.inputInvalid,
            { display: confirmPasswordValid ? "none" : "flex" },
          ]}>
          As senhas não estão iguais
        </Text>
      </View>

      <Button
        onPress={onCreateAccount}
        style={styles.buttonStyle}
        labelStyle={styles.buttonLabel}>
        Criar Conta
      </Button>

      <Button
        onPress={() => {
          navigation.navigate("SignIn");
        }}
        style={styles.borderlessButtonStyle}
        labelStyle={styles.borderlessButtonLabel}>
        Logar
      </Button>
    </View>
  );
};

export default SignUp;
