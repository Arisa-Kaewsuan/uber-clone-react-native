import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOption from "../components/NavOption";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white h-full ">
      {/*<Text style={styles.text}> My First APP Maple ! </Text>*/}
      <View className="p-5">
        <Image
          source={{ uri: "https://Links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
      </View>

      <NavOption />
    </SafeAreaView>
  );
};

export default HomeScreen;

/*const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});*/
