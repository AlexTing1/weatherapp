import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/DropDown.module.css';

const options = ["Seattle", "Los Angeles", "New York"];

function Dropdown() {
    const [selection, setSelection] = useState('Select a City');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
        setSelection(option);
        setIsOpen(false);
    };

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, []);

    return (
        <div className={styles.dropdown} ref={dropdownRef}>
            <button className={styles.dropdownToggle} onClick={toggleDropdown}>
                {selection}
            </button>
            {isOpen && (
                <ul className={styles.dropdownMenu}>
                    {options.map((city) => (
                        <li onClick={() => handleSelect(city)}>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Dropdown;
