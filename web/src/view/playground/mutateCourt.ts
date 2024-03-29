import { ApolloClient, gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { FetchCourtVariables } from '../../graphql/query.gen'

const courtMutation = gql`
  mutation AddToCourt($court_id: Int!, $nickname: String) {
    addUserToCourt(courtID: $court_id, nickname: $nickname)
  }
`

export function addMatchMutationClient(client: ApolloClient<any>, court_id: number, nickname: string) {
  return client.mutate<FetchCourtVariables>({
    mutation: courtMutation,
    variables: { court_id, nickname },
  })
}

export function addCourtMutation(court_id: number, nickname: string) {
  return getApolloClient().mutate<FetchCourtVariables>({
    mutation: courtMutation,
    variables: { court_id, nickname },
  })
}
