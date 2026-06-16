from pydantic import BaseModel
from typing import List

# Preferences
class PreferenceRequest(BaseModel):
    user_id: str
    interests: List[str]

# Signup
class SignupRequest(BaseModel):
    name: str
    email: str
    password: str

# Login
class LoginRequest(BaseModel):
    email: str
    password: str