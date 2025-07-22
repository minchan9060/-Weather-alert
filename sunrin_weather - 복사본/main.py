import os
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

from app.database import engine
from app import models
from app.router import auth

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app.include_router(auth.router, prefix="/auth", tags=["auth"])
STATIC_DIR = os.path.join(BASE_DIR, "app")

@app.get("/")
def read_root():
    return {"message" : "hello"}