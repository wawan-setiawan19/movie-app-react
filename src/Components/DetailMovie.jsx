import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailSkeleton from "../Skeletons/DetailSkeleton";

function DetailMovie() {
  let { id } = useParams();
  const [detail, setDetail] = useState(null);
  const getData = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=222e6532a1c40df943028811b533a90d&language=en-US`
    );
    const data = await response.json();
    setDetail(data);
  };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      {detail == null ? <DetailSkeleton /> : <div>{detail.original_title}</div>}
    </>
  );
}

export default DetailMovie;
