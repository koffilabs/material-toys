import {useEffect, useRef} from "react";

export const usePrevious = (value: any) => {
    const previous = useRef();
    useEffect(() => {
        previous.current = value;
    })
    return previous.current;
}