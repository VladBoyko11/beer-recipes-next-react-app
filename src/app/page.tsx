import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="font-medium">Hello world!</div>
      <h1>Hello worlddawdw!</h1>
      <Link href='/beer-recipes'>Beer Recipes</Link>
    </main>
  )
}
