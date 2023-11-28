import posts from "@/utils/posts"

export async function GET(request) {
    const data = posts
    return new Response(JSON.stringify(data))
}

