import { EvilIcons } from "@expo/vector-icons";
import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CountProp = {
  numberOfComments: number;
  numberOfLikes: number;
  numberOfRetweets: number;
};

const TweetImpression = ({
  numberOfComments,
  numberOfLikes,
  numberOfRetweets,
}: CountProp) => {
  return (
    <View style={styles.impressions}>
      <Impression name="comment" count={numberOfComments} />
      <Impression name="retweet" />
      <Impression name="heart" count={numberOfLikes} />
      <Impression name="chart" count={numberOfRetweets} />
      <Impression name="share-apple" />
    </View>
  );
};

type ImpressionProp = {
  name: any;
  count?: number;
};

const Impression = ({ name, count }: ImpressionProp) => {
  return (
    <View style={{ ...styles.impressions, marginTop: 0 }}>
      <TouchableOpacity>
        <EvilIcons name={name} size={24} color="gray" />
      </TouchableOpacity>
      <Text style={{ color: "gray" }}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  impressions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
});
export default TweetImpression;
