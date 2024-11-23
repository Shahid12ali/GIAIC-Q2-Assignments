import { books } from "@/data";
import { NextRequest, NextResponse } from "next/server";

// GET request handler
export const GET = async () => {
  return NextResponse.json(books, { status: 200 });
};

// POST request handler
export const POST = async (request: NextRequest): Promise<NextResponse> => {
  try {
    const newBook = await request.json(); // Parse incoming request data
    newBook.id = books.length + 1; // Assign a unique ID
    books.push(newBook); // Add new book to the array

    return NextResponse.json({ newBook }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid data", error: error.message },
      { status: 400 }
    );
  }
};

