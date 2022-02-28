import {useEffect, useState} from 'react';
function useContentHeight({mainRef, stepperHeight, verticalPadding}) {
    const [height, setHeight] = useState(200);
    useEffect(function() {
        const mainHeight = mainRef?.current.getBoundingClientRect().height;
        setHeight(mainHeight - stepperHeight - (verticalPadding));
    }, [mainRef, stepperHeight, verticalPadding])
    
    return height;
}

export default useContentHeight;