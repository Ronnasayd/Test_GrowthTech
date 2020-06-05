docker build --tag web .
docker run -ti --rm -p 3333:3333 --name web -d web