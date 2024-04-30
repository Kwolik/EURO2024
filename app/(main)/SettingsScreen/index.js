import { View, ImageBackground, Text, Image, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles.js";
import Foundation from "react-native-vector-icons/Foundation";
import RowMatch from "../../../components/RowMatch/index.js";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { storage } from "../../../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, db } from "../../../firebaseConfig.js";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function MatchesScreen() {
  const [points, setPoints] = useState("");
  const [photo, setPhoto] = useState("");
  const [nameUser, setNameUser] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        //setId(user.uid);
        console.log(user.uid);
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          docSnap.data().name && setNameUser(docSnap.data().name);
          docSnap.data().photo && setPhoto(docSnap.data().photo);
          docSnap.data().points && setPoints(docSnap.data().points);
        } else {
          setTextSnackbar("Nie znaleziono dokumentu"), setVisibleSnackbar(true);
        }
      }
    });

    return unsubscribe;
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const uploadImage = async () => {
    const response = await fetch(photo);
    const blob = await response.blob();
    const filename = auth.currentUser.uid;
    const storageRef = ref(storage, filename);

    try {
      const snapshot = await uploadBytesResumable(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log(downloadURL);
      setPhoto(downloadURL);
    } catch (e) {
      console.log(e);
      Alert.alert("Error uploading photo");
    }

    changeData();
  };

  const changeData = () => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists()) {
        setDoc(doc(db, "users", auth.currentUser.uid), {
          id: auth.currentUser.uid,
          name: nameUser,
          email: auth.currentUser.email,
          photo: photo,
          points: points,
        });
      }
    });
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.profile}>
          <TouchableOpacity onPress={() => pickImage()} style={styles.button}>
            {photo ? (
              <Image style={styles.avatar} source={{ uri: photo }} />
            ) : (
              <Image
                style={styles.avatar}
                source={require("../../../assets/EURO2024logo.png")}
              />
            )}
          </TouchableOpacity>
          <View style={styles.top}>
            <View style={styles.space}></View>
            <Text style={styles.nick}>{nameUser}</Text>
            <View style={styles.viewPoints}>
              <Text style={styles.points}>{points} </Text>
              <Text style={styles.nick}>punkty</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <TouchableOpacity
              style={styles.viewBottom}
              onPress={() => uploadImage()}
            >
              <Foundation name="pencil" style={styles.icon} />
              <Text style={styles.desc}>Edytuj swoje dane</Text>
            </TouchableOpacity>
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
