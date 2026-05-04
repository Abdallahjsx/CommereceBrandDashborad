"use client";
import { redirect } from "next/navigation"

export default function AdminPage() {
    if (true) {
        redirect('/admin/home')
    } else {
        redirect('/admin/auth/login')
    }
}