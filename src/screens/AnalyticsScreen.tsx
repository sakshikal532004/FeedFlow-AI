import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function AnalyticsScreen({ onBack }: any) {
  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* ⬅️ Highlighted Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onBack} activeOpacity={0.7}>
        <View style={styles.backButtonInner}>
          <Text style={styles.backIcon}>⬅️</Text>
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.title}>📊 Analytics</Text>
      <Text style={styles.subtitle}>AI Feed Performance</Text>

      {/* 2-Column Grid Layout */}
      <View style={styles.gridContainer}>
        
        {/* 📊 Feed Score */}
        <View style={[styles.card, styles.cardPurpleGlow]}>
          <Text style={styles.cardTitle}>📊 Feed Score</Text>
          <Text style={styles.big}>82%</Text>
        </View>

        {/* 📈 Weekly Growth */}
        <View style={[styles.card, styles.cardGreenGlow]}>
          <Text style={styles.cardTitle}>📈 Weekly Growth</Text>
          <Text style={styles.green}>+18%</Text>
        </View>

        {/* ❤️ Liked Posts */}
        <View style={[styles.card, styles.cardPurpleGlow]}>
          <Text style={styles.cardTitle}>❤️ Liked Posts</Text>
          <Text style={styles.big}>124</Text>
        </View>

        {/* 💾 Saved Posts */}
        <View style={[styles.card, styles.cardPurpleGlow]}>
          <Text style={styles.cardTitle}>💾 Saved Posts</Text>
          <Text style={styles.big}>56</Text>
        </View>

        {/* 🤖 AI Accuracy */}
        <View style={[styles.card, styles.cardGreenGlow]}>
          <Text style={styles.cardTitle}>🤖 AI Accuracy</Text>
          <Text style={styles.green}>91%</Text>
        </View>

        {/* 🔥 Engagement */}
        <View style={[styles.card, styles.cardGreenGlow]}>
          <Text style={styles.cardTitle}>🔥 Engagement</Text>
          <Text style={styles.greenExcellent}>Excellent</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },

  /* ⬅️ Back Button Highlight Styles */
  backButton: {
    marginTop: 50,
    marginBottom: 24,
    alignSelf: "flex-start",
    borderRadius: 14,
    // Highlight Effect: Bright border and glowing background
    backgroundColor: "rgba(124, 58, 237, 0.15)",
    borderWidth: 1.5,
    borderColor: "#7C3AED",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 6,
  },
  backButtonInner: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  backIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  backText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  /* Header Styles */
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    color: "#94A3B8",
    fontSize: 16,
    marginBottom: 28,
  },

  /* Grid Layout */
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  /* Card Styles */
  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 20,
    marginBottom: 16,
    width: "48%", // Creates 2-column layout with gap
    // Subtle depth
    borderWidth: 1,
    borderColor: "#334155",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },

  /* Highlight Glows for Cards based on text color */
  cardPurpleGlow: {
    borderColor: "rgba(124, 58, 237, 0.3)",
    shadowColor: "#7C3AED",
    shadowOpacity: 0.15,
  },
  cardGreenGlow: {
    borderColor: "rgba(34, 197, 94, 0.3)",
    shadowColor: "#22C55E",
    shadowOpacity: 0.15,
  },

  cardTitle: {
    color: "#CBD5E1", // Slightly softer white for modern look
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 12,
  },

  /* Text Styles */
  big: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#7C3AED",
  },
  green: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#22C55E",
  },
  greenExcellent: {
    fontSize: 24, // Slightly smaller so "Excellent" fits beautifully in the grid
    fontWeight: "bold",
    color: "#22C55E",
  },
});