import { PropsWithChildren } from "react";
import { useAuth } from "../../lib/auth/AuthProvider"

export const AdminAccessGate = ({ children }: PropsWithChildren) => {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return null;
  }

  return (
    <>{children}</>
  )
}