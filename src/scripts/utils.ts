export const utils = {
    debounce(func: Function, timeout: number = 100): () => void {
        let timeoutRef: any;

        return function() {
            // @ts-ignore
            const context = this as any;
            const args = arguments;

            if (!!timeoutRef) {
                return;
            }

            timeoutRef = setTimeout(() => {
                timeoutRef = null;

                func.apply(context, args);
            }, timeout);
        };
    },
}
