import React from "react";
import { beerRecipe } from "@/store/store";
import { Metadata } from "next";
import Image from 'next/image'

type Props = {
    params: {
        id: string
    }
}

async function getBeerRecipes(id: string) {
    const baseurl = 'https://api.punkapi.com/'
    const response = await fetch(`${baseurl}v2/beers/${id}`)
    return response.json()
}

export async function generateMetadata({
    params: {id}
}: Props): Promise<Metadata> {
    const beerRecipeArray: Array<beerRecipe> = await getBeerRecipes(id)
    return {
        title: beerRecipeArray[0].name,
        description: `This is the page of ${beerRecipeArray[0].name}`
    }
}

export default async function BeerRecipePage ({params: {id}}: Props) {

    const beerRecipeArray: Array<beerRecipe> = await getBeerRecipes(id)
    const beerRecipe = beerRecipeArray[0]

    return <div className='flex justify-around items-center bg-white border border-gray-200 shadow dark:border-gray-700 dark:bg-gray-800 py-3 h-auto' >
    <Image className=' object-contain w-auto h-96' src={beerRecipe.image_url} alt="beer recipe" width={500} height={500}/>
    <div className=' w-4/5 text-lg'>
        <div className=''><strong>Recipe</strong>: <span className=" text-fuchsia-200">{beerRecipe.name}</span></div>
        <div className='font-italic'><span className=" text-fuchsia-200 italic">{beerRecipe.tagline}</span></div>
        <div><strong>First brewed</strong>: <span className=" text-fuchsia-200">{beerRecipe.first_brewed}</span></div>
        <div><strong>Alcohol by Volume</strong>: <span className=" text-fuchsia-200">{beerRecipe.abv}</span></div>
        <div><strong>Beer color intensity</strong>: <span className="text-fuchsia-200">{beerRecipe.srm}</span></div>
        <div><strong>Fermentation at</strong>: <span className="text-fuchsia-200">{beerRecipe.method.fermentation.temp.value} degrees {beerRecipe.method.fermentation.temp.unit}</span></div>
        <hr />
        <div><strong>Food pairing</strong>:
            <div>{beerRecipe.food_pairing.map((food, id) => <div className="text-fuchsia-200" key={id}>{food}</div>)}</div>
        </div>
        <div><strong>Description</strong>: <span className="text-fuchsia-200">{beerRecipe.description}</span></div>
        <hr />
        <div><strong>Ingredients malt:</strong> {beerRecipe.ingredients.malt.map((ingridient, id) => {
            return <div key={id} className="grid grid-cols-2 w-2/4">
                <div>Name: <span className="text-fuchsia-200">{ingridient.name}</span></div>
                <div>Amount: <span className="text-fuchsia-200">{ingridient.amount.value} kg</span></div>
            </div>
        })}</div>
    </div>
</div>
}