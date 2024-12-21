import {
  View,
  TextInput,
  Pressable,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { TextBold, TextRegular } from "@/components/StyledText";
import React, { useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onLogIn = async () => {
    let valid = true;

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validate Password
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      try {
        const response = await fetch(
          "https://hommie-backend.onrender.com/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          }
        );
        if(!response.ok){
            throw response;
        }
        const data = await response.json();
        await AsyncStorage.setItem("userData", JSON.stringify(data)); // Store the response in AsyncStorage
        router.push("/(tabs)");
      } catch (error) {
        setPasswordError("Password entered is incorrect.");
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/wave.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <TextBold style={styles.title}>Sign In</TextBold>
      <TextRegular style={styles.signInMessage}>
        Welcome back! Please sign in to continue.
      </TextRegular>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[styles.input, isFocusedEmail && styles.inputFocused]}
        keyboardType="email-address"
        autoCapitalize="none"
        onFocus={() => setIsFocusedEmail(true)}
        onBlur={() => setIsFocusedEmail(false)}
      />
      {emailError ? (
        <Text
          style={{
            color: "red",
            marginBottom: 12,
            textAlign: "left",
            width: "100%",
          }}
        >
          {emailError}
        </Text>
      ) : null}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={[styles.input, isFocusedPassword && styles.inputFocused]}
        secureTextEntry
        onFocus={() => setIsFocusedPassword(true)}
        onBlur={() => setIsFocusedPassword(false)}
      />
      {passwordError ? (
        <Text
          style={{
            color: "red",
            marginBottom: 12,
            textAlign: "left",
            width: "100%",
          }}
        >
          {passwordError}
        </Text>
      ) : null}
      <Pressable
        onPress={onLogIn}
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
          Log In
        </TextBold>
      </Pressable>
      <Pressable onPress={() => router.push("/(auth)/sign-up")}>
        <TextRegular style={{ textAlign: "center", marginTop: 20 }}>
          Don't have an account?
          <Text style={{ color: "#007bff" }}> Sign Up</Text>
        </TextRegular>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      backgroundColor: "",
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      flexDirection: "column",
    },
    imageContainer: {
      backgroundColor: "#a3c1e0",
      borderRadius: 20,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
      height: 80,
      width: 80,
    },
    image: {
      width: "80%",
      height: "80%",
    },
    title: {
      fontSize: 30,
      color: "#2e78b7",
      textAlign: "center",
      marginBottom: 20,
    },
    input: {
      height: 60,
      width: "100%",
      borderColor: "transparent",
      borderWidth: 0,
      marginBottom: 12,
      paddingHorizontal: 10,
      borderRadius: 16,
      backgroundColor: "rgba(0, 123, 255, 0.1)",
    },
    inputFocused: {
      borderColor: "#007bff",
      borderWidth: 1,
    },
    signInMessage: {
      fontSize: 16,
      color: "#666",
      textAlign: "center",
      marginBottom: 20,
    },
  });

export default SignIn;
