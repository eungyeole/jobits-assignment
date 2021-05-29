  
import { AxiosPromise } from "axios";
import { LegacyRef, useCallback, useEffect, useRef, useState } from "react";

export function useInfiniteScroll<T>(getData : (page : number) => AxiosPromise<any>): [LegacyRef<HTMLDivElement>,T[], boolean, boolean]{
  const ref = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState<number>(0);
  const [last, setLast] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(true);
  const scrollEvent = useCallback(()=>{
    const scrollHeight = Math.max(ref.current.scrollHeight);
    const scrollTop = Math.max(ref.current.scrollTop);
    const clientHeight = ref.current.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight-200) { 
      setLoading(true);
    }
  },[])
  useEffect(()=>{
    ref.current.addEventListener("scroll",scrollEvent)
    return () => ref.current && ref.current.removeEventListener("scroll",scrollEvent);
  },[ref])
  useEffect(()=>{
    if(loading && !last){
      setPage((oldPage)=>{
        getData(oldPage+1).then((res)=>{
          if(res.data.length===0) setLast(true);
          setData([...data, ...res.data.data])
          setLoading(false);
        })
        .catch((e)=>{
          setLoading(false);
          setLast(true)
        })
        return oldPage+1;
      }) 
    }
  },[loading])
  useEffect(()=>{
    if(last) window.removeEventListener("scroll",scrollEvent);
  },[last])
  return [ref, data, loading, last];
}