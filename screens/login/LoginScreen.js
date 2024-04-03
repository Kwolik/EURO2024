import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./Login.styles";

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Logowanie</Text>
      <SafeAreaView>
        <View>
          <Text>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            autoComplete="email"
            keyboardType="email-address"
            textContentType="emailAddress"
          ></TextInput>
        </View>

        <View>
          <Text>Hasło</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            autoComplete="new-password"
            secureTextEntry={true}
            textContentType="newPassword"
          ></TextInput>
        </View>

        <View>
          <TouchableOpacity>
            <Text>Logowanie po google</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Zaloguj się</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
