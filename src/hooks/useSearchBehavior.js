import { useEffect } from "react";

export function useSearchBehavior(searchOpen, setSearchOpen, inputRef, wrapperRef) {
    useEffect(() => {
        if (searchOpen) inputRef.current?.focus();
    }, [searchOpen, inputRef]);

    useEffect(() => {
        const handleClick = (e) => {
            if (!wrapperRef.current?.contains(e.target)) setSearchOpen(false);
        };
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, [setSearchOpen, wrapperRef]);
}
