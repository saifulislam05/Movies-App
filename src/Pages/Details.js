
import Collection from "../components/Collections/Collection";
import CastList from "../components/Details/CastList";
import MovieInfo from "../components/Details/MovieInfo";
import VideoList from "../components/Details/VideoList";
import { movie, cast, videos } from "../dummyData/data";

const Details = () => {

  return (
    <div className="w-10/12 mx-auto my-14">
      <MovieInfo movie={movie} />
      <CastList cast={cast} />
      <VideoList videos={videos} />
      <Collection title="Similar Movies" />
      <Collection title="Recommendations" />
    </div>
  );
};

export default Details;
