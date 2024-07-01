"use client";
import React from "react";
import { getblog } from "./action";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const token = "Bearer 69f983cf-3b74-4eef-8605-2426eb177186";
  const [blog, Setblog] = useState([]);
  const [result, setResult] = React.useState();

  const initblog = async () => {
    try {
      const result = await getblog();
      Setblog(result);
    } catch (error) {
      console.log("error", error);
    }
  };

  async function getData() {
    const res = await fetch(
      "https://authenucws.nhso.go.th/authencodestatus/api/check-authen-status?personalId=3820100073180&serviceDate=2024-05-28&serviceCode=PG0060001",
      {
        mode: "no-cors",
        method: "GET",
        headers: {
          Authorization: "Bearer 69f983cf-3b74-4eef-8605-2426eb177186",
        },
      }
      /* .then((res) => res.json())
        .then((json) => setResult(json)) */
    );
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    console.log(result);
    return res.json();
  }

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
    initblog();
  }, [status, router, result]);
  // When after loading success and have session, show profile
  return (
    status === "authenticated" &&
    session.user && (
      <div className="flex h-screen items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <table></table>
          {blog.map((blog, index) => (
            <li key={index}>test{blog.user}</li>
          ))}

          <p>
            Welcome, <b>{session.user.name}!</b>
          </p>
          <p>Email: {session.user.email}</p>
          <p>Role: {session.user.role}</p>
          <p>jwt: {session.user.jwt}</p>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
}
