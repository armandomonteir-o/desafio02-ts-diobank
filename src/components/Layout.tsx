import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./Header/Header"

export const Layout = ({ children }: any) => {
  return(
    <>
      <Box
        minHeight={'100vh'}
        background={"linear-gradient(100deg, rgba(67, 56, 202, 1) 0%, rgba(255, 255, 255, 1) 100%)"}
        minH={"100vh"}
        display="flex"
        flexDirection={"column"}>
        
        <Header />
        
        <Box flex="1" paddingTop="20px" paddingBottom="20px">
          {children}
        </Box>

        <Footer />
      
      </Box>
    </>
  )
}
