import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
    link: string;
    linkText: string;
}

const Filters = ({ link, linkText }: Props) => (
    <div className = "filters-container records-actions">
        <Link to = {link}>
            <button className = "action-filters">
                VER GRÀFICOS
            </button>
        </Link>
    </div>
)

export default Filters;