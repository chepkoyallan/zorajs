PROTO_DIR=./src

tools:
	 npm i -g grpc-tools

gen:
	protoc -I=. ./protos/kafka.proto \
	--js_out=import_style=commonjs,binary:${PROTO_DIR} \
	--grpc_out=${PROTO_DIR} \
	--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`

install-volta:
	curl https://get.volta.sh | bash

ignore:
	npx gitignore node

init-yarn:
	yarn init --yes

devdep:
	yarn add -D typescript eslint jest prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-promise@latest eslint-plugin-sonarjs eslint-plugin-node prettier/@typescript-eslint @typescript-eslint/eslint-plugin @typescript-eslint/eslint-plugin @typescript-eslint/parser

dep:
	yarn add @grpc/grpc-js google-protobuf @types/google-protobuf

volta:
	volta pin node yarn

tsconfig:
	yarn tsc --init

eslint:
	yarn eslint --init

build:
	yarn build

test:
	yarn test

lint: 
	yarn lint

api-extractor-init:
	yarn api-extractor init

run-api-local:
	yarn api-extractor run --local

run-api:
	yarn api-extractor run

api-documenter:
	yarn api-documenter markdown -i temp -o docs

produce:
	sh generate.sh