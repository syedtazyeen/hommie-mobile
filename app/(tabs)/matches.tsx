import { View } from "@/components/Themed";
import { Colors } from "@/constants/Colors";
import React from "react";

export default function matches() {
  return (
    <View lightColor={Colors["light"].background} style={{ flex: 1 }}></View>
  );
}
