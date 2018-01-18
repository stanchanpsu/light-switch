#!/bin/bash

rm -rf node_modules
npm install
zip -r light-switch.zip .
aws lambda update-function-code --function-name light-switch --zip-file fileb://light-switch.zip