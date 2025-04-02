declare module 'react-typed' {
    import React from 'react';
    import { Typed as TypedJS } from 'typed.js';

    export interface TypedProps {
        strings: string[];
        typeSpeed?: number;
        backSpeed?: number;
        backDelay?: number;
        loop?: boolean;
        showCursor?: boolean;
        cursorChar?: string;
        onComplete?: () => void;
        onTypingPaused?: (arrayPos: number) => void;
        onTypingResumed?: (arrayPos: number) => void;
        onLastStringBackspaced?: () => void;
        onStringTyped?: (arrayPos: number) => void;
        onReset?: () => void;
    }

    export const ReactTyped: React.FC<TypedProps>;

    export { TypedJS as Typed };
}
