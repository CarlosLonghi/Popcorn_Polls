import { useState } from 'react';
import { Container } from './styles';
import { RiStarFill } from 'react-icons/ri';

export function Star() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRatingChange = (ratingValue) => {
    setRating(ratingValue);
    console.log(rating);
  };
  

  return (
    <Container>
      {[...Array(5).keys()].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i} htmlFor={`star-${ratingValue}`}>
            <input
              id={`star-${ratingValue}`}
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {setRating(ratingValue)}}
              onChange={handleRatingChange}
            />
            <RiStarFill
              className="star"
              color={ratingValue <= (hover || rating) ? 'gold' : 'gray'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </Container>
  );
}
