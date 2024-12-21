import React, { useState } from "react";
import { TouchableOpacity, Animated, Image, ScrollView } from "react-native";
import { TextBold, TextMedium, TextRegular } from "../StyledText";
import { Colors } from "@/constants/Colors";
import SetOutline from "../icons/SetOutline";
import StarOutline from "../icons/StarOutline";
import { View } from "../Themed";

export default function HomeView() {
  // State to track the current card index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swipeRight, setSwipeRight] = useState(false);
  // State to control the swipe animation for each card
  const [swipeAnimation] = useState(new Animated.Value(0));

  // Handle the dislike button press to swipe the card off screen to the left with a downward tilt
  function handleDislike() {
    setSwipeRight(false);
    // Animate the card swipe to the left with a downward tilt
    Animated.timing(swipeAnimation, {
      toValue: -1, // Move the card off the screen to the left
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Once the swipe animation is done, move to the next card
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
      swipeAnimation.setValue(0); // Reset animation for the next card
    });
  }

  // Handle the like button press to swipe the card off screen to the right
  function handleLike() {
    setSwipeRight(true);
    // Animate the card swipe to the right with a slight upward tilt
    Animated.timing(swipeAnimation, {
      toValue: 1, // Move the card off the screen to the right
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      // Once the swipe animation is done, move to the next card
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
      swipeAnimation.setValue(0); // Reset animation for the next card
    });
  }

  // Render the current and next cards
  const currentCard = dummyData[currentIndex];
  const nextCard = dummyData[(currentIndex + 1) % dummyData.length];

  return (
    <View lightColor="white" style={{ flex: 1 }}>
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          gap: 8,
          alignItems: "flex-start",
        }}
      >
        <View style={{ width: "70%" }}>
          <TextBold style={{ fontSize: 24 }}>Hommie</TextBold>

          <TextRegular style={{ fontSize: 15, opacity: 0.5 }}>
            Find a friendly match with your buddy and keep the peace.
          </TextRegular>
        </View>
        <View style={{ paddingVertical: 8 }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: Colors["light"].border,
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              borderRadius: 24,
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}
          >
            <SetOutline size={16} />
            <TextMedium>Preferences</TextMedium>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ padding: 16, position: "relative" }}>
        <Animated.View
          style={{
            borderColor: Colors["light"].border,
            backgroundColor : Colors["light"].background,
            //borderWidth: 1,
            zIndex: 1,
            borderRadius: 24,
            aspectRatio: 3 / 4,
            width: "auto",
            overflow: "hidden",
            transform: [
              {
                translateX: swipeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 500], // Swipe the card to the left (-500)
                }),
              },
              {
                translateY: swipeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, swipeRight ? 50 : -50], // Move card slightly downward as it swipes left
                }),
              },
              {
                rotate: swipeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "15deg"], // Tilt card downward
                }),
              },
            ],
          }}
        >
          <ScrollView>
            <View style={{ position: "relative" }}>
              <View
                style={{
                  width: "100%",
                  aspectRatio: 3 / 4,
                  //zIndex: -1,
                }}
              >
                <Image
                  source={{ uri: currentCard.imageUrl }}
                  style={{ width: "100%", height: "100%", borderRadius: 16 }}
                />
              </View>
              <View
                style={{
                  position: "absolute",
                  zIndex: 9,
                  bottom: 0,
                  padding: 16,
                }}
              >
                <TextBold style={{ fontSize: 24, color: "white" }}>
                  {currentCard.name}
                </TextBold>
                <TextRegular
                  style={{ fontSize: 15, color: "white", opacity: 0.85 }}
                >
                  Match: {currentCard.matchPercent}% | Distance:{" "}
                  {currentCard.distance} km
                </TextRegular>
              </View>
            </View>
            <View style={{ height: 200 }}>
              <View>
                <TextRegular style={{ fontSize: 14, marginTop: 8 }}>
                  Tags: {currentCard.matchTags.join(",")}
                </TextRegular>
              </View>
            </View>
          </ScrollView>
        </Animated.View>

        <View
          style={{
            position: "absolute",
            top: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            margin: 16,
            borderRadius: 24,
          }}
        >
          <Image
            source={{ uri: nextCard.imageUrl }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 24,
              transform : [{scale : 0.75,}],
              opacity: 0.5,
            }}
          />
        </View>
      </View>

      <View
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity onPress={handleDislike}>
          <View
            style={{
              borderColor: Colors["app"].orange,
              borderWidth: 2,
              width: 72,
              height: 72,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 24,
            }}
          >
            <View style={{ position: "relative", width: 32, height: 32 }}>
              <View
                style={{
                  backgroundColor: Colors["app"].orange,
                  width: 32,
                  height: 4,
                  borderRadius: 16,
                  transform: [{ rotate: "45deg" }],
                  position: "absolute",
                  top: 13,
                  left: 0,
                }}
              />
              <View
                style={{
                  backgroundColor: Colors["app"].orange,
                  width: 32,
                  height: 4,
                  borderRadius: 16,
                  transform: [{ rotate: "-45deg" }],
                  position: "absolute",
                  top: 13,
                  left: 0,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLike}>
          <View
            style={{
              backgroundColor: Colors["app"].primary,
              width: 72,
              height: 72,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 24,
            }}
          >
            <StarOutline size={32} fill="white" color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Dummy Data
const dummyData = [
  {
    id: "1",
    name: "John Doe",
    matchPercent: 85,
    distance: 13,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    matchTags: ["sports", "music"],
  },
  {
    id: "2",
    name: "Jane Smith",
    matchPercent: 92,
    distance: 13,
    imageUrl:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
    matchTags: ["reading", "travel"],
  },
  {
    id: "3",
    name: "Emily Johnson",
    matchPercent: 78,
    distance: 13,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    matchTags: ["cooking", "fitness"],
  },
  {
    id: "4",
    name: "Michael Brown",
    matchPercent: 88,
    imageUrl:
      "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
    distance: 13,
    matchTags: ["photography", "gaming"],
  },
  {
    id: "5",
    name: "Sarah Davis",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    matchPercent: 10,
    distance: 13,
    matchTags: ["art", "yoga"],
  },
  {
    id: "6",
    name: "David Wilson",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    matchPercent: 33,
    distance: 13,
    matchTags: ["movies", "technology"],
  },
];

/**
 import React, { useEffect, useRef, useState } from "react";
import { FlatList, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { View } from "@/components/Themed";
import ProfileCard from "@/components/home/ProfileCard";
import ConvertOutline from "@/components/icons/ConvertOutline";
import SetOutline from "@/components/icons/SetOutline";
import PinOutline from "@/components/icons/PinOutline";
import { Colors } from "@/constants/Colors";
import { Api } from "@/constants/Api";
import BottomSheet from "@gorhom/bottom-sheet";
import { TextRegular } from "@/components/StyledText";
import { router } from "expo-router";

const dummyData = [
  {
    id: "1",
    name: "John Doe",
    matchPercent: 85,
    distance: 13,
    matchTags: ["sports", "music"],
  },
  {
    id: "2",
    name: "Jane Smith",
    matchPercent: 92,
    distance: 13,
    matchTags: ["reading", "travel"],
  },
  {
    id: "3",
    name: "Emily Johnson",
    matchPercent: 78,
    distance: 13,
    matchTags: ["cooking", "fitness"],
  },
  {
    id: "4",
    name: "Michael Brown",
    matchPercent: 88,
    distance: 13,
    matchTags: ["photography", "gaming"],
  },
  {
    id: "5",
    name: "Sarah Davis",
    matchPercent: 10,
    distance: 13,
    matchTags: ["art", "yoga"],
  },
  {
    id: "6",
    name: "David Wilson",
    matchPercent: 33,
    distance: 13,
    matchTags: ["movies", "technology"],
  },
];

export default function TabOne() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [cardData, setCardData] = useState(dummyData);

  const fetchCardData = async () => {
    // try {
    //   const res = await fetch(`${Api.baseUrl}/feeds/me`, { method: "GET" });
    //   const data = await res.json();
    //   setCardData(data);
    // } catch (error) {
    //   setCardData(dummyData);
    //   console.error("Error fetching data:", error);
    // }
    setCardData(dummyData);
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <>
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <PinOutline size={20} />
            <TextRegular>Location</TextRegular>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/screens/home-preference-modal")}
          >
            <View style={styles.settingsButton}>
              <SetOutline size={18} />
            </View>
          </TouchableOpacity>
        </View>


        <View style={styles.listContainer}>
          <FlatList
            data={cardData}
            numColumns={2}
            keyExtractor={(item) => item.id} // Ensure proper keys
            renderItem={({ item }) => <ProfileCard {...item} />}
          />
        </View>


        <View style={styles.footer}>
          <TouchableOpacity onPress={() => setCardData(dummyData)}>
            <View style={styles.shuffleButton}>
              <ConvertOutline
                size={28}
                color={Colors.light.background}
                fill={Colors.light.background}
              />
            </View>
          </TouchableOpacity>
          <TextRegular style={styles.shuffleText}>
            Re-shuffle to find new matches
          </TextRegular>
        </View>
      </View>
      
      <Modal>
        
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  settingsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    padding: 8,
    borderColor: Colors.light.border,
    borderWidth: 1,
    borderRadius: 24,
  },
  listContainer: {
    flex: 1,
  },
  footer: {
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  shuffleButton: {
    borderRadius: 20,
    padding: 16,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.app.primary,
  },
  shuffleText: {
    textAlign: "center",
    margin: 8,
    opacity: 0.35,
    fontSize: 13,
  },
});

 */
