declare module 'use-input-mask' {
    import { RefObject } from 'react';

    interface UseInputMaskOptions {
        mask: string;
        ref: RefObject<HTMLInputElement>;
    }

    export function useInputMask(options: UseInputMaskOptions): void;
}
