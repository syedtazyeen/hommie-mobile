import { FlatList, TouchableOpacity } from "react-native";
import ProfileCard from "@/components/home/ProfileCard";
import { View } from "@/components/Themed";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import { TextRegular, TextSemibold } from "@/components/StyledText";
import ConvertOutline from "@/components/icons/ConvertOutline";
import SetOutline from "@/components/icons/SetOutline";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PinOutline from "@/components/icons/PinOutline";

const dummyData: FeedUser[] = [
  {
    id: "1",
    name: "John Doe",
    match: 85,
    distance: 13,
    tags: ["sports", "music"],
  },
  {
    id: "2",
    name: "Jane Smith",
    match: 92,
    distance: 13,
    tags: ["reading", "travel"],
  },
  {
    id: "3",
    name: "Emily Johnson",
    match: 78,
    distance: 13,
    tags: ["cooking", "fitness"],
  },
  {
    id: "4",
    name: "Michael Brown",
    match: 88,
    distance: 13,
    tags: ["photography", "gaming"],
  },
  {
    id: "5",
    name: "Sarah Davis",
    match: 10,
    distance: 13,
    tags: ["art", "yoga"],
  },
  {
    id: "6",
    name: "David Wilson",
    match: 33,
    distance: 13,
    tags: ["movies", "technology"],
  },
];

export default function TabOne() {
  const [cardData, setCardData] = useState<FeedUser[]>(dummyData);

  function fetchCardData() {
    setCardData((prev) => prev.sort(() => Math.random() - 0.5));
  }

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <View
      lightColor={Colors["light"].background}
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems : "center",
          justifyContent: "space-between",
          width: "auto",
          padding: 16,
        }}
      >
        <View
          style={{ flexDirection: "row", gap: 4, justifyContent: "center" }}
        >
          <PinOutline size={20} />
          <TextRegular style={{}}>Location</TextRegular>
        </View>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 6,
              padding: 8,
              borderColor: Colors["light"].border,
              borderWidth: 1,
              borderRadius: 24,
              aspectRatio: 1,
            }}
          >
            <SetOutline size={18} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <FlatList
          data={cardData}
          numColumns={2}
          renderItem={({ item }) => <ProfileCard {...item} />}
        />
      </View>

      <View style={{ padding: 16, marginBottom: 16, alignItems: "center" }}>
        <TouchableOpacity onPress={() => setCardData(dummyData)}>
          <View
            style={{
              borderRadius: 20,
              padding: 16,
              aspectRatio: 3 / 2.5,
              height: 64,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: Colors["app"].primary,
            }}
          >
            <ConvertOutline
              size={28}
              color={Colors["light"].background}
              fill={Colors["light"].background}
            />
          </View>
        </TouchableOpacity>
        <TextRegular
          style={{
            textAlign: "center",
            paddingHorizontal: 8,
            paddingVertical: 4,
            fontSize: 13,
            margin: 8,
            opacity: 0.35,
            borderColor: Colors["light"].border,
            //borderWidth: 1,
            borderRadius: 16,
          }}
        >
          Re-shuffle to find new matches
        </TextRegular>
      </View>
    </View>
  );
}
