import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, description } = body;

  const newEvent = await prisma.event.create({
    data: {
      name: name,
      description: description,
    },
  });

  return NextResponse.json(newEvent, { status: 201 });
}
