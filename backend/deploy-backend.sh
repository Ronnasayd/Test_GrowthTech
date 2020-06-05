docker build --tag backend .
docker run -ti --rm -p 3333:3333 --name backend -d backend