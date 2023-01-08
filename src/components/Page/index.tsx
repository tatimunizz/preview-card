import { ReactElement } from "react";
import { PageContainer } from "./styles";

interface PageProps {
  children: ReactElement[]
}

export function Page({ children } : PageProps) {
  return(
    <PageContainer>
      {children}
    </PageContainer>
  )
}