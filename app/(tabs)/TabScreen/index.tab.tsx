import { Link } from "expo-router";
import { Image, Pressable, View, useColorScheme } from "react-native";
import { FeatureIcon } from "../../../assets/icons/Feature.icon";

export const IndexScreenHeaderLeft = () => {
  return (
    <View style={{ width: 32, height: 32, marginLeft: 15 }}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 50,
          resizeMode: "cover",
        }}
        source={{
          uri: "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
        }}
      />
    </View>
  );
};

export const IndexScreenHeaderRight = () => {
  const colorScheme = useColorScheme();
  return (
    <Link href="/modal" asChild>
      <Pressable>
        {({ pressed }) => (
          <View style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}>
            <FeatureIcon size={22} color="#4C9EEB" />
          </View>
        )}
      </Pressable>
    </Link>
  );
};
