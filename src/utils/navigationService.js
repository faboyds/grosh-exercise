import * as React from 'react';

const isReadyRef = React.createRef();
const navigationRef = React.createRef();

function navigate(routeName, params) {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current?.navigate(routeName, params);
    }
}

// add other navigation functions that you need and export them

export default {
    navigate,
    isReadyRef,
    navigationRef,
};
