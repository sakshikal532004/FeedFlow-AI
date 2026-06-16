from app.database import supabase

def save_preferences(user_id, interests):

    data = {
        "user_id": user_id,
        "more_topics": interests,
        "less_topics": []
    }

    response = (
        supabase
        .table("preferences")
        .insert(data)
        .execute()
    )

    return response