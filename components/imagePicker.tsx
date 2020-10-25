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
import * as Print from "expo-print";

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

    let createPDF = async (si: { uri: any } | null) => {
      let filePath = await Print.printToFileAsync({
        html: "<h1>PDF TEST</h1>",
        width: 612,
        height: 792,
      });

      console.log("PDF Generated", si);
    };

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
            onPress={() => createPDF(selectedImage)}
            style={styles.buttonAnotherImage}
          >
            <Text style={styles.buttonText}>Print-2</Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.buttonPrint}>
          <Button title="Print" onPress={createPDF} />
        </View> */}

        <Button title="Print-1" onPress={() => createPDF(selectedImage)} />
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 30,
    borderRadius: 10,
  },
  buttonAnotherImage: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  buttonPrint: {
    marginTop: 30,
    flex: 1,
    width: "80%",
  },
});
