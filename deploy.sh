# React stuff
cd hiking_frontend
npm run build
cp -a build/. ../hiking_backend/hiking_backend/static/
# above line copies the files produced by the npm run build (static files) and copies them into the following folder (where we told Django to look for static files)

git commit -am "Bundling app for Heroku deployment"
git push heroku