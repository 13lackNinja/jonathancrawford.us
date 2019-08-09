#!/bin/bash

rm -rf build
cd client
npm run build
mv build ../build
cd ..
