import { beerRecipe } from "@/store/store"
import Link from "next/link"

async function getBeerRecipes() {
    const baseurl = 'https://api.punkapi.com/'
    const response = await fetch(`${baseurl}v2/beers?page=${1}`)

    return response.json()
}

export default async function BeerRecipes({params}: {params: any}) {

    const beerRecipes: Array<beerRecipe> = await getBeerRecipes()
    return <div>
        <h1 className=" text-lg text-fuchsia-400">BeerRecipes:</h1>
        <ol className=" ml-2 ">
            {beerRecipes.map((item: beerRecipe, index: number) => 
            <li key={index} className="hover:underline hover:text-fuchsia-200">
                <Link href={`/beer-recipes/${item.id}`} key={index}>
                {item.name}
                </Link>
            </li>
            )}
        </ol>
    </div>
}