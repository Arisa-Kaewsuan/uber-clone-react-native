import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-red-900 h-full">
      {/*<Text style={styles.text}> My First APP Maple ! </Text>*/}
      <View>
        <Image
          style={{
            with: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

/*const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});*/
