"use client"
import { useStore } from '@/store/store'
import './pagination.css'
// import { revalidateBeerRecipes } from '@/app/beer-recipes/page'

export const Pagination: React.FC = () => {

    const setPage = useStore(state => state.setPage)
    const page = useStore(state => state.page)

    return <div>
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8">
                <div className="pagination-item" onClick={() => {
                        setPage(page - 1)
                        // revalidateBeerRecipes()
                    }}>
                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Previous
                </div>
                <div className="pagination-item" onClick={() => {
                        setPage(page + 1)
                        // revalidateBeerRecipes()
                    }}>
                    Next
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </div>
            </ul>
        </nav>
    </div>
}