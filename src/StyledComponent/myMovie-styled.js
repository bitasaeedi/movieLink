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
export const MyMovies_Container = styled.div`

`
export const Movie = styled.div`
  border: 1px solid rgba(192, 190, 156, 1);
  display: flex;
  margin-bottom: 3rem;
  border-radius: 45px;
  padding: 2rem ;
  &>img{
    height: 230px;
    border-radius: 14px;
    margin-left: 3rem;
  }
  &>div>div.name{
    color: #96957E;
    margin: 2.7rem 0 2rem;
    font-weight: 800;
    font-size: 1.1rem;
  }
  &>div>div.title{
    color: #DADADA;
    font-size: .8rem;
    font-weight: 700;
  }
  &>div>div.link{
    color: #DADADA;
    margin: 1rem 0 1.8rem;
  }
  &>div>div.quality{
    color: #DADADA;
    font-size: .8rem;
    &>span{
      font-weight: 600;
    }
  }
`
