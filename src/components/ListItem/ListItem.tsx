import React from 'react';
import placeholder from 'assets/images/placeholder.jpeg';
import classes from './ListItem.module.css';

type CustomItemProps = {
    title: string;
    image?: string;
};

const CustomItem = ({ title, image }: CustomItemProps) => {
    const parsedImage = image ?? placeholder;

    return (
        <>
            <div className={classes.wrapper}>
                <img className={classes.image} src={parsedImage} alt={title} />
            </div>
            <p>{title}</p>
        </>
    );
};

export default CustomItem;
