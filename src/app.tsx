import React from "react";
import { RouterComponent, CarryContainer } from "./components";
import { ImageProvider } from "./components/image";
import * as Sentry from "@sentry/react";
import { css } from "emotion";

function FallbackComponent() {
  return <div>An error has occured</div>;
}

const principalStyle = css`
  display: grid;
  grid-template-columns: auto 320px;
`;

export const App: React.FC = () => {
  return (
    <Sentry.ErrorBoundary fallback={FallbackComponent} showDialog>
      <div className={principalStyle}>
        <ImageProvider>
          <RouterComponent />
          <CarryContainer />
        </ImageProvider>
      </div>
    </Sentry.ErrorBoundary>
  );
};
