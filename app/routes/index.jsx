import { useTransition, useLoaderData } from "remix"

export const loader = async () => {
  const res = await fetch('https://saduifgioa.free.beeceptor.com')
  return res.json()
}

export default function Index() {
  const transition = useTransition()
  const data = useLoaderData()
  console.log("🚀 ~ file: index.server.jsx ~ line 11 ~ Index ~ transition", transition)
  console.log("🚀 ~ file: index.server.jsx ~ line 7 ~ Index ~ data", data)
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
    </div>
  )
}
