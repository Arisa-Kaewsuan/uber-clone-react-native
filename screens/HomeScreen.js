import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import React from "react";
import NavOption from "../components/NavOption";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView className="bg-white h-full ">
      {/*<Text style={styles.text}> My First APP Maple ! </Text>*/}
      <View className="p-5">
        <Image
          source={{ uri: "https://Links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />

        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          debounce={400}
          placeholder="Search"
          enalePoweredByContainer={false}
          minLength={2}
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavOption />
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
