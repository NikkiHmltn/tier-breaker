import React, { useState } from 'react';

function Filter(props) {
    const [hidden, setHidden] = useState('hide');

    const handleClick = () => {
        if (hidden === 'hidden' || hidden === 'hide') {
            setHidden('shown');
        } else {
            setHidden('hidden');
        }
    };

    const months = [
        'Show All',
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const monthDisp = months.map((month) => {
        return (
            <p key={month} onClick={() => props.onClick(month)}>
                {month}
            </p>
        );
    });

    return (
        <>
            <div className={`${hidden} Filter-popup`}>{monthDisp}</div>

            <div className="Filter-bubble" onClick={() => handleClick()}>
                <i className="material-icons">filter_list</i>
            </div>
        </>
    );
}

export default Filter;
