import React, { PropsWithChildren } from 'react';
import classes from './Main.module.css';

const Main = ({ children }: PropsWithChildren) => {
    return <main className={classes.main}>{children}</main>;
};

export default Main;
