import Movie from '@/components/movies/Movie';

const AllMovies = ({ movies = ['1', '2', '3', '4', '5'] }) => {
  return (
    <>
      This is All Movies <br></br>
      {movies.map((movie) => (
        <Movie name={movie} key={movie} />
      ))}
    </>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
const getStaticPaths = async () => {
  // const res = await fetch('https://.../posts');
  // const posts = await res.json();
  // Get the paths we want to pre-render based on posts
  // const paths = posts.map((post) => ({
  //   params: { id: post.id },
  // }));
  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  // return { paths, fallback: 'blocking' };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
const getStaticProps = async () => {
  // const res = await fetch('https://.../posts');
  // const posts = await res.json();
  // return {
  //   props: {
  //     posts,
  //   },
  // Next.js will attempt to re-generate the page:
  // - When a request comes in
  // - At most once every 10 seconds
  //   revalidate: 10, // In seconds
  // };
};

export { getStaticPaths, getStaticProps };
export default AllMovies;
