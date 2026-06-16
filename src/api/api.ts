
const BASE_URL = "https://feedflow-ai.onrender.com";

/* ---------------- Dashboard ---------------- */

export async function getDashboard(userId: string) {

  const res = await fetch(
    `${BASE_URL}/dashboard/${userId}`
  );

  if (!res.ok) {
    throw new Error("Dashboard API Error");
  }

  return await res.json();
}


/* ---------------- AI Strategy ---------------- */

export async function generateStrategy(
  interests: string[]
) {

  try {

    const res = await fetch(
      `${BASE_URL}/generate-strategy`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          interests,
        }),
      }
    );

    if (!res.ok) {

      console.log(
        "Strategy API Error:",
        await res.text()
      );

      return {
        strategy:
          "AI strategy temporarily unavailable.",
      };

    }

    return await res.json();

  } catch (error) {

    console.log(
      "Strategy Fetch Error:",
      error
    );

    return {
      strategy:
        "AI strategy temporarily unavailable.",
    };

  }

}


/* ---------------- Analytics ---------------- */

export async function getAnalytics(
  userId: string
) {

  try {

    const res = await fetch(
      `${BASE_URL}/analytics/${userId}`
    );

    if (!res.ok) {

      console.log(
        "Analytics API Error:",
        await res.text()
      );

      return {};

    }

    return await res.json();

  } catch (error) {

    console.log(
      "Analytics Fetch Error:",
      error
    );

    return {};

  }

}


/* ---------------- Login ---------------- */

export async function loginUser(
  email: string,
  password: string
) {

  const response = await fetch(
    `${BASE_URL}/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  if (!response.ok) {

    const error = await response.text();

    console.log(error);

    throw new Error("Login failed");

  }

  return await response.json();

}


/* ---------------- Signup ---------------- */

export async function signupUser( name: string, email: string, password: string ) { const response = await fetch( `${BASE_URL}/signup`, { method: "POST", headers: { "Content-Type": "application/json", }, body: JSON.stringify({ name, email, password, }), } ); const data = await response.json(); if (!response.ok) { console.log("Signup Error =", data); throw new Error( data.detail || "Signup failed" ); } return data; }
