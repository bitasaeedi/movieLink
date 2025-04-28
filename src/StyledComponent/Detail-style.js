import styled from 'styled-components';

export const Path = styled.div`
  margin: 4rem 0 3rem;
  display: flex;
  font-size: .8rem;

  & > img {
    width: 20px;
    height: 18px;
    margin-left: .5rem;

  }

  & > div.text1 {
    color: #878787;
    font-weight: 600;
  }

  & > div.text2 {
    color: #FFFFFF;
    padding-right: .5rem;
  }
`
export const Container = styled.div`
  height: 330px;
  display: flex;
  background-image: url(reqire('../public/kh.jpg'));
  padding: 2rem 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & > img {
    width: 280px;
    height: 100%;
    margin-left: 3rem;
  }
`
export const Info = styled.div`
  color: #C3C3C3;

  & > div > h6 {
    display: inline-block;
    font-weight: 800;
    font-size: 1.3rem;
    margin: 2rem 0 2rem 1rem;
  }

  & > div > span {
    font-size: .9rem;
    word-spacing: .5rem;
    color: rgba(255, 255, 255, 0.82);
  }

  & > div.time {
    font-size: .75rem;
    font-weight: 700;

    & > img {
      width: 18px;
      margin-left: .8rem;
      position: relative;
      top: .2rem;
    }
  }

  & > div.actors {
    margin-top: 1.5rem;
    font-weight: 800;
    font-size: .8rem;
    word-spacing: .15rem;

    & > div {
      padding-bottom: 1rem;
    }
  }

  & > div.year {
    margin-top: 1.5rem;
    font-weight: 600;
    font-size: .7rem;
    color: rgba(255, 255, 255, 0.8);
  }
`
export const Summary = styled.div`
  margin: 4rem 0 9rem;
  color: #B6B5A9;
  font-size: .9rem;
  word-spacing: .1rem;
  width: 95%;

  & > h6 {
    font-size: .9rem;
    color: rgba(237, 234, 176, 0.6);
    margin-bottom: 1rem;
  }

`
export const LinkBox = styled.div`
  width: 90%;
  margin: 0 auto 5rem;
  background-color: rgba(23, 27, 37, 1);
  border: 1px solid rgba(192, 190, 156, 0.53);
  border-radius: 55px;

  & > h6 {
    color: rgba(193, 191, 139, 0.6);
    border-bottom: 1px solid rgba(192, 190, 156, 0.53);
    text-align: center;
    margin: 0;
    padding: 1rem 0;
    font-size: .9rem;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    color:rgba(192, 190, 156, 0.53);

    & > div {
      width: 33%;
      font-weight: 700;
      text-align: center;
      line-height: 3rem;
      padding-top: 1.2rem;

      &.center {
        border-left: 1px solid rgba(192, 190, 156, 0.53);
        border-right: 1px solid rgba(192, 190, 156, 0.53);
      }

      & > button {
        margin: 1.5rem 0 2rem;
        padding: .5rem 4rem;
        background-color: unset;
        border: 1px solid rgba(118, 115, 51, 0.72);
        color: #8E8E8E;
        font-size: 1rem;
        font-weight: 700;
        font-family: estedad, serif;
        border-radius: 30px;
      }
    }
  }
`