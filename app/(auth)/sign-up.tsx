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
  
  const SignUp = () => {
    const [isFocusedEmail, setIsFocusedEmail] = useState(false);
    const [isNameFocused,setIsNameFocused] = useState(false);
    const [isFocusedPassword, setIsFocusedPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const onCreateAccountClick = async() => {
        let valid = true;

        // Validate Name
        if (!name) {
            setNameError("Name is required");
            valid = false;
        } else {
            setNameError("");
        }

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
        } else if (password.length < 6) {
            setPasswordError("Password must be at least 6 characters");
            valid = false;
        } else {
            setPasswordError("");
        }

        if (valid) {
            try{
                const response = await fetch("https://hommie-backend.onrender.com/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email, password }),
                });
                if(!response.ok){
                    throw response;
                }
                await AsyncStorage.setItem('userData', JSON.stringify(response));
                router.push("/(tabs)")
            }catch(error){
                console.log(error);
            }
        }
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/claps.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <TextBold style={styles.title}>Sign Up</TextBold>
        <TextRegular style={styles.signInMessage}>Create your account to get started!</TextRegular>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={[styles.input, isNameFocused && styles.inputFocused]}
          keyboardType="default"
          autoCapitalize="words"
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
        />
        {nameError ? <Text style={{ color: 'red', marginBottom: 12, textAlign: 'left', width: '100%' }}>{nameError}</Text> : null}
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
        {emailError ? <Text style={{ color: 'red', marginBottom: 12, textAlign: 'left', width: '100%' }}>{emailError}</Text> : null}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          style={[styles.input, isFocusedPassword && styles.inputFocused]}
          secureTextEntry
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
        />
        {passwordError ? <Text style={{ color: 'red', marginBottom: 12, textAlign: 'left', width: '100%' }}>{passwordError}</Text> : null}
        <Pressable
          onPress={onCreateAccountClick}
          style={{
            backgroundColor: "#007bff",
            padding: 10,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            width:"100%" ,
            height:60
          }}
        >
          <TextBold style={{ color: "white", fontWeight: "bold"}}>Create Account</TextBold>
        </Pressable>
        <Pressable onPress={() =>router.push('/(auth)/sign-in')}>
          <TextRegular style={{  textAlign: "center", marginTop: 20 }}>
            Already have an account?
            <Text style = {{color: "#007bff"}}>{" "}Sign In</Text>
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
  
  export default SignUp;
  