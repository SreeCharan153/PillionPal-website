from fastapi import FastAPI, Depends, HTTPException, Query
import sqlite3
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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
def verify_certificate(id: int = Query(...), db: sqlite3.Connection = Depends(get_db)):
    cursor = db.cursor()
    cursor.execute("SELECT * FROM students WHERE certificate_id = ?", (id,))
    result = cursor.fetchone()
    if result:
        return {
            "message": "Certificate valid",
            "data": dict(result)  # convert row to dict
        }
    else:
        raise HTTPException(status_code=404, detail="Certificate not found")
