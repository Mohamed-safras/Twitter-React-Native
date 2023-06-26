import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import checkmark from "../../assets/images/checkmark.png";

import TweetContent from "./TweetContent";
import TweetImpression from "./TweetImpression";
type UserType = {
  image?: String;
  name: String;
  username: String;
  id: String;
  isVerified: boolean;
};

type TweetType = {
  content: string;
  user: UserType;
  numberOfComments: number;
  numberOfLikes: number;
  numberOfRetweets: number;
  image?: string;
};

type TweetProps = {
  tweet: TweetType;
};

const Tweet = ({ tweet }: TweetProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: tweet.user.image?.toLowerCase(),
        }}
        style={{
          height: 50,
          width: 50,
          borderRadius: 50,
          resizeMode: "cover",
        }}
      />
      <View style={styles.mainContainer}>
        <View style={styles.mainContainerHeader}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={styles.userName}>{tweet.user.name}</Text>
            {tweet.user.isVerified && (
              <Image
                source={checkmark}
                style={{
                  width: 15,
                  height: 15,
                  resizeMode: "cover",
                  marginLeft: 5,
                }}
              />
            )}

            <Text style={{ color: "gray", marginLeft: 5 }}>
              @{tweet.user.username}
            </Text>
            <Text style={{ color: "gray" }}>·</Text>
            <Text style={{ color: "gray" }}>2h</Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="ellipsis1" size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <TweetContent tweetContent={tweet.content} media={tweet?.image} />

        <TweetImpression
          numberOfComments={tweet.numberOfComments}
          numberOfLikes={tweet.numberOfLikes}
          numberOfRetweets={tweet.numberOfRetweets}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgray",
  },
  mainContainer: {
    marginLeft: 10,
    flex: 1,
  },
  mainContainerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontWeight: "600",
    // marginRight: 5,
  },
});

export default Tweet;
