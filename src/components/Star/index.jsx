import { useState, useEffect } from 'react';
import { Container } from './styles';
import { RiStarFill } from 'react-icons/ri';

export function Star({value}) {
  const [rating, setRating] = useState({value});

  useEffect(() => {
    setRating(value)
  },[value])

  return (
    <Container>
      {[...Array(5).keys()].map(index => {
        const ratingValue = index + 1;

        return (
          <label key={index} htmlFor={`star-${ratingValue}`}>
            <input
              id={`star-${ratingValue}`}
              type="radio"
              name="rating"
            />
            <RiStarFill
              className="star"
              color={ratingValue <= (rating) ? 'gold' : 'gray'}
            />
          </label>
        );
      })}
    </Container>
  );
}
