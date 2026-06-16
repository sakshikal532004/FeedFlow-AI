import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const interests = [
  "🤖 AI",
  "💻 Coding",
  "🚀 Startups",
  "💰 Finance",
  "🏋️ Fitness",
  "✈️ Travel",
  "🎮 Gaming",
  "📚 Education",
];

export default function InterestScreen({
  onContinue,
  onBack,
}: any) {

  const [selected, setSelected] = useState<string[]>([]);

  const toggleInterest = (item: string) => {
    if (selected.includes(item)) {
      setSelected(selected.filter((i) => i !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <View style={styles.container}>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={onBack}
      >
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* Heading */}
      <Text style={styles.title}>
        Choose Your Interests
      </Text>

      <Text style={styles.subtitle}>
        Select topics you want to see more on Instagram
      </Text>

      {/* Interest Chips */}
      <View style={styles.grid}>
        {interests.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.chip,
              selected.includes(item) &&
                styles.activeChip,
            ]}
            onPress={() => toggleInterest(item)}
          >
            <Text
              style={[
                styles.chipText,
                selected.includes(item) && {
                  color: "white",
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={onContinue}
      >
        <Text style={styles.buttonText}>
          Continue
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    paddingHorizontal: 20,
    paddingTop: 70,
  },

  backButton: {
    marginBottom: 20,
  },

  backText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    color: "#94A3B8",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 35,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  chip: {
    width: "48%",
    backgroundColor: "#1E293B",
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },

  activeChip: {
    backgroundColor: "#7C3AED",
  },

  chipText: {
    color: "#CBD5E1",
    fontSize: 16,
    fontWeight: "600",
  },

  button: {
    marginTop: "auto",
    marginBottom: 30,
    backgroundColor: "#7C3AED",
    paddingVertical: 18,
    borderRadius: 15,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

});