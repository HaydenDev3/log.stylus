# Log Stylus by [Hayden](https://haydenf.cloud)

A NPM package designed specifcially made for easily styling up the way you log things inside your console.
I originally made this package to stop me from making a Log file which is the same file provided in this package; it is also developed, so I can easily implement it anytime, anywhere.

<img src="https://cdn.discordapp.com/attachments/1043703631721021530/1115810457857564793/Almost1000Downloads.png" alt="achievement test" />
No need to download 1.5.7, 1.5.8 and 1.5.6 it's just updates to the README.md <3 :)

## Installation

To use the `Log` class, you need to have Node.js installed. Then, you can install the required dependencies by running the following command:

```shell
NPM:
npm install log.stylus@latest
or Yarn:
yarn add log.stylus@latest
```

## Usage

```js
const { Log } = require("log.stylus");
Log.info("Hello World!");
```

## Using TypeScript?

This project is completely compatiable with **TypeScript**; you don't need to install any third-party @types/ library for using this with TypeScript.

## Logging Messages

The `Log` class provides several methods for different types of log messages:

- `info(message: string, src?: string)`: Log an information message.
- `error(error: Error, src?: string)`: Log an error message.
- `success(message: string, src?: string)`: Log a success message.
- `warning(message: string, src?: string)`: Log a warning message.
- `custom(message: string, type: string, src?: string)`: Log a custom message with a specified type.

```js
Log.info("This is an information message");
Log.error(new Error("Something went wrong"));
Log.success("Operation completed successfully");
Log.warning("This is a warning message");
Log.custom("Custom message", "DEBUG");
```

## Styling

The Package applies styling to the log messages using the colors package. The styling may vary depending on the console environment.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
