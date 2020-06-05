# heroku create <app name>
heroku container:login
heroku container:push web
heroku container:release web
heroku ps:scale web=1