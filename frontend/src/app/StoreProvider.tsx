'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store/store';

/**
 * Client-side wrapper for the Redux Provider.
 * Uses useRef to initialize the store once per user session, safely isolating 
 * state and preventing cross-request pollution during Server-Side Rendering.
 */
export default function StoreProvider({ children }: { children: React.ReactNode }) {
    // 1. Create a "box" (ref) to hold our store
    const storeRef = useRef<AppStore>(undefined);
    
    if (!storeRef.current) {
        // 2. Create the store instance the VERY FIRST time this component renders
        // This happens once per user session, safely isolated.(user A will not see user B data and vice verse)
        storeRef.current = makeStore();
    }

    // 3. Provide that unique store to the children
    return <Provider store={storeRef.current}>{children}</Provider>;
}

// This is wrapper
// REACT in NEXTJS works in WRAPPER PATERN

// "We use a Client-side Wrapper for the Redux Provider to bridge the gap between Next.js Server Components and React's stateful Context. 
// By using useRef to initialize the store, we guarantee that the store is locally scoped to the client and avoid cross-request state pollution, which is a common pitfall in Server-Side Rendering."

// useRef : keeps track of renders in application, returns one object called current only
// useRef helps in isolating User A and User B