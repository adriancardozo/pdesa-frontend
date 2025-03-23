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
And then got to http://localhost