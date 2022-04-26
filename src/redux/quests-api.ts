import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const questsApi = createApi({
  reducerPath: 'questsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/'}),
  endpoints: (builder) => ({
    getQuests: builder.query({
      query: (filter = '') => `quests${filter}`,
    }),

    getQuest: builder.query({
      query: (id = '') => `quests/${id}`,
    }),

    addOrder: builder.mutation({
      query: (body) => ({
        url: 'orders',
        method: 'POST',
        body,
      }),
      // transformResponse: (_, meta) => meta,
    }),
  }),
});

export const {
  useGetQuestsQuery,
  useAddOrderMutation,
  useGetQuestQuery,
} = questsApi;
