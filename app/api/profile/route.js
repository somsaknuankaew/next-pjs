import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
export async function GET() {
  const session = await getServerSession(authOptions);
  const jwt = session?.user?.jwt;
  const res = await fetch("http://localhost:5000/api/productlist", {
    method: "POST",
    body: JSON.stringify({ token: jwt }),
    headers: {
      Accept: "application/json",
      "Content-Type": "Application/json",
    },
  });
  const data = res.json();
  return Response.json();
}
