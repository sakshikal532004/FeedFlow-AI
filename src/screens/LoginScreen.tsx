import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Alert,
  ActivityIndicator,
} from "react-native";

import { loginUser } from "../api/api"; 

// Smooth Animation Hook
function useFadeIn(delay: number) {
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(30));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1, duration: 800, delay: delay, useNativeDriver: true,
    }).start();
    Animated.timing(translateY, {
      toValue: 0, duration: 800, delay: delay, useNativeDriver: true,
    }).start();
  }, []);

  return { opacity, translateY };
}

// ✅ onGoToSignup prop add kiya
export default function LoginScreen({ onLogin, onBack, onGoToSignup }: any) {
  const anim1 = useFadeIn(0);
  const anim2 = useFadeIn(200);
  const anim3 = useFadeIn(400);
  const anim4 = useFadeIn(600);
  const anim5 = useFadeIn(800);
  const anim6 = useFadeIn(1000);
  const anim7 = useFadeIn(1200);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


const handleLogin = async () => {

  if (!email || !password) {
    Alert.alert(
      "Oops!",
      "Please enter both email and password."
    );
    return;
  }

  setIsLoading(true);

  // Demo Login
  setTimeout(() => {

    onLogin(
      "11111111-1111-1111-1111-111111111111"
    );

    setIsLoading(false);

  }, 1000);

};


  return (
    // ✅ Main container wapas laaya
    <View style={styles.container}>

      {/* ⬅️ Back Button */}
      <Animated.View 
        style={[styles.backRow, { opacity: anim1.opacity, transform: [{ translateY: anim1.translateY }] }]
        }>
        <TouchableOpacity onPress={onBack} style={styles.backButton} disabled={isLoading}>
          <Text style={styles.backText}>⬅️ Back</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.logoContainer, { opacity: anim2.opacity, transform: [{ translateY: anim2.translateY }] }]}>
        <Text style={styles.logo}>🤖</Text>
      </Animated.View>

      <Animated.Text style={[styles.title, { opacity: anim3.opacity, transform: [{ translateY: anim3.translateY }] }]}>
        FeedFlow AI
      </Animated.Text>

      <Animated.Text style={[styles.subtitle, { opacity: anim4.opacity, transform: [{ translateY: anim4.translateY }] }]}>
        Sign in to personalize your Instagram feed
      </Animated.Text>

      {/* Email Input */}
      <Animated.View style={{ width: '100%', opacity: anim5.opacity, transform: [{ translateY: anim5.translateY }] }}>
        <TextInput 
          placeholder="Email" 
          placeholderTextColor="#64748B" 
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!isLoading}
        />
      </Animated.View>

      {/* Password Input */}
      <Animated.View style={{ width: '100%', opacity: anim5.opacity, transform: [{ translateY: anim5.translateY }] }}>
        <TextInput 
          placeholder="Password" 
          placeholderTextColor="#64748B" 
          secureTextEntry 
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          editable={!isLoading}
        />
      </Animated.View>

      {/* Login Button */}
      <Animated.View style={{ width: '100%', opacity: anim6.opacity, transform: [{ translateY: anim6.translateY }] }}>
        <TouchableOpacity 
          style={[styles.loginBtn, isLoading && styles.disabledBtn]} 
          onPress={handleLogin} 
          activeOpacity={0.8}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="white" size="small" />
          ) : (
            <Text style={styles.loginText}>Login</Text>
          )}
        </TouchableOpacity>
      </Animated.View>

      {/* Google Button */}
      <Animated.View style={{ width: '100%', opacity: anim7.opacity, transform: [{ translateY: anim7.translateY }] }}>
        <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8} disabled={isLoading}>
          <Text style={styles.googleText}>
            <Text style={styles.gIcon}>G</Text>  Continue with Google
          </Text>
        </TouchableOpacity>
      </Animated.View>
     
      {/* ✅ Sign Up Redirect Text */}
      <View style={{ alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
        <Text style={{ color: "#94A3B8", fontSize: 15 }}>
          Don't have an account?{' '}
          <Text 
            style={{ color: "#7C3AED", fontWeight: "bold" }}
            onPress={onGoToSignup} 
          >
            Sign Up
          </Text>
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A", padding: 25, paddingTop: 0 },
  
  backRow: { width: "100%", height: 80, justifyContent: "center", marginTop: 50 },
  backButton: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(124, 58, 237, 0.15)",
    borderWidth: 1, borderColor: "#7C3AED",
    paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12,
  },
  backText: { color: "white", fontSize: 16, fontWeight: "bold" },

  logoContainer: {
    shadowColor: "#7C3AED", shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5, shadowRadius: 25, elevation: 12, marginTop: 20,
  },
  logo: { fontSize: 70, textAlign: "center" },
  
  title: { color: "white", fontSize: 34, fontWeight: "bold", textAlign: "center", marginTop: 15, letterSpacing: 0.5 },
  subtitle: { color: "#94A3B8", textAlign: "center", marginTop: 10, marginBottom: 40, fontSize: 16, lineHeight: 24, paddingHorizontal: 20 },
  
  input: { 
    backgroundColor: "#1E293B", 
    padding: 18, 
    borderRadius: 16, 
    marginBottom: 15, 
    color: "white", 
    fontSize: 16, 
    borderWidth: 1, 
    borderColor: "#334155" 
  },
  
  loginBtn: {
    backgroundColor: "#7C3AED", padding: 18, borderRadius: 16, marginTop: 10,
    shadowColor: "#7C3AED", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledBtn: {
    opacity: 0.7,
  },
  loginText: { color: "white", fontSize: 18, fontWeight: "bold", textAlign: "center" },

  googleBtn: { marginTop: 20, borderWidth: 1.5, borderColor: "#475569", padding: 18, borderRadius: 16, backgroundColor: "rgba(30, 41, 59, 0.5)" },
  googleText: { color: "white", textAlign: "center", fontSize: 16, fontWeight: "600" },
  gIcon: { color: "#EA4335", fontWeight: "bold", fontSize: 18 },
});