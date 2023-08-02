import { beerRecipe } from "@/store/store"
import Link from "next/link"
import { useStore } from "@/store/store"

async function getBeerRecipes() {
    const baseurl = 'https://api.punkapi.com/'
    const response = await fetch(`${baseurl}v2/beers?page=${1}`)
    return response.json() as Promise<Array<beerRecipe>>
}

export default async function BeerRecipes() {

    await getBeerRecipes().then(res => {
        useStore.setState({
            beerRecipes: res
        })
    })

    const beerRecipes = useStore.getState().beerRecipes

    return <div>
        <div className=" bg-fuchsia-50">
            <div className="mx-auto w-3/4 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {beerRecipes.map((beerRecipe) => (
                        <Link key={beerRecipe.id} href={`/beer-recipes/${beerRecipe.id}`} className="flex flex-wrap items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-contain w-auto h-80 p-2" src={beerRecipe.image_url} alt={beerRecipe.name} />
                            <div className="flex flex-col w-100 justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{beerRecipe.name}</h5>
                                <div className=' italic text-fuchsia-200'>{beerRecipe.tagline}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
}