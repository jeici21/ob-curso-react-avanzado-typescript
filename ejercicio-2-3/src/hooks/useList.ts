import { useState } from 'react';

type List<T> = T[];
type UseListReturnType<T> = [List<T>, (items: T[]) => void, (element: T) => void, (index: number) => void,
    () => boolean, () => void, () => void, () => void];

const useList = <T>(initialValue: List<T> = []) => {
    const [list, setList] = useState(initialValue);

    const push = (element: T) => setList((items) => [...items, element]);
    const remove = (index: number) => setList((items) => items.filter((_, i) => i !== index));
    const isEmpty = () => list.length === 0;
    const clear = () => setList([]);
    const sort = () => setList((items) => [...items].sort());
    const reverse = () => setList((items) => [...items].reverse());
    
    return [list, setList, push, remove, isEmpty, clear, sort, reverse] as UseListReturnType<T>;
};

export default useList;