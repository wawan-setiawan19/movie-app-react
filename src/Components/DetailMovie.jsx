import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import DetailElement from "../elements/DetailElement";
import TrailerElements from "../elements/TrailerElements";
import DetailSkeleton from "../Skeletons/DetailSkeleton";

function DetailMovie() {
  let { id } = useParams();
  const [detail, setDetail] = useState(null);
  const [trailer, setTrailer] = useState(null);
  // const getData = async () => {
  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/movie/${id}?api_key=222e6532a1c40df943028811b533a90d&language=en-US`
  //   );
  //   const data = await response.json();
  //   const responseTraile = await fetch(
  //     `https://api.themoviedb.org/3/movie/${id}/videos?api_key=222e6532a1c40df943028811b533a90d&language=en-US`
  //   );
  //   const dataTrailer = await responseTraile.json();
  //   setDetail(data);
  //   setTrailer(dataTrailer);
  // };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=222e6532a1c40df943028811b533a90d&language=en-US`
      );
      const data = await response.json();
      const responseTraile = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=222e6532a1c40df943028811b533a90d&language=en-US`
      );
      const dataTrailer = await responseTraile.json();
      setDetail(data);
      setTrailer(dataTrailer);
    };
    getData();
  }, [id]);
  return (
    <>
      {detail == null || trailer == null ? (
        <DetailSkeleton />
      ) : (
        <>
          <DetailElement
            poster={detail.poster_path}
            backdrop={detail.backdrop_path}
            title={detail.original_title}
            rating={detail.vote_average}
            tahun={detail.release_date}
            durasi={detail.runtime}
            isForAdult={detail.adult}
            overview={detail.overview}
            genre={detail.genres}
          />
          <TrailerElements dataTrailer={trailer} />
        </>
      )}
    </>
  );
}

export default DetailMovie;
