import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
// import * as Print from "expo-print";
import { printFn, selectPrinter } from "./printer";

export default function ImagePick() {
  let [selectedImage, setselectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    setselectedImage({ localUri: pickerResult.uri });
  };

  if (selectedImage !== null) {
    const options = {
      uri: "selectedImage.localUri",
    };
    console.log("options", options);

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        {/* <View>
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.buttonAnotherImage}
          >
            <Text style={styles.buttonText}>Select another Images</Text>
          </TouchableOpacity>
        </View> */}
        <View>
          <TouchableOpacity
            onPress={() => printFn(selectedImage)}
            style={styles.buttonAnotherImage}
          >
            <Text style={styles.buttonText}>Print-2</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => selectPrinter()}
            style={styles.buttonAnotherImage}
          >
            <Text style={styles.buttonText}>Select Print</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.buttonPrint}>
          <Button title="Print" onPress={createPDF} />
        </View> */}
        {/* <Button title="Print-1" onPress={() => createPDF(selectedImage)} /> */}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Images</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    borderRadius: 10,
  },
  buttonAnotherImage: {
    backgroundColor: "blue",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  buttonPrint: {
    flex: 1,
    width: "80%",
  },
});
