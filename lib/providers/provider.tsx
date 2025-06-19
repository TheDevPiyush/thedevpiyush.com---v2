'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { Toaster } from 'sonner';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ProgressProvider
            height="4px"
            color="rgb(var(--color-primary))"
            options={{ showSpinner: false }}
            shallowRouting
        >
            {children}
            <Toaster />
        </ProgressProvider>
    );
};

export default Providers;