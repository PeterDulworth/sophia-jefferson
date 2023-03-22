## Deploy

#### deploying to sophiajefferson.com
to deploy to [sophiajefferson.com](http://sophiajefferson.com/), change the `homepage` field in `package.json` to 
```bash
"homepage": "http://sophiajefferson.com/",
```
and run
```shell script
npm run build
```
then copy the contents of the `build` directory to the server (`/public_html/additional_websites/sophiajefferson.com`).

#### deploying to github pages
to deploy to [peterdulworth.github.io/sophia-jefferson](https://peterdulworth.github.io/sophia-jefferson/), change the `homepage` field in `package.json` to 
```bash
"homepage": "https://peterdulworth.github.io/sophia-jefferson",
```
and run
```shell script
npm run deploy
```
this will push to the gh-pages branch and auto deploy

## Local Dev

```bash
npm install
npm run start
```
