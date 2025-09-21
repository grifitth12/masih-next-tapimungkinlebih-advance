
export async function GET(request: Request, { params }: { params: Promise<{ id : string}>}) {
    const {id} = await params;
    return Response.json({
        message: "User Get Response",
        user: { id, name: "John Doe", email: "john.doe@example.com", role: "admin", active: true, createdAt: "2023-01-01T00:00:00Z", updatedAt: "2023-01-01T00:00:00Z", avatar: "https://example.com/avatar.jpg", bio: "Lorem ipsum dolor sit amet", location: "Earth", website: "https://example.com", phone: "+1234567890", birthday: "1990-01-01" }
    });
}

export async function POST() {
    return Response.json({
        message: "User Post Response"
    });
}
export async function PUT() {
    return Response.json({
        message: "User Put Response"
    });
}

export async function DELETE() {
    return Response.json({
        message: "User Delete Response"
    });
}

export async function PATCH() {
    return Response.json({
        message: "User Patch Response"
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