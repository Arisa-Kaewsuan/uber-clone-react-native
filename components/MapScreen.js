import { View, Text, Button } from "react-native";
import React from "react";

const MapScreen = ({ navigation }) => {
  return (
    <View>
      <Text>This is MapScreen </Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push("Map")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default MapScreen;
