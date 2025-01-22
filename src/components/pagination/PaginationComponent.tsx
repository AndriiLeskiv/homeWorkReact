import {useSearchParams} from "react-router-dom";
import './PaginationComponents.css';

interface PaginationComponentProps {
    totalPages: number;
}

export const PaginationComponent = ({ totalPages }: PaginationComponentProps) => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = parseInt(query.get('page') || '1', 10);

    return (
        <div className="flex space-x-4">
            <button onClick={() => {
                if (page) {
                    let currentPage = +page;
                    if (currentPage > 1) {
                        setQuery({page: (--currentPage).toString()})
                    }
                }
            }}
                disabled={+page <= 1}>
                prev
            </button>
            <button onClick={() => {
                if (page) {
                    let currentPage = +page;
                    setQuery({page: (++currentPage).toString()})
                }
            }}
                disabled={page === totalPages} >
                next
            </button>
        </div>
    );
};