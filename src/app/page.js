import { CartProvider } from "@/context/Usecontext";


import Home from "./home/Home";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
