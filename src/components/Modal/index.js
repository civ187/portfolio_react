import React from 'react';

const Modal = ({ onClose, currentApplication }) => {
    const { name, category, description, gitHub, site, index } = currentApplication;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/img/large/${category}/${index}.png`)} alt="current category" />
                <p>{description}</p>
                <p><a href={gitHub} target="_blank" rel="noopener noreferrer">Repository</a></p>
                {(site !== 'NA') ? (
                    <p><a href={site} target="_blank" rel="noopener noreferrer">Deployed Site</a></p>):(
                        <p></p>
                )}
                <button onClick={onClose} type="button">Close this modal</button>
            </div>
        </div>
    );
}

export default Modal;