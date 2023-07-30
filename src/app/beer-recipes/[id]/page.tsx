import React from "react";
import { beerRecipe } from "../page";
import { Metadata } from "next";

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
    return {
        title: id
    }
}

export default async function BeerRecipePage ({params: {id}}: Props) {

    const beerRecipe: Array<beerRecipe> = await getBeerRecipes(id)

    return <div className='container d-flex justify-content-between' >
        <div>Beer Page {beerRecipe[0].name}</div>
        <div className='w-25'>
            <img className='m-3' src={beerRecipe[0].image_url} width="100px" alt="beer recipe" />
        </div>
        <div className='w-75'>
            <div className=''><strong>Recipe</strong>: {beerRecipe[0].name}</div>
            <div className='font-italic'>{beerRecipe[0].tagline}</div>
            <div><strong>First brewed</strong>: {beerRecipe[0].first_brewed}</div>
            <div><strong>Alcohol by Volume</strong>: {beerRecipe[0].abv}</div>
            <div><strong>Beer color intensity</strong>: {beerRecipe[0].srm}</div>
            {/* <div><strong>Fermentation at</strong>: {beerRecipe.method.fermentation.temp.value} degrees {beerRecipe.method.fermentation.temp.unit}</div>
            <hr />
            <div><strong>Food pairing</strong>:
                <div>{beerRecipe.food_pairing.map((food: any, index: number) => <div key={index}>{food}</div>)}</div>
            </div>
            <hr />
            <div><strong>Description</strong>: {beerRecipe.description}</div>
            <hr /> */}
        </div>
    </div>
}