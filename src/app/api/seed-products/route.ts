import { NextResponse } from "next/server";
import { seedProductsSafe } from "@/seed";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const results = await seedProductsSafe();
    return NextResponse.json({
      success: true,
      message: "محصولات با موفقیت بررسی و درج شدند.",
      details: results,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "خطای نامشخص",
      },
      { status: 500 }
    );
  }
}
