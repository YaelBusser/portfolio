set -e
npm run build

cd dist

git init
git add -A
git commit -m "Deploiment"
git push -f https://github.com/YaelBusser/portfolio.git master:gh-pages

cd -