import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert, // Alert import kiya
} from "react-native";

export default function ProfileScreen({
  onBack,
  onLogout,
}: any) {

  // Logout press karne par confirmation maango
  const handleLogoutPress = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Yes, Logout",
          style: "destructive",
          onPress: onLogout // Agar yes dabaye to splash par jayega
        }
      ]
    );
  };

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      {/* 👤 User Profile Highlight */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarGlow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
        </View>
        <Text style={styles.name}>Sakshi</Text>
      </View>

      {/* 📧 Email Highlight */}
      <View style={styles.emailBadge}>
        <Text style={styles.emailIcon}>📧</Text>
        <Text style={styles.email}>sakshi@gmail.com</Text>
      </View>

      {/* 📱 Instagram Status Highlight */}
      <View style={styles.card}>
        <View style={styles.cardHeaderRow}>
          <Text style={styles.cardTitle}>📱 Instagram</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Connected</Text>
          </View>
        </View>
      </View>

      {/* 🎯 Selected Interests Highlight */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Selected Interests</Text>
        <View style={styles.tagsContainer}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>AI</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Coding</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Finance</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}>Startups</Text>
          </View>
        </View>
      </View>

      {/* 🤖 AI Reports Highlight */}
      <View style={styles.card}>
        <View style={styles.cardHeaderRow}>
          <Text style={styles.cardTitle}>🤖 AI Reports</Text>
          <View style={styles.reportsBadge}>
            <Text style={styles.reportsText}>12 Generated</Text>
          </View>
        </View>
      </View>

      {/* 🚪 Logout Highlight (Last me, connected with onLogout) */}
      <TouchableOpacity 
        style={styles.logout} 
        activeOpacity={0.8}
        onPress={handleLogoutPress} // Yahan function call ho raha hai
      >
        <Text style={styles.logoutText}>🚪 Logout</Text>
      </TouchableOpacity>

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
    paddingBottom: 50,
  },
  backButton: {
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  backText: {
    color: "#94A3B8",
    fontSize: 18,
    fontWeight: "600",
  },

  /* 👤 User Profile Section */
  profileHeader: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  avatarGlow: {
    padding: 4,
    borderRadius: 70,
    backgroundColor: "rgba(124, 58, 237, 0.4)",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 15,
    elevation: 10,
  },
  avatar: {
    height: 110,
    width: 110,
    backgroundColor: "#1E293B",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#334155",
  },
  avatarText: {
    fontSize: 50,
  },
  name: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 16,
  },

  /* 📧 Email Section */
  emailBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E293B",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#334155",
    marginBottom: 28,
    width: "100%",
  },
  emailIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  email: {
    color: "#CBD5E1",
    fontSize: 16,
    fontWeight: "500",
  },

  /* Cards */
  card: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#334155",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  cardHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },

  /* 📱 Instagram Status Badge */
  statusBadge: {
    backgroundColor: "rgba(34, 197, 94, 0.15)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(34, 197, 94, 0.3)",
  },
  statusText: {
    color: "#22C55E",
    fontWeight: "bold",
    fontSize: 14,
  },

  /* 🎯 Interests Tags */
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
    gap: 10,
  },
  tag: {
    backgroundColor: "rgba(124, 58, 237, 0.15)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(124, 58, 237, 0.3)",
  },
  tagText: {
    color: "#A78BFA",
    fontSize: 15,
    fontWeight: "600",
  },

  /* 🤖 AI Reports Badge */
  reportsBadge: {
    backgroundColor: "rgba(124, 58, 237, 0.15)",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(124, 58, 237, 0.3)",
  },
  reportsText: {
    color: "#7C3AED",
    fontWeight: "bold",
    fontSize: 14,
  },

  /* 🚪 Logout Button */
  logout: {
    backgroundColor: "#EF4444",
    padding: 18,
    borderRadius: 16,
    marginTop: 20,
    shadowColor: "#EF4444",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});