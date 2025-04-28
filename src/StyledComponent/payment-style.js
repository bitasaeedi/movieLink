import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  height: 500px;
  margin: 6rem auto;
  border: 1px solid #C0BE9C;
  border-radius: 45px;
  color: rgba(187, 185, 146, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    margin: ${props => props.type ? "3rem auto 0rem" : "4rem auto"};

  }

  & > div {
    text-align: center;
    color: rgba(199, 199, 187, 0.8);;

    & > h6 {
      color: rgba(187, 185, 146, 0.8);
      font-size: 1rem;
      font-weight: 600;
      word-spacing: .2rem;
      margin-bottom: 1rem;

    }

    & > div {
      font-size: .75rem;
      cursor: pointer;
      padding: .5rem 0;
    }

    & > .link {
      border-bottom: 1px solid rgba(255, 255, 255, 0.24);
      padding-bottom: 0;
    }

    & > a {
      margin-top: 2rem;
      display: inline-block;
      text-decoration: none;
      color: rgba(147, 147, 147, 1);
      background-color: rgba(44, 47, 53, 0.71);
      border: 1px solid #C0BE9C;
      font-size: .73rem;
      font-weight: 600;
      border-radius: 33px;
      padding: .8rem 1rem;
    }
  }
`