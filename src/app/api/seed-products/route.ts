import { NextRequest, NextResponse } from "next/server";
import { runCatalogSeeding } from "@/scripts/seed-catalog-products";

export const dynamic = "force-dynamic";

/**
 * GET /api/seed-products
 * Triggers draft catalog seeding with default options (forceUpdate=true, defaultActive=false).
 */
export async function GET() {
  try {
    const result = await runCatalogSeeding({
      forceUpdate: true,
      defaultActive: false, // Strict user mandate: default to draft mode
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("[API seed-products] GET Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: `Failed to seed products: ${error?.message || "Internal server error"}`,
      },
      { status: 500 }
    );
  }
}

/**
 * POST /api/seed-products
 * Accepts optional JSON body: { forceUpdate?: boolean, defaultActive?: boolean }
 */
export async function POST(req: NextRequest) {
  try {
    let body: any = {};
    try {
      body = await req.json();
    } catch {
      // Body is optional
    }

    const forceUpdate = typeof body?.forceUpdate === "boolean" ? body.forceUpdate : true;
    const defaultActive = typeof body?.defaultActive === "boolean" ? body.defaultActive : false;

    const result = await runCatalogSeeding({
      forceUpdate,
      defaultActive,
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error("[API seed-products] POST Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: `Failed to seed products: ${error?.message || "Internal server error"}`,
      },
      { status: 500 }
    );
  }
}
