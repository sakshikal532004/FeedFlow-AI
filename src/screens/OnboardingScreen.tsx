import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";

const data = [
  {
    icon: "📱",
    title: "Connect Instagram",
    desc: "Securely connect your Instagram account to personalize your feed.",
  },
  {
    icon: "🎯",
    title: "Choose Interests",
    desc: "Select topics you want to see more and reduce unwanted content.",
  },
  {
    icon: "🤖",
    title: "AI Personalization",
    desc: "Our AI creates a smart strategy to improve your Instagram feed.",
  },
  {
    icon: "📈",
    title: "Improve Feed",
    desc: "Track your progress and build a smarter social experience.",
  },
];

const { width } = Dimensions.get("window");

export default function OnboardingScreen({ onFinish }: any) {
  const [page, setPage] = useState(0);

  // Animation Values
  const fadeIcon = useRef(new Animated.Value(1)).current;
  const slideTitle = useRef(new Animated.Value(0)).current;
  const fadeDesc = useRef(new Animated.Value(1)).current;
  const slideBtn = useRef(new Animated.Value(0)).current;

  // Trigger animation when page changes
  useEffect(() => {
    // Reset positions instantly (invisible to user)
    fadeIcon.setValue(0);
    slideTitle.setValue(40);
    fadeDesc.setValue(0);
    slideBtn.setValue(30);

    // Animate in together
    Animated.parallel([
      Animated.timing(fadeIcon, { toValue: 1, duration: 500, useNativeDriver: true }),
      Animated.spring(slideTitle, { toValue: 0, tension: 50, friction: 7, useNativeDriver: true }),
      Animated.timing(fadeDesc, { toValue: 1, duration: 600, delay: 150, useNativeDriver: true }),
      Animated.spring(slideBtn, { toValue: 0, tension: 50, friction: 7, delay: 200, useNativeDriver: true }),
    ]).start();
  }, [page]);

  return (
    <View style={styles.container}>

      {/* Background Glow Effect based on current page */}
      <View style={styles.glowContainer}>
        <Animated.View 
          style={[styles.glowCircle, { 
            opacity: fadeIcon,
            transform: [{ scale: fadeIcon.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] }) }]
          }]} 
        />
      </View>

      {/* Icon */}
      <Animated.View style={{ opacity: fadeIcon, transform: [{ scale: fadeIcon }] }}>
        <Text style={styles.icon}>{data[page].icon}</Text>
      </Animated.View>

      {/* Title */}
      <Animated.Text 
        style={[
          styles.title, 
          { opacity: slideTitle.interpolate({ inputRange: [0, 40], outputRange: [1, 0] }), transform: [{ translateY: slideTitle }] }
        ]}
      >
        {data[page].title}
      </Animated.Text>

      {/* Description */}
      <Animated.Text style={[styles.desc, { opacity: fadeDesc }]}>
        {data[page].desc}
      </Animated.Text>

      {/* Progress Dots */}
      <View style={styles.dotsContainer}>
        {data.map((_, index) => {
          const isActive = page === index;
          return (
            <TouchableOpacity key={index} onPress={() => setPage(index)} activeOpacity={0.7}>
              <Animated.View 
                style={[
                  styles.dotWrapper,
                  isActive && { width: 40 },
                ]}
              >
                {isActive && (
                  <Animated.View style={styles.activeDotTrack} />
                )}
                <View style={[styles.dot, isActive && styles.activeDot]} />
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Buttons */}
      <Animated.View 
        style={[
          styles.buttonContainer, 
          { opacity: slideBtn.interpolate({ inputRange: [0, 30], outputRange: [1, 0] }), transform: [{ translateY: slideBtn }] }
        ]}
      >
        {page > 0 ? (
          <TouchableOpacity
            style={[styles.button, styles.prevButton]}
            onPress={() => setPage(page - 1)}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: "45%" }} />
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (page === data.length - 1) {
              onFinish();
            } else {
              setPage(page + 1);
            }
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>
            {page === data.length - 1 ? "Get Started ✨" : "Next →"}
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
    padding: 25,
    overflow: "hidden", // Keeps glow inside the screen
  },

  // Background Glow Magic
  glowContainer: {
    position: "absolute",
    top: -100,
    justifyContent: "center",
    alignItems: "center",
  },
  glowCircle: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: "rgba(124, 58, 237, 0.15)",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 80,
  },

  icon: {
    fontSize: 100,
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },

  desc: {
    color: "#94A3B8",
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
    lineHeight: 28,
    paddingHorizontal: 20,
  },

  // Dots Styles
  dotsContainer: {
    flexDirection: "row",
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  dotWrapper: {
    height: 12,
    width: 12,
    marginHorizontal: 6,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  activeDotTrack: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(124, 58, 237, 0.2)",
    borderRadius: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#475569",
  },
  activeDot: {
    backgroundColor: "#7C3AED",
    width: 10,
    height: 10,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 4,
  },

  // Button Styles
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 60,
  },
  button: {
    backgroundColor: "#7C3AED",
    width: "45%",
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  prevButton: {
    backgroundColor: "#1E293B",
    borderWidth: 1,
    borderColor: "#334155",
    shadowColor: "transparent",
    elevation: 0,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});