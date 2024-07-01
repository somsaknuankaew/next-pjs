"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
export async function getblog() {
  try {
    const session = await getServerSession(authOptions);
    const jwt = session?.user?.jwt;
    //console.log(jwt);
    const response = await fetch("http://localhost:5000/api/productlist", {
      method: "POST",
      body: JSON.stringify({ token: jwt }),
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}

export async function getright() {
  try {
    const session = await getServerSession(authOptions);
    const jwt = session?.user?.jwt;
    //console.log(jwt);
    const response = await fetch("http://localhost:5000/api/productlist", {
      method: "POST",
      body: JSON.stringify({ token: jwt }),
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
  }
}
