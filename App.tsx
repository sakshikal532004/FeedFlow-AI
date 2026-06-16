import React, { useState } from "react";

import SplashScreen from "./src/screens/SplashScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen"; // ✅ Signup import kiya
import InterestScreen from "./src/screens/InterestScreen";
import DashboardScreen from "./src/screens/DashboardScreen";
import AnalyticsScreen from "./src/screens/AnalyticsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

export default function App() {
  const [screen, setScreen] = useState("splash");
  
  // ✅ 1. State banaya jo user login/signup karne par uski ID save karega
  const [loggedInUserId, setLoggedInUserId] = useState<string>("");

  // Splash
  if (screen === "splash") {
    return (
      <SplashScreen
        onNext={() => setScreen("onboarding")}
      />
    );
  }

  // Onboarding
  if (screen === "onboarding") {
    return (
      <OnboardingScreen
        onFinish={() => setScreen("login")}
      />
    );
  }

  // ✅ 2. Login Route Updated (ID save ho rahi hai + Signup par ja raha hai)
  if (screen === "login") {
    return (
      <LoginScreen
        onLogin={(id: string) => {
          setLoggedInUserId(id); // ID save karo
          setScreen("interest");
        }}
        onBack={() => setScreen("splash")}
        onGoToSignup={() => setScreen("signup")} // ✅ Sign Up button ka prop
      />
    );
  }

  // ✅ 3. NAYA: Signup Route Added
  if (screen === "signup") {
    return (
      <SignupScreen
        onSignup={(id: string) => {
          setLoggedInUserId(id); // ID save karo
          setScreen("interest"); // Signup ke baad direct interest par bhejo
        }}
        onBack={() => setScreen("login")}
      />
    );
  }

  // Interest
  if (screen === "interest") {
    return (
      <InterestScreen
        onContinue={() => setScreen("dashboard")}
        onBack={() => setScreen("login")}
      />
    );
  }

  // ✅ 4. Dashboard Route Updated (ID pass ho rahi hai)
  if (screen === "dashboard") {
    return (
      <DashboardScreen
        userId={loggedInUserId} // ✅ Yahan ID ja rahi hai
        onBack={() => setScreen("interest")}
        onAnalytics={() => setScreen("analytics")}
        onProfile={() => setScreen("profile")}
      />
    );
  }

  // Analytics
  if (screen === "analytics") {
    return (
      <AnalyticsScreen
        onBack={() => setScreen("dashboard")}
      />
    );
  }

  // Profile
  if (screen === "profile") {
    return (
      <ProfileScreen
        onBack={() => setScreen("dashboard")}
        onLogout={() => {
          setLoggedInUserId(""); // ✅ Logout par ID clear karo
          setScreen("splash");
        }}
      />
    );
  }

  return null;
}