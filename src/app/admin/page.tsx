"use client";
import { redirect } from "next/navigation"

export default function AdminPage() {
    if (true) {
        redirect('/admin/main')
    } else {
        redirect('/admin/auth/login')
    }
}