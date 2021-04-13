/* array
[
    {
        index: number
    }
]
*/
const selectionSort = (array, count) => {1
    const newState = [...array];

    const section = newState.slice(count);
    let minElIndex = 0;

    for (let i = 0; i < section.length; i++) {
        const el = section[i];
        if (el.index < section[minElIndex].index) minElIndex = i;
    }

    const currentEl = newState[count];

    newState[count] = section[minElIndex];
    newState[minElIndex + count] = currentEl;

    return newState;
}

export default selectionSort;