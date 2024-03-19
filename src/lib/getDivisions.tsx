export default async function getDivisions() {
    const res = await fetch('http://localhost:3001/api/divisi', { next: { revalidate: 0 }})
    return res.json()
}
