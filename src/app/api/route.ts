// import { NextApiRequest, NextApiResponse } from "next";

import { headers } from "next/headers";
import { userAgent } from "next/server";

export async function GET(request: Request) {
  const headersList = headers();

  const agent = userAgent(request);
  // const ip = headersList.get("x-forwarded-for");
  const ip =
    request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for");

  console.dir({ ip, agent }, { depth: null });

  const data = {
    success: true,
    ip_address: ip,
    user_agent: agent.ua,
  };

  return Response.json(data, {
    status: 500,
    statusText: "I know who are you!",
    headers: headersList,
  });
}
