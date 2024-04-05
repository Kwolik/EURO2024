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

export default function RegistrationScreen() {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [passwordRepeat, onChangePasswordRepeat] = React.useState("");

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
          <Text style={styles.title}>Rejestracja</Text>
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

          <View style={styles.email}>
            <View style={styles.descView}>
              <Text style={styles.emailTitle}>Powtórz hasło</Text>
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.emailInput}
                onChangeText={onChangePasswordRepeat}
                autoComplete="new-password"
                secureTextEntry={true}
                textContentType="newPassword"
              ></TextInput>
            </View>
          </View>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonLogged}>
              <Text style={styles.buttonTitle}>Utwórz konto</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <TouchableOpacity
          style={styles.routeRegistiration}
          onPress={() => router.replace("/LoginScreen")}
        >
          <View style={styles.descViewFirst}>
            <Text style={styles.descTextFirst}>Jesteś już zarejestrowany?</Text>
          </View>
          <View style={styles.descViewTwo}>
            <Text style={styles.descTextTwo}>
              Kliknij i przejdź do logowania
            </Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
