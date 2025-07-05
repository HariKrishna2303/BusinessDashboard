import "./App.css";

import { BusinessProvider } from "./context/BusinessContext";
import BusinessForm from "./components/BusinessForm";
import BusinessCard from "./components/BusinessCard";

export default function App() {
  return (
    <BusinessProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="max-w-xl w-full">
          <BusinessForm />
          <BusinessCard />
        </div>
      </div>
    </BusinessProvider>
  );
}
