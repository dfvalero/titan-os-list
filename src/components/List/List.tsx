import { ReactNode } from 'react';
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
    const movePrev = () => {
        console.log('prev');
    };

    const moveNext = () => {
        console.log('next');
    };

    return (
        <>
            {navigation && <Navigation listId={id} onPrev={movePrev} onNext={moveNext} />}
            <div className={classes.wrapper}>
                <ul className={classes.list}>
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
