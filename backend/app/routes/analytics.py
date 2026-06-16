from fastapi import APIRouter
from app.database import supabase

router = APIRouter()

@router.get("/analytics/{user_id}")
def get_analytics(user_id: str):

    response = (
        supabase
        .table("analytics")
        .select("*")
        .eq("user_id", user_id)
        .execute()
    )

    if len(response.data) == 0:
        return {
            "progress": 0,
            "actions_completed": 0,
            "last_sync": "",
            "feed_score": 0,
            "weekly_progress": 0,
            "instagram_connected": False,
            "automation_running": False,
        }

    return response.data[0]

