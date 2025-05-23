import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    console.log("🔹 API /api/wishlist/add called");

    // Get userId from the headers
    const userId = req.headers.get("x-user-id");
    console.log("✅ Extracted User ID:", userId || "No userId found in headers");

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized: User ID missing" }, { status: 401 });
    }

    const { productId } = await req.json();

    // Validate input
    if (!productId) {
      return NextResponse.json({ error: "Invalid input: productId is required" }, { status: 400 });
    }

    // Check if the product exists
    const product = await prisma.productDetails.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Check if the product is already in the user's wishlist
    const existingWishlistItem = await prisma.wishlist.findUnique({
      where: {
        userId_productId: { userId, productId }, // Uses the unique constraint
      },
    });

    if (existingWishlistItem) {
      return NextResponse.json({ error: "Product already in wishlist" }, { status: 409 });
    }

    // Add to wishlist
    const wishlistItem = await prisma.wishlist.create({
      data: {
        userId,
        productId,
      },
    });

    console.log("✅ Product added to wishlist with ID:", wishlistItem.id);

    return NextResponse.json({ message: "Product added to wishlist", wishlistItem }, { status: 201 });
  } catch (error) {
    console.error("❌ Server Error:", (error as Error).message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
