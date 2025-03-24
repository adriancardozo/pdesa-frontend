# Frontend (Prácticas de desarrollo)

## Start frontend project locally
Run the following commands:
```bash
npm install
npm run dev
```

And then go to http://localhost:5173/

## Start frontend project using docker
Build image using the following command
```bash
docker build --pull --rm -f 'dockerfile' -t 'pdesa-frontend:latest' '.'
```
Create a container from this image
```bash
docker run -p "80:80" -e "VITE_BACKEND_URL=<backend_url>" pdesa-frontend
```
Replace <backend_url> with backend server url
And then go to http://localhost


## Start entire project using docker compose
Clone both backend and frontend repositories into same directory
```bash
git clone https://github.com/adriancardozo/pdesa-backend.git
git clone https://github.com/adriancardozo/pdesa-frontend.git
# ./
#  | pdesa-backend/
#  | pdesa-frontend/
```
Move to backend folder
```bash
cd pdesa-backend/
```
Copy docker-compose.yml.example file into a new docker-compose.yml file and set secret environment variables

Build images and run containers running the following command
```bash
docker compose -f 'docker-compose.yml' up -d --build
```
And then go to http://localhost to open frontend or http://localhost:3000/docs to open backend Swagger UI