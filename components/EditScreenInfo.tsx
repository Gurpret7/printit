import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";
import ImagePick from "../components/imagePicker";

export default function EditScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <ImagePick />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
});
