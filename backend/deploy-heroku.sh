## Replace <APP_NAME> for you app name
#heroku create <APP_NAME> or git init && heroku git:remote -a <APP_NAME>
docker build --tag web .
heroku container:login
heroku container:push web
heroku container:release web
heroku ps:scale web=1