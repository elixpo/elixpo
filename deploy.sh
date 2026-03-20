#!/bin/bash
set -e

PROJECT_NAME="elixpo"
BUILD_DIR="out"

usage() {
  echo "Usage: ./deploy.sh [build|deploy]"
  echo "  build   - Build the static site using Next.js"
  echo "  deploy  - Deploy the built site to Cloudflare Pages"
  exit 1
}

build() {
  echo "Building static site..."
  rm -rf "$BUILD_DIR" .next
  npx next build
  echo "Build complete. Output in $BUILD_DIR/"
}

deploy() {
  if [ ! -d "$BUILD_DIR" ]; then
    echo "Error: $BUILD_DIR/ not found. Run './deploy.sh build' first."
    exit 1
  fi
  echo "Deploying to Cloudflare Pages..."
  npx wrangler pages deploy "$BUILD_DIR" --project-name="$PROJECT_NAME"
  echo "Deploy complete."
}

case "${1}" in
  build)
    build
    ;;
  deploy)
    deploy
    ;;
  *)
    usage
    ;;
esac
