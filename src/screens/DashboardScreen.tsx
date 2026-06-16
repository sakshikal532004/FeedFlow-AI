// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   ActivityIndicator,
//   StyleSheet,
// } from "react-native";

// import {
//   getDashboard,
//   generateStrategy,
//   getAnalytics,
// } from "../api/api";

// const USER_ID = "11111111-1111-1111-1111-111111111111";

// export default function DashboardScreen({
//   onBack,
//   onAnalytics,
//   onProfile,
// }: any) {
//   const [loading, setLoading] = useState(true);
//   const [topics, setTopics] = useState<string[]>([]);
//   const [strategy, setStrategy] = useState("");
//   const [lastSync, setLastSync] = useState("");
  
//   // Empty object fallback diya hai taaki app crash na kare agar data nahi aaya
//   const [analytics, setAnalytics] = useState<any>({});

//   useEffect(() => {
//     loadDashboard();
//   }, []);

//   async function loadDashboard() {
//     try {
//       const data = await getDashboard(USER_ID);
//       setTopics(data.more_topics || []);
//       setLastSync(data.created_at || "");

//       const ai = await generateStrategy(data.more_topics || []);
//       setStrategy(ai.strategy || "");

//       // ✅ Updated Code: Console.log add kiya
//       const stats = await getAnalytics(USER_ID);
      
//       console.log("Analytics =", stats);
      
//       setAnalytics(stats || {}); // || {} lagaya hai taaki undefined aane par error na aaye

//     } catch (e) {
//       console.log("Error fetching data:", e);
//     }
//     setLoading(false);
//   }

//   if (loading) {
//     return (
//       <View style={styles.loader}>
//         <ActivityIndicator size="large" color="#7C3AED" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView 
//       style={styles.container}
//       showsVerticalScrollIndicator={false}
//       contentContainerStyle={styles.scrollContent}
//     >
//       <TouchableOpacity style={styles.backButton} onPress={onBack}>
//         <Text style={styles.backText}>← Back</Text>
//       </TouchableOpacity>

//       <Text style={styles.title}>👋 Hello Sakshi</Text>
//       <Text style={styles.subtitle}>FeedFlow AI Dashboard</Text>

//       {/* Navigation Buttons */}
//       <View style={styles.navButtonsRow}>
//         <TouchableOpacity style={styles.navButton} onPress={onAnalytics} activeOpacity={0.7}>
//           <Text style={styles.navButtonIcon}>📊</Text>
//           <Text style={styles.navButtonText}>Analytics</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.navButton} onPress={onProfile} activeOpacity={0.7}>
//           <Text style={styles.navButtonIcon}>👤</Text>
//           <Text style={styles.navButtonText}>Profile</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Merged Feed Score & Weekly Progress */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>📊 Feed Score & Progress</Text>
//         <View style={styles.scoreRowContainer}>
//           <View style={styles.scoreContainer}>
//             <Text style={styles.score}>{analytics.feed_score || 0}%</Text>
//             <Text style={styles.scoreLabel}>Overall Score</Text>
//           </View>
//           <View style={styles.verticalDivider} />
//           <View style={styles.progressContainer}>
//             <Text style={styles.green}>📈 +{analytics.weekly_progress || 0}%</Text>
//             <Text style={styles.progressLabel}>Feed quality improved this week</Text>
//           </View>
//         </View>
//       </View>

//       {/* Instagram Card */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>📱 Instagram</Text>
//         <Text style={styles.green}>
//           {analytics.instagram_connected ? "🟢 Connected" : "🔴 Not Connected"}
//         </Text>
//         <Text style={styles.gray}>Last Sync</Text>
//         <Text style={styles.gray}>{analytics.last_sync || "N/A"}</Text>
//       </View>

//       {/* Automation Card */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>🤖 Automation</Text>
//         <Text style={styles.green}>
//           {analytics.automation_running ? "🟢 Running" : "🔴 Stopped"}
//         </Text>
//         <Text style={styles.gray}>AI is improving your feed</Text>
//       </View>

//       {/* Progress Card */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>📈 Progress</Text>
//         <Text style={styles.score}>{analytics.progress || 0}%</Text>
//         <Text style={styles.gray}>
//           Actions Completed: {analytics.actions_completed || 0}
//         </Text>
//       </View>

//       {/* Interests */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>🎯 Your Interests</Text>
//         {topics.map((item, index) => (
//           <View key={index} style={styles.bulletPoint}>
//             <View style={styles.bulletDot} />
//             <Text style={styles.item}>{item}</Text>
//           </View>
//         ))}
//       </View>

//       {/* AI Strategy */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>💡 AI Strategy</Text>
//         <Text style={styles.item}>{strategy}</Text>
//       </View>

//       <TouchableOpacity style={styles.button} onPress={loadDashboard}>
//         <Text style={styles.buttonText}>Refresh Dashboard</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#0F172A" },
//   scrollContent: { padding: 20, paddingBottom: 40 },
//   loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0F172A" },
//   backButton: { marginTop: 50, marginBottom: 20, alignSelf: "flex-start" },
//   backText: { color: "#94A3B8", fontSize: 18, fontWeight: "600" },
//   title: { color: "white", fontSize: 32, fontWeight: "bold" },
//   subtitle: { color: "#94A3B8", fontSize: 16, marginBottom: 24, marginTop: 4 },
  
//   navButtonsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 },
//   navButton: { flex: 1, backgroundColor: "#1E293B", padding: 18, borderRadius: 18, marginHorizontal: 6, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#334155", shadowColor: "#000000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 4 },
//   navButtonIcon: { fontSize: 28, marginBottom: 8 },
//   navButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },

//   card: { backgroundColor: "#1E293B", padding: 20, borderRadius: 20, marginBottom: 16, borderWidth: 1, borderColor: "#334155", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 },
//   cardTitle: { color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  
//   scoreRowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
//   scoreContainer: { flex: 1, alignItems: "center" },
//   score: { fontSize: 42, fontWeight: "bold", color: "#7C3AED" },
//   scoreLabel: { color: "#94A3B8", fontSize: 13, marginTop: 4, fontWeight: "500" },
//   verticalDivider: { width: 1, height: 50, backgroundColor: "#334155", marginHorizontal: 15 },
//   progressContainer: { flex: 1.2, justifyContent: "center" },
//   progressLabel: { color: "#CBD5E1", fontSize: 14, marginTop: 6, lineHeight: 20 },

//   green: { color: "#22C55E", fontWeight: "bold", fontSize: 18 },
//   gray: { color: "#CBD5E1", marginTop: 5, fontSize: 15 },
  
//   bulletPoint: { flexDirection: "row", alignItems: "flex-start", marginBottom: 10 },
//   bulletDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#7C3AED", marginTop: 8, marginRight: 10 },
//   item: { color: "white", fontSize: 16, lineHeight: 24, flex: 1 },

//   button: { backgroundColor: "#7C3AED", padding: 18, borderRadius: 16, marginTop: 10, shadowColor: "#7C3AED", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 8 },
//   buttonText: { color: "white", fontSize: 18, fontWeight: "bold", textAlign: "center" },
// });

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import {
  getDashboard,
  generateStrategy,
  getAnalytics,
} from "../api/api";

// ✅ 1. Hardcoded USER_ID hata diya

export default function DashboardScreen({
  onBack,
  onAnalytics,
  onProfile,
  userId, // ✅ 2. Props me userId le liya
}: any) {
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState<string[]>([]);
  const [strategy, setStrategy] = useState("");
  const [lastSync, setLastSync] = useState("");
  const [analytics, setAnalytics] = useState<any>({});

  useEffect(() => {
    // Agar userId nahi aaya hai to API call mat karo
    if (userId) {
      loadDashboard();
    } else {
      setLoading(false);
    }
  }, [userId]);

  async function loadDashboard() {
    try {
      // ✅ 3. Hardcoded ki jagah prop wala userId use kiya
      const data = await getDashboard(userId);
      setTopics(data.more_topics || []);
      setLastSync(data.created_at || "");

      const ai = await generateStrategy(data.more_topics || []);
      setStrategy(ai.strategy || "");

      const stats = await getAnalytics(userId);
      console.log("Analytics =", stats);
      setAnalytics(stats || {}); 

    } catch (e) {
      console.log("Error fetching data:", e);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#7C3AED" />
      </View>
    );
  }

  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContent}
    >
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>👋 Hello Sakshi</Text>
      <Text style={styles.subtitle}>FeedFlow AI Dashboard</Text>

      {/* Navigation Buttons */}
      <View style={styles.navButtonsRow}>
        <TouchableOpacity style={styles.navButton} onPress={onAnalytics} activeOpacity={0.7}>
          <Text style={styles.navButtonIcon}>📊</Text>
          <Text style={styles.navButtonText}>Analytics</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navButton} onPress={onProfile} activeOpacity={0.7}>
          <Text style={styles.navButtonIcon}>👤</Text>
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Merged Feed Score & Weekly Progress */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📊 Feed Score & Progress</Text>
        <View style={styles.scoreRowContainer}>
          <View style={styles.scoreContainer}>
            <Text style={styles.score}>{analytics.feed_score || 0}%</Text>
            <Text style={styles.scoreLabel}>Overall Score</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.progressContainer}>
            <Text style={styles.green}>📈 +{analytics.weekly_progress || 0}%</Text>
            <Text style={styles.progressLabel}>Feed quality improved this week</Text>
          </View>
        </View>
      </View>

      {/* Instagram Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📱 Instagram</Text>
        <Text style={styles.green}>
          {analytics.instagram_connected ? "🟢 Connected" : "🔴 Not Connected"}
        </Text>
        <Text style={styles.gray}>Last Sync</Text>
        <Text style={styles.gray}>{analytics.last_sync || "N/A"}</Text>
      </View>

      {/* Automation Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🤖 Automation</Text>
        <Text style={styles.green}>
          {analytics.automation_running ? "🟢 Running" : "🔴 Stopped"}
        </Text>
        <Text style={styles.gray}>AI is improving your feed</Text>
      </View>

      {/* Progress Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>📈 Progress</Text>
        <Text style={styles.score}>{analytics.progress || 0}%</Text>
        <Text style={styles.gray}>
          Actions Completed: {analytics.actions_completed || 0}
        </Text>
      </View>

      {/* Interests */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🎯 Your Interests</Text>
        {topics.map((item, index) => (
          <View key={index} style={styles.bulletPoint}>
            <View style={styles.bulletDot} />
            <Text style={styles.item}>{item}</Text>
          </View>
        ))}
      </View>

      {/* AI Strategy */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💡 AI Strategy</Text>
        <Text style={styles.item}>{strategy}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={loadDashboard}>
        <Text style={styles.buttonText}>Refresh Dashboard</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0F172A" },
  scrollContent: { padding: 20, paddingBottom: 40 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#0F172A" },
  backButton: { marginTop: 50, marginBottom: 20, alignSelf: "flex-start" },
  backText: { color: "#94A3B8", fontSize: 18, fontWeight: "600" },
  title: { color: "white", fontSize: 32, fontWeight: "bold" },
  subtitle: { color: "#94A3B8", fontSize: 16, marginBottom: 24, marginTop: 4 },
  
  navButtonsRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 24 },
  navButton: { flex: 1, backgroundColor: "#1E293B", padding: 18, borderRadius: 18, marginHorizontal: 6, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#334155", shadowColor: "#000000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.2, shadowRadius: 6, elevation: 4 },
  navButtonIcon: { fontSize: 28, marginBottom: 8 },
  navButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },

  card: { backgroundColor: "#1E293B", padding: 20, borderRadius: 20, marginBottom: 16, borderWidth: 1, borderColor: "#334155", shadowColor: "#000", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 5 },
  cardTitle: { color: "white", fontSize: 18, fontWeight: "bold", marginBottom: 16 },
  
  scoreRowContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  scoreContainer: { flex: 1, alignItems: "center" },
  score: { fontSize: 42, fontWeight: "bold", color: "#7C3AED" },
  scoreLabel: { color: "#94A3B8", fontSize: 13, marginTop: 4, fontWeight: "500" },
  verticalDivider: { width: 1, height: 50, backgroundColor: "#334155", marginHorizontal: 15 },
  progressContainer: { flex: 1.2, justifyContent: "center" },
  progressLabel: { color: "#CBD5E1", fontSize: 14, marginTop: 6, lineHeight: 20 },

  green: { color: "#22C55E", fontWeight: "bold", fontSize: 18 },
  gray: { color: "#CBD5E1", marginTop: 5, fontSize: 15 },
  
  bulletPoint: { flexDirection: "row", alignItems: "flex-start", marginBottom: 10 },
  bulletDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#7C3AED", marginTop: 8, marginRight: 10 },
  item: { color: "white", fontSize: 16, lineHeight: 24, flex: 1 },

  button: { backgroundColor: "#7C3AED", padding: 18, borderRadius: 16, marginTop: 10, shadowColor: "#7C3AED", shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 8 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "bold", textAlign: "center" },
});