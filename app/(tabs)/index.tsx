import { Text, View } from "@/components/Themed";
import { Colors } from "@/constants/Colors";

export default function TabOne() {
  return (
    <View lightColor={Colors["light"].background} style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 500 }}>Username</Text>
      </View>
    </View>
  );
}
