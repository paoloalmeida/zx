import ApolloClient, { createNetworkInterface } from 'apollo-client';
import gql from 'graphql-tag';
import { API_URL } from './Config'
import productList from '../components/ProductList'

export default function productService(storeId) {

  // init apollo
  const client = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: API_URL,
    }),
  });

  // query to products
  client.query({
    query: gql`
      query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
        poc(id: $id) {
          products(categoryId: $categoryId, search: $search) {
            productVariants{
              title
              description
              imageUrl
              price
            }
          }
        }
      }
    `,
    variables: { 'id': storeId, 'search': '', 'categoryId': 0 }
  })
    .then(function (data) {
      const products = data.data.poc.products;
      // call productList function
      productList(products);
    })
    .catch(error => console.error('TODO: tratar erro ', error));
}
