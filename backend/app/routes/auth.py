
from fastapi import APIRouter, HTTPException
from app.database import supabase
from app.schemas import SignupRequest, LoginRequest

router = APIRouter()


@router.post("/signup")
def signup(data: SignupRequest):

    try:

        result = supabase.auth.sign_up({

            "email": data.email,

            "password": data.password,

            "options": {
                "data": {
                    "name": data.name
                }
            }

        })

        if result.user is None:
            raise HTTPException(
                status_code=400,
                detail="Signup failed"
            )

        return {
            "user_id": result.user.id,
            "email": result.user.email,
            "name": data.name
        }

    except Exception as e:

        raise HTTPException(
            status_code=400,
            detail=str(e)
        )


@router.post("/login")
def login(data: LoginRequest):

    try:

        result = supabase.auth.sign_in_with_password({

            "email": data.email,

            "password": data.password

        })

        if result.user is None:

            raise HTTPException(
                status_code=401,
                detail="Invalid credentials"
            )

        return {

            "user_id": result.user.id,

            "email": result.user.email,

            "name": result.user.user_metadata.get("name", ""),

            "access_token": result.session.access_token

        }

    except Exception as e:

        raise HTTPException(
            status_code=401,
            detail=str(e)
        )
