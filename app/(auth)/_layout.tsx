import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="sign-in"
        options={{
          title: "Sign-In",
        }}
      />
      <Stack.Screen
        name="sign-out"
        options={{
          title: "Sign-Out",
        }}
      />
    </Stack>
  );
}
