import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import styles from "./styles.js";
import { router } from "expo-router";

export default function LoginScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.top}>
          <Image
            source={require("../../../assets/EURO2024logo.png")}
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

          <View style={styles.buttons}>
            <TouchableOpacity>
              <Text>Logowanie po google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLogged}>
              <Text style={styles.buttonTitle}>Zaloguj się</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        <View style={styles.fingerpintImage}>
          <Image
            source={require("../../../assets/fingerpirnt.png")}
            style={styles.fingerprint}
          />
        </View>
        <TouchableOpacity
          style={styles.routeRegistiration}
          onPress={() => router.replace("/RegistrationScreen")}
        >
          <View style={styles.descViewFirst}>
            <Text style={styles.descTextFirst}>
              Nie jesteś jeszcze zarejestrowany?
            </Text>
          </View>
          <View style={styles.descViewTwo}>
            <Text style={styles.descTextTwo}>
              Kliknij i przejdź do rejestracji
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
