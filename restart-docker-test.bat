@echo off
echo Stopping Docker containers...
docker-compose -f docker-compose_test.yml down

docker volume rm devops_backend_pgdata

echo Rebuilding and starting Docker containers...
docker-compose -f docker-compose_test.yml up --build -d

echo Docker containers have been rebuilt and started.
pause
