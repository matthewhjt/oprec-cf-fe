import React from 'react';
import getDivisions from '@/lib/getDivisions';
import Link from 'next/link'; 
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import {
Accordion,
AccordionContent,
AccordionItem,
AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";

type Division = {
    "id": string,
    "nama": string,
    "Subdivisi": [
      {
        "id": string,
        "idDivisi": string,
        "nama": string,
        "deskripsi": string,
        "jobDesc": string,
        "hr": {
          "id": string,
          "idSubdivisi": string,
          "nama": string,
          "contact": [
            {
              "id": string,
              "idHR": string,
              "contactWA": {
                "nomor": number,
              },
              "contactLine": {
                "username": string,
              }
            }
          ]
        }
      },
    ]
}

async function DivisiPage() {
  const divisionsData: Promise<Division[]> = getDivisions()
  const divisions = await divisionsData

  const content = (
    <div className='flex justify-start flex-col items-center m-2 h-screen'>
      <div className='flex flex-col w-full p-5'>
        <div className='flex w-full justify-between'>
            <h1 className='font-bold text-2xl p-2'>Divisions</h1>
            <Button asChild>
                <Link href={'/dashboard/divisi/add'}>Create New Division</Link>
            </Button>
        </div>
        
        <div className='grid grid-cols-1'>
          {divisions.map((division) => {
            return (
                <div className='m-2' key={division.id}>
                    <Card>
                    <CardHeader>
                        <CardTitle>{division.nama}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible>
                            {division.Subdivisi.map((subdivision) => {
                                let namaHR: string = "-";
                                let WA: string = "-";
                                let LINE: string = "-";
                                if (subdivision.hr != null) {
                                  namaHR = subdivision.hr.nama
                                  if (subdivision.hr.contact[0] != null) {
                                    if (subdivision.hr.contact[0].contactWA){
                                        WA = subdivision.hr.contact[0].contactWA.nomor.toString();
                                    }
                                    if (subdivision.hr.contact[0].contactLine.username){
                                        LINE = subdivision.hr.contact[0].contactLine.username.toString();
                                    }
                                  }
                                }
                                return (
                                    <AccordionItem value={subdivision.id} key={subdivision.id}>
                                        <AccordionTrigger>
                                            {subdivision.nama}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <Card>
                                                <CardHeader>
                                                    <CardTitle>{subdivision.nama}</CardTitle>
                                                </CardHeader>
                                                <CardContent className='grid grid-cols-2'>
                                                    <div className='p-2 m-2'>
                                                        <p className='font-semibold'>Description:</p>
                                                        <p>{subdivision.deskripsi}</p>
                                                    </div>
                                                    <div className='p-2 m-2'>
                                                        <p className='font-semibold'>Job Description:</p>
                                                        <p>{subdivision.jobDesc}</p>
                                                    </div>
                                                    <div className='p-2 m-2'>
                                                        <p className='font-semibold'>HR:</p>
                                                        <p>{namaHR}</p>
                                                    </div>
                                                    <div className='p-2 m-2'>
                                                        <p className='font-semibold'>HR Contact:</p>
                                                        <p>WA: {WA}</p>
                                                        <p>Line: {LINE}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </AccordionContent>
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className='w-full p-2 mx-2' variant="destructive">
                            <Link href="/dashboard/divisi">Delete Division</Link>
                        </Button>
                        <Button asChild className='w-full p-2 mx-2'>
                            <Link href="/dashboard/divisi">Add Subdivision</Link>
                        </Button>
                    
                    </CardFooter>
                    </Card>
                </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  return content
}

export default DivisiPage;
