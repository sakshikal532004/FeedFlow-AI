
from fastapi import APIRouter
from app.database import supabase

router = APIRouter()

@router.get("/dashboard/{user_id}")
def get_dashboard(user_id: str):

    response = (
        supabase
        .table("preferences")
        .select("*")
        .eq("user_id", user_id)
        .execute()
    )

    if len(response.data) == 0:
        return {
            "message": "No preferences found"
        }

    data = response.data[0]

    return {
        "user_id": data["user_id"],
        "more_topics": data["more_topics"],
        "less_topics": data["less_topics"],
        "created_at": data["created_at"]
    }

