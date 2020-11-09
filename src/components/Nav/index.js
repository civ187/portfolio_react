import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentPage,
        handlePageChange
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage);
    }, [currentPage]);

    function applicationClickHandler(category) {
        handlePageChange(capitalizeFirstLetter(category.name));
        setCurrentCategory(category);
    }

    return (
        <header className="flex-row px-1">
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2`}>
                        <h2 onClick={() => handlePageChange("About")}>Victor Cesar Lopez</h2>
                    </li>
                    <li className={`mx-2 ${currentPage === "About" && `navActive`}`}>
                        <span onClick={() => handlePageChange("About")} className={currentPage === "About" ? 'nav-link active' : 'nav-link'}>About me</span>
                    </li>
                    <li className={`mx-2 ${currentPage === "Contact" && `navActive`}`}>
                        <span onClick={() => handlePageChange("Contact")} className={currentPage === "Contact" ? 'nav-link active' : 'nav-link'}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentPage === capitalizeFirstLetter(category.name) && `navActive`}`}
                            key={category.name}
                        >
                            <span
                                onClick={() => applicationClickHandler(category)}
                                className={currentPage === capitalizeFirstLetter(category.name) ? 'nav-link active' : 'nav-link'}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                    <li className={`mx-2 ${currentPage === "Resume" && `navActive`}`}>
                        <span onClick={() => handlePageChange("Resume")} className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}>Resume</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;
