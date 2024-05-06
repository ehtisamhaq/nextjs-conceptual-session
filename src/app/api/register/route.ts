import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const data = await req.json();
  console.log({ data });

  const user = await prisma.user.create({
    data,
  });

  return NextResponse.json({ data: user }, { status: 200 });
}
