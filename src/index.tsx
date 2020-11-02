import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { App } from "./app";

Sentry.init({
  dsn:
    "https://81aeff47125c4f6eb881e898afba9389@o430470.ingest.sentry.io/5379849",
});

ReactDOM.render(<App />, document.getElementById("root"));
