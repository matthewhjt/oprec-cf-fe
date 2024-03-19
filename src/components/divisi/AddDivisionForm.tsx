"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AddDivisionForm() {
    const router = useRouter()

    const [nama, setNama] = useState('New Division')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        const res = await fetch('https://oprec-cf-production.up.railway.app/api/divisi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nama }),
        })

        if (res.status == 201) {
            router.replace('/dashboard/divisi')
        }
        setIsLoading(false)
    }

    const content = (
        <div className="p-2 m-2 flex flex-col justify-center items-center">
            <h1 className="font-bold text-xl">Add Division</h1>
            <form onSubmit={handleSubmit} className="w-3/4 p-2" >
                <Label htmlFor="nama" className="p-2 m-2">
                    Nama
                </Label>
                <Input
                    id="nama"
                    className="p-2 m-2"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                />
                <Button type='submit' disabled={isLoading} className="p-2 m-2 w-full">
                    Submit
                </Button>
            </form>
        </div>
    )
    return content;
}