import { useQuery } from "@tanstack/react-query"
import api from '../utils/api';

const fetchLinkSearch=({page})=>{
  return api.get(`links/search?categoryTagId=0&tagId=1&page=${page}&size=4`);
}

export const useLinkSearchQuery=({page}) => {
  return useQuery({
    queryKey:['link-search', {page}],
    queryFn: () => fetchLinkSearch({page}),
    select:(result)=>result.data
  })
}