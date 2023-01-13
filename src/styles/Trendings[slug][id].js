import styled from 'styled-components';

export const TrendingSlugIdContainer = styled.div`
  background-image: ${(props) => props.backgroundImage};
  background-size: cover;
  background-position: center;
  height: 100vh;

  h2 {
    color: ${(props) => props.theme.colors['gray-400']};
    font-size: 1.4rem;
  }
`;

export const TrendingSlugIdEffectHorizontal = styled.div`
  width: inherit;
  height: inherit;
  background-image: linear-gradient(to right, #111111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 0 15rem 3rem;
`;

export const TrendingSlugIdEffectVertical = styled.div`
  width: inherit;
  height: inherit;
  background-image: linear-gradient(to top, #111111 10%, transparent 90%);
`;

export const TrendingSlugIdTitle = styled.h1`
  margin-top: 3.2rem;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const TrendingSlugIdDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  span {
    font-size: 1.6rem;
    font-weight: 600;

    padding: 0.2rem 0.4rem;
    border-radius: 4px;

    color: ${(props) => props.theme.colors['red-600']};
    background-color: ${(props) => props.theme.colors['gray-100']};
  }
`;

export const TrendingSlugIdSlogan = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1.6rem;
  margin-bottom: 0.4rem;

  h3 {
    font-size: 1.4rem;
  }
`;

export const TrendingSlugIdGenres = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    h3 {
      font-size: 1.4rem;
    }
  }
`;

export const AverageVotes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  margin-top: 0.8rem;

  span {
    font-size: 1.4rem;
  }
`;

export const TrendingSlugIdVoteAverage = styled(AverageVotes)``;
export const TrendingSlugIdVotes = styled(AverageVotes)``;

export const TrendingSlugIdDescription = styled.h3`
  /* font-size: 1.4rem;
  letter-spacing: 0;
  line-height: 2rem;
  font-weight: 400;

  width: 100%;
  max-width: 70%;

  margin-top: 1.6rem; */

  margin-top: 2.4rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors['gray-100']};
  max-width: 70%;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
`;

export const TrendingSlugIdVoteProducer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  margin-top: 3.2rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    div {
      display: flex;
      align-items: center;

      gap: 0.8rem;
    }
  }
`;