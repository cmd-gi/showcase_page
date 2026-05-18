import React, { useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Cursor from "./components/Cursor";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Works />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route>
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground font-display text-4xl">
          404 | Not Found
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
