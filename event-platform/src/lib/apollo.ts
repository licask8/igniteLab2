
import { ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.hygraph.com/v2/cl4oc9ho21tlv01xxbklshgox/master',
    cache: new InMemoryCache()
})