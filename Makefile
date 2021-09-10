tools:
	 npm i -g grpc-tools

gen:
	protoc -I=. ./protos/kafka.proto --js_out=import_style=commonjs,binary:./server --grpc_out=./server --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin`

install-volta:
	curl https://get.volta.sh | bash

ignore:
	npx gitignore node

init-yarn:
	yarn init --yes

devdep:
	yarn add -D typescript eslint jest

dep:
	yarn add @grpc/grpc-js google-protobuf

volta:
	volta pin node yarn