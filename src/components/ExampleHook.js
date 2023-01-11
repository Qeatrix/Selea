import React, { useState, useEffect } from 'react';

function Example1() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    })

    return (
        <div>
            <p>Вы кликнули {count} раз(а).</p>
            <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
        </div>
    )
}

export default Example1;