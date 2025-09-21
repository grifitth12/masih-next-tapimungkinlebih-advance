import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    return Response.json({
        message: "User Get Response",
        query
    });
}

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    return Response.json({
        message: "User Post Response",
        data: body
    });
}

export async function PUT(request: Request) {
    const body = await request.json();
    return Response.json({
        message: "User Put Response",
        data: body
    });
}

export async function DELETE(request: Request) {
    const body = await request.json();
    return Response.json({
        message: "User Delete Response",
        data: body
    });
}

export async function PATCH(request: Request) {
    const body = await request.json();
    return Response.json({
        message: "User Patch Response",
        data: body
    });
}

export async function HEAD() {
    return Response.json({
        message: "User Head Response"
    });
}

export async function OPTIONS() {
    return Response.json({
        message: "User Options Response"
    });
}