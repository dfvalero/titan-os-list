import { ReactNode } from 'react';

type ListProps<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
};

const List = <T extends { id: string | number }>({ items, renderItem }: ListProps<T>) => {
    return (
        <div>
            {items.map((item) => (
                <li key={item.id}>
                    <>{renderItem(item)}</>
                </li>
            ))}
        </div>
    );
};

export default List;
