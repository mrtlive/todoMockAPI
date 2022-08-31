import Container from "./components/Container";
import { ProviderAPI } from "./Context/ContextAPI";
import { useState } from "react";
function App() {
  return (
    <div>
      <ProviderAPI>
        <Container />
      </ProviderAPI>
    </div>
  );
}

export default App;
