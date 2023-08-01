import { create } from 'zustand'

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

interface IBeerState {
    page: number,
    setPage: () => void
    beerRecipes: Array<beerRecipe>,
    setBeerRecipes: (beerRecipes: Array<beerRecipe>) => void,
    selectedBeerRecipes: Array<beerRecipe>,
    setSelectedBeerRecipe: (beerRecipe: beerRecipe) => void,
    deleteAllSelectedBeerRecipes: () => void,
    setBeerRecipesIfNeeded: (beerRecipes: Array<beerRecipe>) => void,
    clickedBeerRecipe: beerRecipe | null,
    setClickedBeerRecipe: (beerRecipe: beerRecipe) => void
}

export const useBeerStore = create<IBeerState>()((set) => ({
    page: 1,
    setPage: () => set((state) => ({ page: state.page + 1 })),
    beerRecipes: [],
    selectedBeerRecipes: [],
    clickedBeerRecipe: null,
    setClickedBeerRecipe: (beerRecipe) => set(() => ({ clickedBeerRecipe: beerRecipe })),
    setBeerRecipes: (beerRecipes) => set(() => ({ beerRecipes: [...beerRecipes] })),
    setBeerRecipesIfNeeded: (beerRecipes) => set((state) => ({ beerRecipes: [...state.beerRecipes, ...beerRecipes] })),
    setSelectedBeerRecipe: (beerRecipe) => set((state) => {
        const arr = [...state.selectedBeerRecipes]
        let isFounded = false
        state.selectedBeerRecipes.forEach((selectedBeerRecipe, index) => {
            if (selectedBeerRecipe.name === beerRecipe.name) {
                arr.splice(index, 1)
                isFounded = true
            }
        })
        isFounded ? console.log(arr) : console.log(state.selectedBeerRecipes)
        return isFounded ? { selectedBeerRecipes: [...arr] } : { selectedBeerRecipes: [...state.selectedBeerRecipes, beerRecipe] }
    }),
    deleteAllSelectedBeerRecipes: () => set(state => {
        const beerRecipes = [...state.beerRecipes]

        state.beerRecipes.forEach((beerRecipe, i) => {
            state.selectedBeerRecipes.forEach((selectedBeerRecipe, j) => {
                if (beerRecipe.name === selectedBeerRecipe.name) {
                    beerRecipes.splice(i, 1)
                }
            })
        })
        return { selectedBeerRecipes: [], beerRecipes: [...beerRecipes] }
    })
}))
