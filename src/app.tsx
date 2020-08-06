import React from "react";
import { RouterComponent } from "./components";
import { ImageProvider } from "./components/image";
import * as Sentry from "@sentry/react";

function FallbackComponent() {
  return <div>An error has occured</div>;
}

export const App: React.FC = () => {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <ImageProvider>
        <RouterComponent />
      </ImageProvider>
    </Sentry.ErrorBoundary>
  );
};
