#!/bin/sh

rm -rf public coverage docs node_modules

npm install

mkdir public

npm run coverage

mv coverage public/

npm run document

mv docs public/

mkdir public/img

npm run dependencies

mv dependencies.svg public/img/

npm run dependencies-test

mv dependencies-test.svg public/img/

npm run pages-index

exit 0

