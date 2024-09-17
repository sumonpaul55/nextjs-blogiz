import baseApi from "../baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => {
        return {
          url: `/blogs`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetBlogsQuery } = blogApi;
