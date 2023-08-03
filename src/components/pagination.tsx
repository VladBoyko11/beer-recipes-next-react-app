"use client"
import './pagination.css'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export const Pagination: React.FC = () => {

    const params = useParams()
    const page = Number(params.page)

    let start: boolean = true
    let end: boolean = false

    if(page !== 1) start = false
    else start = true
    if(page !== 9) end = false
    else end = true

    return <div>
        <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8">
                {!start ? <Link className="pagination-item" href={`/beer-recipes/list/${page - 1}`} >
                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Previous
                </Link>: null}
                {!end ? <Link className="pagination-item" href={`/beer-recipes/list/${page + 1}`} >
                    Next
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </Link>: null}
            </ul>
        </nav>
    </div>
}