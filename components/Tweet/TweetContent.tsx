import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type tweetContentProps = {
  tweetContent: string;
  media?: string;
};

export default function TweetContent({
  tweetContent,
  media,
}: tweetContentProps) {
  const [isLongContent, setIsLongContent] = useState(false);

  const toggleContent = () => {
    setIsLongContent((isLongContent): boolean => !isLongContent);
  };
  return (
    <React.Fragment>
      <View>
        {tweetContent.length > 100 ? (
          <React.Fragment>
            {!isLongContent ? (
              <View>
                <Text style={styles.content}>
                  {tweetContent.slice(0, 100)}...
                </Text>
                <TouchableOpacity onPress={toggleContent}>
                  <Text style={{ color: "#1DA1F2" }}>show all</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text style={styles.content}>{tweetContent}</Text>

                <TouchableOpacity onPress={toggleContent}>
                  <Text style={{ color: "#1DA1F2" }}>show less</Text>
                </TouchableOpacity>
              </View>
            )}
          </React.Fragment>
        ) : (
          <Text style={styles.content}>{tweetContent}</Text>
        )}
      </View>
      <React.Fragment>
        {media && (
          <View style={styles.media}>
            <Image
              style={{ width: "100%", height: "100%", resizeMode: "cover" }}
              source={{ uri: media }}
            />
          </View>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 2,
    lineHeight: 15,
  },
  media: {
    width: "100%",
    height: 200,
    marginVertical: 10,
  },
});
