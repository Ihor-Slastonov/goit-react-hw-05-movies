import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { Loader } from 'components/Loader/Loader';
import { fetchMovieReviews } from 'services/movieApi';


export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    setLoader(true);

    async function fetchReviews() {
      try {
        const reviews = await fetchMovieReviews(movieId);
        console.log(reviews);
        if (reviews.length === 0) {
          return toast('Sorry, there are no reviews');
        }
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
      {loader && <Loader/>}
    </>
  );
};
