import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import styles from "./Login.styles";

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require("../../assets/EURO2024logo.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Logowanie</Text>
      </View>
      <SafeAreaView>
        <View style={styles.email}>
          <View style={styles.descView}>
            <Text style={styles.emailTitle}>Email</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.emailInput}
              onChangeText={onChangeEmail}
              autoComplete="email"
              keyboardType="email-address"
              textContentType="emailAddress"
            ></TextInput>
          </View>
        </View>

        <View style={styles.email}>
          <View style={styles.descView}>
            <Text style={styles.emailTitle}>Hasło</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.emailInput}
              onChangeText={onChangePassword}
              autoComplete="new-password"
              secureTextEntry={true}
              textContentType="newPassword"
            ></TextInput>
          </View>
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
