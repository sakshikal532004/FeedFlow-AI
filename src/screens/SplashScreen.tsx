import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

// Custom Hook for smooth Fade-In & Slide-Up Animation
function useFadeIn(delay: number) {
  const [opacity] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(30));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 800,
      delay: delay,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 800,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, []);

  return { opacity, translateY };
}

export default function SplashScreen({ onNext }: any) {
  // Staggered Delays
  const anim1 = useFadeIn(0);
  const anim2 = useFadeIn(300);
  const anim3 = useFadeIn(500);
  const anim4 = useFadeIn(700);
  const anim5 = useFadeIn(900);
  const anim6 = useFadeIn(1100);

  return (
    <View style={styles.container}>
      
      {/* 🤖 Logo Animation */}
      <Animated.View 
        style={[
          styles.logoContainer, 
          { opacity: anim1.opacity, transform: [{ translateY: anim1.translateY }] }
        ]}
      >
        <Text style={styles.logo}>🤖</Text>
      </Animated.View>

      {/* ✨ Title Animation */}
      <Animated.Text 
        style={[
          styles.title, 
          { opacity: anim2.opacity, transform: [{ translateY: anim2.translateY }] }
        ]}
      >
        FeedFlow AI
      </Animated.Text>

      {/* 💜 Subtitle 1 Animation */}
      <Animated.Text 
        style={[
          styles.subtitle, 
          { opacity: anim3.opacity, transform: [{ translateY: anim3.translateY }] }
        ]}
      >
        Train Your Feed.
      </Animated.Text>

      {/* 💙 Subtitle 2 Animation */}
      <Animated.Text 
        style={[
          styles.subtitle2, 
          { opacity: anim4.opacity, transform: [{ translateY: anim4.translateY }] }
        ]}
      >
        Train Your Mind.
      </Animated.Text>

      {/* 📝 Description Animation */}
      <Animated.Text 
        style={[
          styles.description, 
          { opacity: anim5.opacity, transform: [{ translateY: anim5.translateY }] }
        ]}
      >
        AI Powered Instagram Feed Personalization
      </Animated.Text>

      {/* 🚀 Button Animation */}
      <Animated.View 
        style={{
          width: "90%", 
          opacity: anim6.opacity, 
          transform: [{ translateY: anim6.translateY }] 
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={onNext}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            Get Started →
          </Text>
        </TouchableOpacity>
      </Animated.View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  
  logoContainer: {
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 30,
    elevation: 15,
  },
  
  logo: {
    fontSize: 90,
  },
  
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    letterSpacing: 1,
  },
  
  subtitle: {
    color: "#A855F7",
    fontSize: 23,
    marginTop: 12,
    fontWeight: "600",
  },
  
  subtitle2: {
    color: "#3B82F6",
    fontSize: 23,
    fontWeight: "600",
  },
  
  description: {
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 25,
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  
  button: {
    marginTop: 60,
    backgroundColor: "#7C3AED",
    padding: 18,
    borderRadius: 18,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
    elevation: 10,
  },
  
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});