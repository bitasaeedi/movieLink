import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`
export const Menu = styled.div`
  width: 20%;
  border-left: 1px solid rgba(145, 147, 151, 1);
  background-color: rgba(27, 33, 47, 0.8);
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  color: #C4C4C6;

  & > img {
    display: block;
    margin: 3rem auto;
    width: 200px;
  }

  & > nav > a {
    display: block;
    color: #C4C4C6;
    text-decoration: none;
    font-family: estedad, serif;
    padding: 1.2rem 0;
    margin: .5rem 0;
    text-align: center;

    &.active {
      background-color: rgba(84, 91, 106, 0.3);
    }
  }
`

export const DeleteContainer = styled.div`
  color: white;
  width: 60%;
  margin: 16rem 25rem 0 0;
  text-align: center;

  & > div {
    margin-bottom: 3rem;
  }
`
export const UpdateContainer = styled.div`
  color: white;
  width: 60%;
  margin: 9rem 25rem 0 0;
  text-align: center;

  & > div {
    font-size: .9rem;
    text-align: right;
    width: 42%;
    margin: 0 auto;
    padding-bottom: 1rem;
    color: #B3B7BE;
  }
`
export const AddMovieContainer = styled.div`
  margin: 4rem 17rem 0 0;
  color: #B3B7BE;
  padding: 0 5rem;
  &>div.info{
    display: flex;
    justify-content: space-between;
    &>div{
      width: 40%;
    }
  }
`

export const Input = styled.input`
  background-color: rgba(28, 34, 49, 0.7);
  border: 1px solid rgba(160, 165, 174, 0.8);
  border-radius: 12px;
  padding: 1rem;
  width: 300px;
  margin: 0 auto 2rem;
  font-size: 1rem;
  display: block;
  color: rgba(255, 255, 255, 0.71);
`
export const TextArea=styled.textarea`
  background-color: rgba(28, 34, 49, 0.7);
  border: 1px solid rgba(160, 165, 174, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  width: 89%;
  margin: 1rem 0 1.9rem;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.71);
`
export const Input2 = styled(Input)`
  width: ${props => props.width? "90%" : "270px"};
  margin: ${props => props.margin ? "1rem 0 1.9rem" : "1rem 0 3rem"};
  
`
export const Button = styled.button`
  display: block;
  margin: ${props => props.type ? "5rem auto 0rem" : "3rem auto 0"};
  background-color: rgba(28, 34, 49, 0.7);
  border: 1px solid #7C7C7C;
  border-radius: 60px;
  color: rgba(255, 255, 255, 0.76);
  padding: .7rem 5rem;
  font-size: 1rem;
  font-family: estedad, serif;
  font-weight: 600;
`