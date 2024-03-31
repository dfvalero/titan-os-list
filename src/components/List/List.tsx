import { ReactNode } from 'react';
import classes from './List.module.css';

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
};

const List = <T extends { id: string | number }>({ items, renderItem }: ListProps<T>) => {
    return (
        <div className={classes.wrapper}>
            <ul className={classes.list}>
                {items.map((item) => (
                    <li key={item.id}>
                        <>{renderItem(item)}</>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
