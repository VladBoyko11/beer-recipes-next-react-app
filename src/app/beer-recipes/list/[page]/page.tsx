import { beerRecipe } from "@/store/store"
import Link from "next/link"
import { Pagination } from "@/components/pagination"
import Image from 'next/image'

const baseurl = 'https://api.punkapi.com/'

type Props = {
    params: {
        page: number
    }
}


async function fetcher(page: number | string): Promise<Array<beerRecipe>> {
    const response = await fetch(`${baseurl}v2/beers?page=${page}`, {
        cache: 'force-cache'
    })
    return response.json()
}

export default async function BeerRecipes({params: {page}}: Props) {

    const beerRecipes = await fetcher(page)

    return <div>
        <div className=" black">
            <div className="mx-auto w-3/4 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <Pagination />
                <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {beerRecipes ? beerRecipes.map((beerRecipe) => (
                        <Link key={beerRecipe.id} href={`/beer-recipes/${beerRecipe.id}`} className="flex flex-wrap items-center justify-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <Image 
                                className="object-contain w-auto h-80 p-2" src={beerRecipe.image_url} alt={beerRecipe.name} width={500} height={500}
                            />
                            {/* <img className="object-contain w-auto h-80 p-2" src={beerRecipe.image_url} alt={beerRecipe.name} width={500} height={500}/> */}
                            <div className="flex flex-col w-100 justify-between p-4 leading-normal">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{beerRecipe.name}</h5>
                                <div className=' italic text-fuchsia-200 text-center text-sm'>{beerRecipe.tagline}</div>
                            </div>
                        </Link>
                    )) : null}
                </div>
            </div>
        </div>
    </div>
}