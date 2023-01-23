import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
interface iProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: iProviderProps) => (
  <ChakraProvider>{children}</ChakraProvider>
);
