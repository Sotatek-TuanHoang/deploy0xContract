#!/bin/bash

echo "############################ INSTALL NODE_MODULES ################################"
yarn install

echo "############################ BUILD CONTRACT ################################"
yarn install
yarn build:contracts

echo "############################ START CONTRACT ################################"

ts-node deploy-v4.ts

echo "############################ END DEPLOY CONTRACT ################################"



