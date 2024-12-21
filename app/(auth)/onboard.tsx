import { TextBold, TextMedium, TextRegular } from "@/components/StyledText";
import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import { StyleSheet, Image,Pressable } from "react-native";

const Onboard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/userDance.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between',width:'100%' }}>
      <TextRegular style={{ fontSize: 24, textAlign: "center" }}>
        Find your perfect roommate match, swipe, connect, and share your space
        <TextBold style={{ fontSize: 28, textAlign: "center" }}>
          {" "}
          hassle-free!
        </TextBold>
      </TextRegular>
      <Pressable
        onPress={()=>router.push("/(auth)/sign-up")}
        style={{
          backgroundColor: "#007bff",
          padding: 10,
          borderRadius: 16,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 60,
        }}
      >
        <TextBold style={{ color: "white", fontWeight: "bold" }}>
          Get Started
        </TextBold>
      </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    flexDirection: "column",
  },
  imageContainer: {
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    height: 400,
    width: 400,
  },
  image: {
    width: "80%",
    height: "80%",
  },
});

export default Onboard;
