from fastapi import APIRouter
from app.gemini import generate_strategy

router = APIRouter()

@router.post("/generate-strategy")
def generate(data: dict):

    strategy = generate_strategy(
        data["interests"]
    )

    return {
        "strategy": strategy
    }