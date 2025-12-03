from fastapi import FastAPI, Depends, HTTPException, Query
import sqlite3
from fastapi.middleware.cors import CORSMiddleware
import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

url: str = os.environ["SUPABASE_URL"]
key: str = os.environ["SUPABASE_KEY"]
supabase: Client = create_client(url, key)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "https://pillionpal.vercel.app",
    "https://pillionpal.in",
    "http://localhost:3000"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATABASE = 'database.db'

def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row  # rows behave like dicts
    try:
        yield conn
    finally:
        conn.close()
@app.get("/")
def read_root():
    return {"message": "Welcome to the Student Certificate Verification API"}

@app.get("/certificate-verification/")
def verify_certificate(id: int):
    query = supabase.table('students').select('*').eq('certificate_id', id).execute()
    if query.data:
        return {
            "message": "Certificate valid",
            "data": dict(query.data[0])  # convert row to dict
        }
    else:
        raise HTTPException(status_code=404, detail="Certificate not found")
