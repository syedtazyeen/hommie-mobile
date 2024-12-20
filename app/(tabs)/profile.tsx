import EditOutline from "@/components/icons/EditOutline";
import { Text, View } from "@/components/Themed";
import { Colors } from "@/constants/Colors";
import { Image, Pressable } from "react-native";

export default function ProfileTab() {
  return (
    <View
      lightColor={Colors["light"].background}
      style={{ flex: 1, padding: 16 }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <View
            style={{
              width: 56,
              height: 56,
              borderRadius: 32,
              overflow: "hidden",
            }}
          >
            <Image
              source={require("@/assets/images/user.png")}
              resizeMode="stretch"
              style={{ width: 56, height: 56 }}
            />
          </View>
          <Pressable>
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors["light"].border,
                padding: 6,
                borderRadius: 12,
                flexDirection: "row",
                gap: 4,
              }}
            >
              <EditOutline fill="transparent" size={20} />
              <Text>Edit</Text>
            </View>
          </Pressable>
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "500" }}>Username</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              opacity: 0.5,
              fontStyle: "italic",
            }}
          >
            email
          </Text>
        </View>
      </View>
    </View>
  );
}
