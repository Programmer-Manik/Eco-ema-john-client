import { baseApi } from "../../api/baseApi";
// Need to use the React-specific entry point to import createApi

// Define a service using a base URL and expected endpoints
// export const productApi = createApi({
//   reducerPath: "productApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
//   endpoints: (builder) => ({
//     getProducts: builder.query({
//       query: () => "/products",
//     }),

//   }),
// });

export const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: `/products`,
          method: "GET",
        };
      },
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["products"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["products"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetSingleProductQuery,
} = productApi;

//use GetPokemonByName Query/Mutation

// http//:localhost:50000/api/v1/products
/**
 * fetch('http//:localhost:50000/api/v1/products', {
 * method: 'POST' / "PUT" / "DELETE", //mutattion methods
 * method : "GET" //query method
 * headers: {},
 * body: JSON.stringify({name: 'pikachu'})
 * })
 */

/**
 * const myObj = {
 * add : (a,b) => a+b,
 * }
 *
 * myObj.add(1,2)
 *
 *
 */

/**
   * Step-1
   *fetch('http//:localhost:50000/api/v1/products')
   
   Step-2
   * endpoints.getProducts().query("/products")
   *
   * fetch('http//:localhost:50000/api/v1/products', {
   * method: 'POST' / "PUT" / "DELETE", //mutattion methods
   * method : "GET" //query method
   * headers: {},
   * body: JSON.stringify({name: 'pikachu'})
   * })
   */
