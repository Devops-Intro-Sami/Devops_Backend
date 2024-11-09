@echo off
echo Stopping Docker containers...
docker-compose down

echo Rebuilding and starting Docker containers...
docker-compose up --build -d

echo Docker containers have been rebuilt and started.
pause
