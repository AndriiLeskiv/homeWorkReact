import {useSearchParams} from "react-router-dom";
import './PaginationComponents.css'

export const PaginationComponent = () => {
    const [query, setQuery] = useSearchParams({page: '1'})
    const page = query.get('page');

    return (
        <div className="flex space-x-4">
            <button onClick={() => {
                if (page) {
                    let currentPage = +page;
                    if (currentPage > 1) {
                        setQuery({page: (--currentPage).toString()})
                    }
                }
            }}>prev
            </button>
            <button onClick={() => {
                if (page) {
                    let currentPage = +page;
                    setQuery({page: (++currentPage).toString()})
                }
            }}>next
            </button>

        </div>
    );
};