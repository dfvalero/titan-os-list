import { KeyboardEvent, ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import classes from './List.module.css';
import Navigation from 'components/List/Navigation/Navigation';
import { Keys } from 'utils/constants';

type ItemState = {
    wrapperFocused: boolean;
    selected: boolean;
};

type ListProps<T> = {
    id: string;
    items: T[];
    navigation?: boolean;
    threshold?: number;
    renderItem: (item: T, itemState: ItemState) => ReactNode;
    onReachEnd?: () => void;
};

const List = <T extends { id: string | number }>({
    id,
    items,
    navigation = false,
    threshold = 1,
    renderItem,
    onReachEnd,
}: ListProps<T>) => {
    const listRef = useRef<HTMLUListElement>(null);
    const [focused, setFocused] = useState(false);
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

    useEffect(() => {
        const quantity = items.length - 1;
        const limit = quantity - threshold;

        if (selected === limit) {
            onReachEnd && onReachEnd();
        }
    }, [items.length, threshold, onReachEnd, selected]);

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

    const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
        if (event.key === Keys.Right) {
            moveNext();
            return;
        }
        if (event.key === Keys.Left) {
            movePrev();
            return;
        }
    };

    return (
        <>
            {navigation && <Navigation listId={id} onPrev={movePrev} onNext={moveNext} />}
            <div className={classes.wrapper}>
                <ul
                    id={id}
                    data-testid={id}
                    data-selected={selected}
                    onKeyDown={handleKeyDown}
                    className={classes.list}
                    tabIndex={0}
                    ref={listRef}
                    style={{ transform: `translate3d(-${position}px, 0px, 0px)` }}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                >
                    {items.map((item, index) => (
                        <li key={item.id}>
                            <>
                                {renderItem(item, {
                                    selected: selected === index,
                                    wrapperFocused: focused,
                                })}
                            </>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default List;
