import { View, ImageBackground, Text, Image, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles.js";
import Foundation from "react-native-vector-icons/Foundation";
import RowMatch from "../../../components/RowMatch/index.js";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { storage } from "../../../firebaseConfig.js";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth } from "../../../firebaseConfig.js";

export default function MatchesScreen() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      uploadImage();
    }
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(image);
    const blob = await response.blob();
    const filename = auth.currentUser.uid; 
    const storageRef = ref(storage, filename);

    //await put(storageRef, blob); nadpisywanie obrazka

    try {
      await uploadBytes(storageRef, blob)
      setUploading(false);
      const downloadURL = await getDownloadURL(storageRef);
      console.log(downloadURL)
      setImage(downloadURL);
    } catch (e) {
      console.log(e);
      setUploading(false);
      Alert.alert("Error uploading photo");
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => pickImage()} style={styles.button}>
            {image ? (
              <Image style={styles.avatar} source={{ uri: image }} />
            ) : (
              <Image
                style={styles.avatar}
                source={require("../../../assets/EURO2024logo.png")}
              />
            )}
          </TouchableOpacity>
          <View style={styles.top}>
            <View style={styles.space}></View>
            <Text style={styles.nick}>elPulokogftyd</Text>
            <View style={styles.viewPoints}>
              <Text style={styles.points}>42 </Text>
              <Text style={styles.nick}>punkty</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.viewBottom}>
              <Foundation name="pencil" style={styles.icon} />
              <Text style={styles.desc}>Edytuj swoje dane</Text>
            </View>
          </View>
          <Text style={styles.position}>#2</Text>
        </View>

        <View style={styles.profile}>
          <View style={styles.top}>
            <Text style={styles.info1}>Mistrz</Text>
            <Text style={styles.type1}>Anglia</Text>
            <Foundation name="pencil" style={styles.icon1} />
          </View>
          <View style={styles.bottomKing}>
            <Text style={styles.info2}>Król strzelców</Text>
            <Text style={styles.type2}>Robert Lewandowski</Text>
            <Foundation name="pencil" style={styles.icon2} />
          </View>
        </View>

        <View style={styles.list}>
          <RowMatch />
          <RowMatch />
          <RowMatch />
        </View>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}
