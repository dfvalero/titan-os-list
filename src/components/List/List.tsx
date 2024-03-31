import { ReactNode, useMemo, useRef, useState } from 'react';
import classes from './List.module.css';
import Navigation from 'components/List/Navigation/Navigation';

type ListProps<T> = {
    id: string;
    items: T[];
    navigation?: boolean;
    renderItem: (item: T) => ReactNode;
};

const List = <T extends { id: string | number }>({
    id,
    items,
    navigation = false,
    renderItem,
}: ListProps<T>) => {
    const listRef = useRef<HTMLUListElement>(null);
    const [selected, setSelected] = useState(0);
    const position = useMemo(() => {
        let result = 0;
        const listStyles = listRef.current && window.getComputedStyle(listRef.current);
        const gapSize = listStyles?.gap ?? '0px';
        const numericGapSize = Number(gapSize.replace('px', ''));
        const liElements = Array.from(listRef.current?.children ?? []);

        Array.from(Array(selected).keys()).forEach((index) => {
            const width = liElements[index].getBoundingClientRect().width ?? 0;
            result = result + width;
        });

        result = result + numericGapSize * selected;

        return result;
    }, [selected]);

    const movePrev = () => {
        setSelected((prevState) => {
            if (prevState === 0) return items.length - 1;

            return prevState - 1;
        });
    };

    const moveNext = () => {
        setSelected((prevState) => {
            if (prevState === items.length - 1) return 0;

            return prevState + 1;
        });
    };

    return (
        <>
            {navigation && <Navigation listId={id} onPrev={movePrev} onNext={moveNext} />}
            <div className={classes.wrapper}>
                <ul
                    className={classes.list}
                    ref={listRef}
                    style={{ transform: `translate3d(-${position}px, 0px, 0px)` }}
                >
                    {items.map((item) => (
                        <li key={item.id}>
                            <>{renderItem(item)}</>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default List;
