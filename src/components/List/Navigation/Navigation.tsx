import React, { KeyboardEvent } from 'react';
import { Keys } from 'utils/constants';
import { ReactComponent as Back } from 'assets/icons/arrow-back.svg';
import { ReactComponent as Forward } from 'assets/icons/arrow-forward.svg';
import classes from './Navigation.module.css';

type NavigationProps = {
    listId: string;
    onPrev: () => void;
    onNext: () => void;
};

const Navigation = ({ listId, onPrev, onNext }: NavigationProps) => {
    const handleKeyPrev = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === Keys.Left || event.key === Keys.SpaceBar || event.key === Keys.Enter) {
            onPrev();
        }
    };

    const handleKeyNext = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === Keys.Right || event.key === Keys.SpaceBar || event.key === Keys.Enter) {
            onNext();
        }
    };

    return (
        <div className={classes.wrapper}>
            <div
                role="button"
                tabIndex={0}
                aria-label="Previous item"
                aria-controls={listId}
                className={classes.button}
                onKeyDown={handleKeyPrev}
                onClick={onPrev}
            >
                <Back className={classes.icon} />
            </div>
            <div
                role="button"
                tabIndex={0}
                aria-label="Next item"
                aria-controls={listId}
                className={classes.button}
                onKeyDown={handleKeyNext}
                onClick={onNext}
            >
                <Forward className={classes.icon} />
            </div>
        </div>
    );
};

export default Navigation;
