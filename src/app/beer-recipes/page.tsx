import axios from "axios"
import Link from "next/link"

export interface beerRecipe {
    abv: number,
    attenuation_level: number,
    boil_volume: {
        value: number, unit: string
    },
    brewers_tips: string,
    contributed_by: string,
    description: string,
    ebc: number,
    first_brewed: string,
    food_pairing: Array<string>,
    ibu: number,
    id: number,
    image_url: string,
    ingredients: {
        hops: Array<{
            name: string,
            amount: {
                value: number,
                unit: string
            },
            add: string,
            attribute: string
        }>,
        malt: Array<{
            name: string,
            amount: {
                value: number,
                unit: string
            }
        }>,
        yeast: string
    },
    method: {
        fermentation: {
            temp: {
                unit: string,
                value: number
            }
        },
        mash_temp: Array<{}>,
        twist: {}
    },
    name: string,
    ph: number,
    srm: number,
    tagline: string,
    target_fg: number,
    target_og: number
}

// export async function getStaticPaths() {
//     const baseurl = 'https://api.punkapi.com/'
//     const response = await axios.get(`${baseurl}v2/beers?page=${1}`)

//     const paths = response.data.map((post: any) => ({
//         params: { name: post.name }
//     }))

//     return {
//         paths,
//         falback: false
//     }
// }

// export async function getStaticProps({params}: {params: any}) {
//     const baseurl = 'https://api.punkapi.com/'
//     const response = await axios.get(`${baseurl}v2/beers?page=${1}`)

//     return {
//         props: {
//             posts: response.data
//         }
//     }
// }

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