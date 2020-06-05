## Replace <APP_NAME> for you app name
#heroku create <APP_NAME> or git init && heroku git:remote -a <APP_NAME>
git add .
git commit -m "First Commit"
heroku buildpacks:set mars/create-react-app -a <APP_NAME>
git push heroku master
