import os
from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from datetime import datetime
from cv_data import cv_data

# Load environment variables
load_dotenv()

API_KEY = os.getenv("API_KEY")

app = FastAPI()

# Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# API Key Authentication Middleware/Dependency
async def verify_api_key(x_api_key: str = Header(None)):
    if not x_api_key:
        raise HTTPException(
            status_code=401,
            detail={
                "error": "Unauthorized",
                "message": "API key is required. Please provide X-API-Key header."
            }
        )
    
    if x_api_key != API_KEY:
        raise HTTPException(
            status_code=403,
            detail={
                "error": "Forbidden",
                "message": "Invalid API key."
            }
        )
    return x_api_key

# Health check (no authentication required)
@app.get("/health")
async def health_check():
    return {"status": "ok", "timestamp": datetime.now().isoformat()}

# Protected API Routes
@app.get("/api/profile", dependencies=[Depends(verify_api_key)])
async def get_profile():
    return cv_data["profile"]

@app.get("/api/experience", dependencies=[Depends(verify_api_key)])
async def get_experience():
    return cv_data["experience"]

@app.get("/api/education", dependencies=[Depends(verify_api_key)])
async def get_education():
    return cv_data["education"]

@app.get("/api/skills", dependencies=[Depends(verify_api_key)])
async def get_skills():
    return cv_data["specialties"]

@app.get("/api/certificates", dependencies=[Depends(verify_api_key)])
async def get_certificates():
    return cv_data["certificates"]

@app.get("/api/hobbies", dependencies=[Depends(verify_api_key)])
async def get_hobbies():
    return cv_data["hobbies"]

# Get all CV data (protected)
@app.get("/api/cv", dependencies=[Depends(verify_api_key)])
async def get_cv():
    return cv_data


# Local mode
if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 3001))
    print(f"🚀 CV Backend API running on http://localhost:{port}")
    print(f"📊 API endpoints available at http://localhost:{port}/api/cv")
    if not API_KEY:
         print('⚠️  WARNING: No API_KEY set in environment variables!')
    else:
        print(f"🔐 API Key authentication enabled")

    uvicorn.run(app, host="0.0.0.0", port=port)

# Cloudflare Workers
else:
    import asgi
    from workers import WorkerEntrypoint

    class Default(WorkerEntrypoint):
        async def fetch(self, request):
            return await asgi.fetch(app, request, self.env)