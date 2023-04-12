import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import React from "react";
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://Links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://Links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOption = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      className="pl-5  "
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className=" pl-6 pt-2 bg-gray-200 m-2 max-h-60"
          onPress={() => navigation.navigate(item.screen)}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120, resizeMode: "contain" }}
            />
            <Text className="text-lg m-2 font-semibold ">{item.title}</Text>
            <View className="bg-black w-10 h-10 p-2 rounded-full">
              <Icon name="arrowright" color="white" type="antdesign" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOption;
