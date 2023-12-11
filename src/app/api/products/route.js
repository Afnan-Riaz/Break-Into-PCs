"use client"
import { connStr } from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(){
    await mongoose.connect(connStr);
    return NextResponse.json({result:true});
}