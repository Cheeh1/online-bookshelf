"use client";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { ReduxProvider } from "../redux/provider";

const ScreenLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="py-16 mt-24 flex flex-col gap-1 justify-center items-center">
        <p className="font-bold text-2xl">You can&apos;t <span className="text-secondary">access</span> this page.</p>
        <p className="font-medium text-xl">Please <span className="text-secondary">login</span> to get access.</p>
      </div>
    );
  } else {
    return (
      <>
        <main className="">
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </>
    );
  }
};
export default ScreenLayout;
