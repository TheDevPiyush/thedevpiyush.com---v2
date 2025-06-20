'use client';

import { ProgressProvider } from '@bprogress/next/app';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { supabase } from '../supabase/client';
import useUser from '@/hooks/use-user';
import Cookies from 'js-cookie';

const Providers = ({ children }: { children: React.ReactNode }) => {
    const { getOrRegisterUser } = useUser();

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
            console.error(error);
        }
        if (data?.session) {
            getOrRegisterUser(data?.session?.user?.email as string, data?.session?.user?.id as string);
            Cookies.set("token", data?.session?.access_token || "", { expires: 1 })
            console.log(data?.session);
        }
    }

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