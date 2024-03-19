export default async function getDivisions() {
    const res = await fetch('https://https://oprec-cf-production.up.railway.app/api/divisi', { next: { revalidate: 0 }})
    return res.json()
}
