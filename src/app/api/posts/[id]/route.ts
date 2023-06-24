import {NextRequest, NextResponse} from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request : NextRequest, {params} : {params: {id: string | number}}) => {
    const {id} = params;
    try {
        await connect();
        const post = await Post.findById(id);
        // @ts-ignore
        return new NextResponse(JSON.stringify(post), {status: 200});

    } catch (e) {
        return new NextResponse("Database Error!", {status: 500});
    }
}