import { FlatList, ScrollView, StyleSheet } from "react-native";

import tweets from "../../assets/data/tweets";
import EditScreenInfo from "../../components/EditScreenInfo";

import Tweet from "../../components/Tweet/Tweet";
export default function TabOneScreen() {
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: "white" }}
      data={tweets}
      renderItem={({ item }) => <Tweet tweet={item} />}
    />
  );
}
