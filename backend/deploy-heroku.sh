# heroku create <app name>
docker build --tag web .
heroku container:login
heroku container:push web
heroku container:release web
heroku ps:scale web=1