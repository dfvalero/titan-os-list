import React from 'react';
import clsx from 'clsx';
import placeholder from 'assets/images/placeholder.jpeg';
import classes from './ListItem.module.css';

type CustomItemProps = {
    title: string;
    image?: string;
    focused: boolean;
    selected: boolean;
};

const CustomItem = ({ title, image, focused, selected }: CustomItemProps) => {
    const parsedImage = image ?? placeholder;
    const wrapperClasses = clsx(classes.wrapper, {
        [classes.selected]: selected && !focused,
        [classes['selected-and-focused']]: focused && selected,
    });

    return (
        <>
            <div className={wrapperClasses}>
                <img className={classes.image} src={parsedImage} alt={title} />
            </div>
            <p>{title}</p>
        </>
    );
};

export default CustomItem;
