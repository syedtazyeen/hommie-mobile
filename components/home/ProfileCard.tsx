import React from "react";
import { Pressable, View, Image, Platform } from "react-native";
import { Colors } from "@/constants/Colors";
import Animated from "react-native-reanimated";
import { TextRegular } from "../StyledText";

const ProfileCard = (props: FeedUser) => {
  const matchColor =
    props.match > 50
      ? Colors["app"].green
      : props.match < 25
      ? Colors["app"].orange
      : Colors["app"].yellow;

  return (
    <View
      style={{
        flex: 1,
        aspectRatio: 4 / 3,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          borderWidth: 0.5,
          borderColor: Colors["light"].borderLight,
          borderRadius: 24,
          padding: 8,
          overflow: "hidden",
          backgroundColor: Colors["light"].background,
          shadowColor: Colors["light"].shadow,
          ...Platform.select({
            ios: {
              shadowOffset: { width: 2, height: 4 },
              shadowOpacity: 1,
              shadowRadius: 5,
            },
            android: {
              elevation: 3,
            },
          }),
        }}
      >
        <Pressable
          style={{
            flex: 1,
            padding: 2,
            gap: 4,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 99,
              }}
            >
              <Image
                source={require("@/assets/images/user.png")}
                resizeMode="stretch"
                style={{ width: 32, height: 32 }}
              />
            </View>
            <View>
              <TextRegular>{props.name}</TextRegular>
              {props.distance && (
                <TextRegular
                  style={{ opacity: 0.5, fontSize: 11, fontStyle: "italic" }}
                >
                  {props.distance} {props?.distance > 1 ? "Kms" : "km"} away
                </TextRegular>
              )}
            </View>
          </View>
          <View style={{ flex: 1, paddingTop: 4 }}></View>
          <View style={{ gap: 4 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <TextRegular style={{ fontSize: 12, opacity: 0.5 }}>
                Your match
              </TextRegular>
              <TextRegular
                style={{ fontSize: 14, fontWeight: "600", color: matchColor }}
              >
                {props.match}%
              </TextRegular>
            </View>
            <View
              style={{
                width: "100%",
                height: 8,
                borderRadius: 16,
                backgroundColor: Colors["light"].borderLight,
                overflow: "hidden",
              }}
            >
              <View
                style={{
                  backgroundColor: matchColor,
                  borderRadius: 16,
                  height: 8,
                  width: `${props.match}%`,
                }}
              />
            </View>
          </View>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default ProfileCard;
