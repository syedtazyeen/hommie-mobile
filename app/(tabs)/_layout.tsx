import { Tabs } from "expo-router";
import React from "react";
import TabBar from "@/components/ui/tabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: "Explore" }} />
      <Tabs.Screen name="matches" options={{ title: "Activities" }} />
      <Tabs.Screen name="profile" options={{ title: "Activities" }} />
    </Tabs>
  );
}
