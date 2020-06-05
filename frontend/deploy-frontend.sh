yarn build
docker build --tag frontend .
docker run --rm -it -p 80:80 --name frontend -d frontend