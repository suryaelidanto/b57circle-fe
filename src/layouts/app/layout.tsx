import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { LeftBar } from "./components/left-bar";
import { RightBar } from "./components/right-bar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  //TODO: make check for token from cookies

  return (
    <Box display={"flex"}>
      <LeftBar />

      <Box w={"561px"} p={"30px"}>
        {children}
      </Box>

      <RightBar />
    </Box>
  );
}
