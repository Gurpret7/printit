import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import ImagePick from "../components/imagePicker";
import * as Print from "expo-print";

export default class DocPicker extends React.Component {
  state = {
    doc: null,
  };
  _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
  };

  render() {
    let { doc } = this.state;

    if (doc !== null) {
      console.log("doc");
      var options = {
        uri: "doc.localUri",
      };

      return (
        <View style={styles.container}>
          {/* <Image source={{ uri: image.localUri }} style={styles.thumbnail} /> */}

          <View>
            <TouchableOpacity
              onPress={ImagePick.prototype.openImagePickerAsync}
              style={styles.buttonAnotherImage}
            >
              <Text style={styles.buttonText}>Select another Images</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.container}>
            {/* <Button title="Print" onPress={() => Print.printToFileAsync()} /> */}

            {/* <TouchableOpacity
              onPress={() => Alert.alert("a")}
              style={styles.buttonAnotherImage}
            >
              <Text style={styles.buttonText}>Print</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Button title="Select Document" onPress={this._pickDocument} />
        {/* <Button
          title="Print"
          onPress={() => Print.printAsync(options).catch()}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  buttonPrint: {
    marginTop: 10,
    width: "40%",
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
