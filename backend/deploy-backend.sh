PORT=80;export PORT
docker build --tag backend .
docker run -ti --rm -p $PORT:$PORT -e PORT=$PORT --name backend -d backend