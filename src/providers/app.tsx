import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReactNode } from "react";
import { Button } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../lib/auth/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import { store } from '../lib/redux';

const queryClient = new QueryClient();

const ErrorFallback = () => (
  <div
    className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
    role="alert"
  >
    <h2 className="text-lg font-semibold">Ooops, something went wrong</h2>
    <Button onClick={() => window.location.assign(window.location.origin)}>
      Refresh
    </Button>
  </div>
);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <HelmetProvider>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AuthProvider>
              <Router>{children}</Router>
            </AuthProvider>
          </Provider>
          <ToastContainer position="bottom-right"/>
        </QueryClientProvider>
      </ChakraProvider>
    </HelmetProvider>
  </ErrorBoundary>
);
