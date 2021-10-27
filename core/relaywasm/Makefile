DOCKER_REGISTRY ?= ghcr.io/hyperledger-labs
PROTOS_TAG ?= v0.7

COMMIT = $(shell git log -1 --oneline | cut -d ' ' -f 1)
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
TIMESTAMP = $(shell date +%FT%T%z)
GIT_URL = https://github.com/hyperledger-labs/weaver-dlt-interoperability

.PHONY: all
all: 	build-local

# This target is used to provision the protobuf definitions that are required
# to build the scaffolds of the relay GRPC service.
protos-local:
	@echo -e "\033[1mFETCH\033[0m - Calling update-protos-local script..."
	../relay/scripts/update-protos-local.sh

# Builds the relay binary.
.PHONY: build-local
build-local:	protos-local
	@echo -e "\033[1mBUILD\033[0m - Successfully updated protos, compiling Rust to Wasm..."
	wasm-pack build --target=nodejs

# Cleans up all the build artifacts.
#
.PHONY: clean
clean:
	@echo -e "\033[1mCLEAN\033[0m - Removing all artifacts..."
	-rm -rf protos
	cargo clean
