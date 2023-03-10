# Wails balenaDevelop integration

<img width="1081" alt="wails-app" src="https://user-images.githubusercontent.com/64841595/220350794-9769de66-06e4-430d-9ab3-0cdb1a2412af.png">

## About

This project uses Wails to bring together [go-cli components](https://github.com/balena-labs-research/go-cli) and the [device-uis](https://github.com/balena-labs-research/starter-interface) framework to create a desktop application for development on balena devices.

It is a WIP proof of concept and is not yet ready for use. The CLI components are yet to be imported and linked with the frontend interface.

## Live Development

Run `npm config set legacy-peer-deps true` to allow npm to install the dependencies.

Start the development backend from the `frontend` directory, using `yarn dev`.

To run in live Wails development mode, run `wails dev` in the project directory.

> Note: The dev server is manually configured to run on port :5173
> in order to properly work with wails.
> If this needs to be changed, please adjust the quasar.conf.js and wails.json with the new port

## Building

To build a redistributable, production mode package, use `wails build`.
