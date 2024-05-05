import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// import { RootState } from "../redux/store"

import { VehiclesResponse, VehiclesRequest } from "./types"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://wtvehiclesapi.sgambe.serv00.net/api/",
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).app.authToken
    //   if (token) {
    //     headers.set("Authorization", `Bearer ${token}`)
    //   }
    //   return headers
    // },
  }),
  // tagTypes: ["Vehicle"],

  endpoints: (builder) => ({
    getVehicles: builder.query<VehiclesResponse, VehiclesRequest>({
      query: ({ limit, page, country, type, era, isPremium, isGift }) => ({
        url: "/vehicles",
        params: {
          limit, // 200 max
          page,
          country,
          type,
          era,
          isPremium,
          isGift,
        },
      }),
      // providesTags: [{ type: "Articles", id: "List" }],
    }),

    // getArticle: builder.query<{ article: Article }, string>({
    //   query: (slug) => `articles/${slug}`,
    //   providesTags: (result, error, slug) => [{ type: "Article", id: slug }],
    // }),

    // getCurrentUser: builder.query<ProfileResponse, void>({
    //   query: () => `/user`,
    //   keepUnusedDataFor: 0,
    //   providesTags: [{ type: "Profile", id: "Current" }],
    // }),

    // signIn: builder.mutation<ProfileResponse, SignInRequest>({
    //   query: (body) => ({
    //     url: "/users/login",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: [{ type: "Profile", id: "Current" }],
    // }),

    // signUp: builder.mutation<ProfileResponse, SignUpRequest>({
    //   query: (body) => ({
    //     url: "/users",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: [{ type: "Profile", id: "Current" }],
    // }),

    // updateUser: builder.mutation<ProfileResponse, UpdateProfileRequest>({
    //   query: (body) => ({
    //     url: "/user",
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: [
    //     { type: "Profile", id: "Current" },
    //     { type: "Articles", id: "List" },
    //   ],
    // }),

    // postArticle: builder.mutation<ArticleResponse, NewArticleRequest>({
    //   query: (body) => ({
    //     url: "/articles",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: [{ type: "Articles", id: "List" }],
    // }),

    // updateArticle: builder.mutation<ArticleResponse, UpdateArticleRequest>({
    //   query: ({ slug, body }) => ({
    //     url: `/articles/${slug}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: (result, error, { slug }) => [
    //     { type: "Article", id: slug },
    //     { type: "Articles", id: "List" },
    //   ],
    // }),

    // deleteArticle: builder.mutation<void, string>({
    //   query: (slug) => ({
    //     url: `/articles/${slug}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: [{ type: "Articles", id: "List" }],
    // }),

    // favoriteArticle: builder.mutation<void, string>({
    //   query: (slug) => ({
    //     url: `/articles/${slug}/favorite`,
    //     method: "POST",
    //   }),
    //   invalidatesTags: (result, error, slug) => [
    //     { type: "Articles", id: "List" },
    //     { type: "Article", id: `${slug}` },
    //   ],
    // }),

    // unfavoriteArticle: builder.mutation<void, string>({
    //   query: (slug) => ({
    //     url: `/articles/${slug}/favorite`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: (result, error, slug) => [
    //     { type: "Articles", id: "List" },
    //     { type: "Article", id: `${slug}` },
    //   ],
    // }),
  }),
})

export const {
  useGetVehiclesQuery,
  // useGetArticlesQuery,
  // useGetArticleQuery,
  // useGetCurrentUserQuery,

  // usePostArticleMutation,
  // useUpdateArticleMutation,
  // useDeleteArticleMutation,
  // useSignUpMutation,
  // useSignInMutation,
  // useUpdateUserMutation,
  // useFavoriteArticleMutation,
  // useUnfavoriteArticleMutation,
} = apiSlice
