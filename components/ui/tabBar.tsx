import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View, Pressable, PressableProps } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import HomeOutline from "../icons/HomeOutline";
import UserOutline from "../icons/UserOutline";
import ChatsOutline from "../icons/ChatsOutline";

const icons: Record<string, React.ReactNode> = {
  index: <HomeOutline size={26} />,
  chats: <ChatsOutline size={26} />,
  profile: <UserOutline size={26} />,
};

export default function TabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: Colors["light"].background,
        borderTopColor: Colors["light"].border,
        borderTopWidth: 0.5,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabButton
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            //testID={options.tabBarTestID}
            isActive={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            label={label.toString()}
            icon={icons[route.name]}
          />
        );
      })}
    </View>
  );
}

interface TabButtonProps extends PressableProps {
  isActive?: boolean;
  label: string;
  icon: any;
}

function TabButton({
  isActive = false,
  label,
  icon,
  ...props
}: TabButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={isActive ? { selected: true } : {}}
      style={{ flex: 1, alignItems: "center" }}
      {...props}
    >
      <View
        style={{
          alignItems: "center",
          rowGap: 2,
          width: "100%",
          padding: 8,
        }}
      >
        <View
          style={{
            borderRadius: 14,
            padding: 8,
            backgroundColor: isActive ? Colors["app"].primary10 : "transparent",
          }}
        >
          {icon &&
            React.cloneElement(icon, {
              color: isActive ? Colors["app"].primary : Colors["light"].icon,
              fill: isActive ? Colors["app"].primary30 : "transparent",
            })}
        </View>
      </View>
    </Pressable>
  );
}
