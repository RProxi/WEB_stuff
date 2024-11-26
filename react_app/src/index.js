import React from 'react';
import { createRoot } from 'react-dom/client';

const MyApp = () => {
  return (
    <div>
      <p>Hello, World!</p>
    </div>
  );
}

const domNode = document.getElementById("root")
const root = createRoot(domNode)
root.render(<MyApp/>)