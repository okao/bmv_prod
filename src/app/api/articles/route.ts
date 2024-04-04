import { revalidatePath } from "next/cache"
import { NextRequest, type NextResponse } from "next/server"

const BearerToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjlTZWo3eXJYdGo1TzNDVV9JeG5EU2ciLCJ0eXAiOiJhdCtqd3QifQ.eyJpc3MiOiJodHRwczovL2Nsb3VkLnNxdWlkZXguaW8vIiwiZXhwIjoxNzE0ODU2MDI3LCJpYXQiOjE3MTIyNjQwMjcsImF1ZCI6InNjcDpzcXVpZGV4LWFwaSIsInNjb3BlIjoic3F1aWRleC1hcGkiLCJqdGkiOiIyZDdjYjI2ZS05YmYxLTQ5NGQtYWEwYi01ZDY5ZmEwMmU3NzYiLCJzdWIiOiI2NjBmMDE5NGMyMDhiNGY4NjNiMjE3MDYiLCJ1cm46c3F1aWRleDphbnN3ZXIiOlsiY29tcGFueVNpemU9U2l6ZVNtYWxsIiwiY29tcGFueVJvbGU9Um9sZUVtcGxveWVlIiwicHJvamVjdD1Qcm9qZWN0QmFja2VuZCJdLCJ1cm46c3F1aWRleDpwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jTFZPbExKYjVRSlZFTElKd0IxcnFCNllQVmI0VUJ6QjNORVdGN0lPalAyNXdzeUl3PXM5Ni1jIiwibmFtZSI6Ik9sYSBPbGEiLCJ1cm46c3F1aWRleDpjb25zZW50IjoiVHJ1ZSIsInVybjpzcXVpZGV4Om5vdGlmbyI6ImlkeGR0ZmN1N2NrcnRxZHlrNW9oaHhkZDFhMDBjdnFia293cmFydWJlaTh4IiwidXJuOnNxdWlkZXg6Y2xpZW50U2VjcmV0IjoiZ3hjZzducnFrdXEyZ2NhcnY3bXBqeG1oeHUxM2R2bHBwNXk3eGpheHcydXgiLCJvaV9wcnN0IjoiNjYwZjAxOTRjMjA4YjRmODYzYjIxNzA2IiwiY2xpZW50X2lkIjoiNjYwZjAxOTRjMjA4YjRmODYzYjIxNzA2Iiwib2lfdGtuX2lkIjoiM2U2ZDM5YzItMTAwZi00MWNlLWI0YWMtYmU2NzAyZTE5NzQzIn0.tLa36ORl8P-gbuWNdSr9e1spdaehVaDELSzmTAX5A-Zk0_BiypBm65PK-0dYGKLriHpZhKHm14Y7zbJXE6YsWzB-pn1lTjfExWgVe0BoF2Nl65DLdgoobk7RKmwY_70kBaqBiJ8xkCNl_T9Ec10WsbcjsRDJr6ICALPcKHggYCBz1tbWaqJjlClPWFFqwJ-N6eqaGiBmcQ5Yz5tMXYDWeaW3gWnmRkl9ezc4vZoa4fkYts1ZxLWbebNfv_R7ViIp-MvRUGfgsJpksmlb1pFZjO5YeGlnFS_j3NeG8u6viIk4jaRqABZ3vdxfC__JjbFH5FSZB34MWaG-eXz2Uvo2qg";

async function GetHandler(req: any, res: NextResponse) {
  revalidatePath("/api/menus");

  try {
    const response = await fetch('https://cloud.squidex.io/api/content/breakingmv/articles/', {
      headers: {
        Authorization: `Bearer ${BearerToken}`,
      },
    });

    const data = await response.json();
    // res.status(response.status).json(data);

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    // res.status(500).json({ error: 'Internal server error' });

    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}

export { GetHandler as GET };