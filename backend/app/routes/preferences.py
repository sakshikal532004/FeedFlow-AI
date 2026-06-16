from fastapi import APIRouter
from app.schemas import PreferenceRequest
from app.crud import save_preferences

router = APIRouter()

@router.post("/preferences")
def save(data: PreferenceRequest):

    response = save_preferences(
        data.user_id,
        data.interests
    )

    return response.data