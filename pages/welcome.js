"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/util/firebase/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function WelcomePage() {
  const [user] = useAuthState(auth);
  const router = useRouter();

  console.log("ASJDJAS");
  console.log(user);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <div className="container-fluid bg-dark text-light p-5">
      <h1 className="text-center">Welcome, {user?.email}!</h1>
      <p className="lead text-center">You are now signed in.</p>
    </div>
  );
}

export default WelcomePage;
