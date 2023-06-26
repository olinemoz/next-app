import {NextRequest, NextResponse} from "next/server";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import User from "@/models/User";

export const POST = async (request: NextRequest, response: NextResponse) => {
    const {name, email, password} = await request.json();
    console.log("name: ", name);

    await connect();

    const hashedPassword = await bcrypt.hash(password, 5)

    const newUser = new User({
        name,
        email,
        password: hashedPassword
    })

    try {
      await newUser.save();

      return new NextResponse("User has been created successfully!", {status: 201});
    } catch (err : any) {
        return new NextResponse(err.message, {status: 500});
    }
}