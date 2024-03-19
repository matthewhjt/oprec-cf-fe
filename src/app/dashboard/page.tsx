import React from 'react';
import Link from 'next/link'; 
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

async function Dashboard() {

  const content = (
    <div className='flex justify-start flex-col items-center m-2 h-screen'>
      <div className='flex flex-col w-full p-5'>
        <h1 className='font-bold text-2xl p-2'>Dashboard</h1>
        <h3 className='text-lg p-2'>What would you like to do?</h3>
        <div className='grid grid-cols-2'>
          <div className='mx-2'>
            <Card>
              <CardHeader>
                <CardTitle>Manage Divisions</CardTitle>
                <CardDescription>Do changes to Divisions and Subdivision</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className='w-full'>
                  <Link href="/dashboard/divisi">Go to Division Page</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className='mx-2'>
            <Card>
              <CardHeader>
                <CardTitle>Manage Applications</CardTitle>
                <CardDescription>Manage Applications for each Subdivision</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild className='w-full'>
                  <Link href="/dashboard">Go to Application Page</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )

  return content
}

export default Dashboard;
