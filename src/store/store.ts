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