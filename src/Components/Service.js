import React from 'react';
import axios from 'axios'

export default {
  posts() {
    var baseUrl = 'https://z1nfuue2tk.execute-api.us-west-2.amazonaws.com/prod/blogs';
    var headers = {
            'Content-Type': 'application/json'
          }
    return {
      getOne: ({ id }) => axios.get(`${baseUrl}/${id}`),
      getAll: () => axios.get(baseUrl),
      update: (toUpdate) =>  axios.put(baseUrl,toUpdate),
      create: (toCreate) =>  axios.post(baseUrl,toCreate,headers),
      delete: ({ id }) =>  axios.delete(`${baseUrl}/${id}`)
    }
  }
}
