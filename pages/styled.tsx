import styled from 'styled-components';

export default () => (
    <FlexContainer>
        <Item1>div</Item1>
        <Item2>w = 250px</Item2>
        <Item3>h = 250px</Item3>
        <Item4>w/h = 300px</Item4>
        <Item5>w = 350px</Item5>
        <Item6>w = 350px</Item6>
    </FlexContainer>
);

const FlexContainer = styled.div`
background:white;
padding: 2rem;
border: 0.25rem solid black;
display: flex;
height: 1300px;
flex-direction:row;
flex-wrap: nowrap;
align-items:center;
justify-content: flex-start;
`

const BaseItem = styled.div`
border: 0.25rem black solid;
box-sizing: border-box;
padding: 1rem;
color:white;
font-weight: bold;
font-size: 2rem;
margin: 0.25rem;
`

const Item1 = styled(BaseItem)`
background-color: #dd6b20;
`

const Item2 = styled(BaseItem)`
width: 250px;
background-color: #d69e2e;
`

const Item3 = styled(BaseItem)`
  height: 250px;
    margin-top: 1rem;
    background-color: #d69e2e;
`
const Item4 = styled(BaseItem)`
    width: 300px;
    height: 300px;
    margin-top: 1rem;
    background-color: #d69e2e;
`

const Item5 = styled(BaseItem)`
  width: 350px;
margin-top: 1rem;
background-color: #d69e2e;
flex-basis:10%;
`
const Item6 = styled(BaseItem)`
  width: 350px;
margin-top: 1rem;
background-color: #d69e2e;
`

