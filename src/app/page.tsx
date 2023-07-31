import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto text-center">
      <h1>Hello world!</h1>
      <Link href='/beer-recipes'>Beer Recipes</Link>
    </main>
  )
}
