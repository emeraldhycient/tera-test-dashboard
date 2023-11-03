import { HttpLink } from "@apollo/client";
import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const GRAPHQL_ENDPOINT = "https://graphtest.onrender.com/graphql";

export const { getClient } = registerApolloClient(() => {
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: new HttpLink({
            uri: GRAPHQL_ENDPOINT,
        }),
    });
});


