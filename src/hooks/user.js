import { useContext } from "react";
import { UserContext } from "contexts/userContext";

export const useUserInfo = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "useInstallationInfo must be used within a InstallationProvider"
    );
  }

  return context;
};
