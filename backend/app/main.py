from fastapi import FastAPI

from app.routes.preferences import router as preference_router
from app.routes.ai import router as ai_router
from app.routes.dashboard import router as dashboard_router
from app.routes.analytics import router as analytics_router
from app.routes.auth import router as auth_router

app = FastAPI(title="FeedFlow AI")

app.include_router(preference_router)
app.include_router(ai_router)
app.include_router(dashboard_router)
app.include_router(analytics_router)
app.include_router(auth_router)
@app.get("/")
def home():
    return {"message": "Backend Running 🚀"}