import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { BASE_URL, apiRoutes } from '../utils/const';

export const questsApi = createApi({
  reducerPath: 'questsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getQuests: builder.query({
      query: (filter = '') => `${apiRoutes.quests}${filter}`,
    }),

    getQuest: builder.query({
      query: (id = '') => `${apiRoutes.quests}/${id}`,
    }),

    addOrder: builder.mutation({
      query: (body) => ({
        url: `${apiRoutes.orders}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetQuestsQuery,
  useAddOrderMutation,
  useGetQuestQuery,
} = questsApi;
