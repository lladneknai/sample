import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const codeApiSlice = createApi({
  reducerPath: "",
  baseQuery: fetchBaseQuery({
    baseUrl: "/sourcecode/",
    prepareHeaders(headers) {
      headers.set("Content-Type", "text/plain");
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchFile: builder.query<string, string | void>({
        query(filepath = "") {
          return `${filepath}`;
        },
      }),
      // fetchFileTree: builder.query<string, void>({
      // query() {
      // return `/sourcecode-ref.txt`;
      // },
      // transformResponse: (response: { data: any }, meta, arg) => {
      // console.log('[transformResponse]', response);
      // return response.data;
      // },
      // }),
    };
  },
});

// This name is AUTO-FUCKING-GENERATED FROM
// - use        auto    (a hook)
// - [fnName]   user    (the function in `endpoints`)
// - Query      auto    (web query)

export const {
  useFetchFileQuery,
  // useFetchFileTreeQuery
} = codeApiSlice;
