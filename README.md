## Deploy

#### deploying to sophiajefferson.com
to deploy to sophiajefferson.com, change the "homepage" field in `package.json` to 
```javascript
"homepage": "http://sophiajefferson.com/",
```
and run
```shell script
npm run build
```
then copy the contents of the `build` directory to the server.

#### deploying to github pages
to deploy to peterdulworth.github.io/sophia-jefferson, change the "homepage" field in `package.json` to 
```javascript
"homepage": "https://peterdulworth.github.io/sophia-jefferson",
```
and run
```shell script
npm run deploy
```
this will push to the gh-pages branch and auto deploy
