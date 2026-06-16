
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

# Stable model
model = genai.GenerativeModel("gemini-1.5-flash")

def generate_strategy(interests):

    prompt = f"""
You are an Instagram Feed AI assistant.

User interests:
{', '.join(interests)}

Generate exactly 5 short actionable points
to improve the user's Instagram feed.

Return only plain text.
"""

    try:

        response = model.generate_content(prompt)

        if response.text:
            return response.text

        return "No strategy generated."

    except Exception as e:

        print("Gemini Error:", e)

        return "AI strategy unavailable."
