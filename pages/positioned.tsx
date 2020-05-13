import styled from 'styled-components';

export default () => {
    return (
        <Container>
            <Container2>
                <NavigationBar>
                    <NavigationContent>Navigation Bar</NavigationContent>
                </NavigationBar>
                <BackgroundImage>Background Image</BackgroundImage>
                <Features>Features</Features>
            </Container2>
        </Container>
    )
}

const Container = styled.div`
  background-color:#dd6b20;
  border: 0.25rem black solid;
  height: 1024px;
`


const Container2 = styled.div`
  background-color:white;
  margin: 2rem;
  border: 0.25rem black solid;
`

const Base = styled.div`
  background-color: darkgray;
  border: 0.25rem black solid;
  color: white;
  padding: 1rem;
  margin:0.25rem;
`
const NavigationBar = styled(Base)`
    position:fixed;
    left: 30px;
    top: 300px;
`

const NavigationContent = styled(Base)`
  position: absolute;
  left: 10px;
  top:10px;
`
const BackgroundImage = styled(Base)``
const Features = styled(Base)``
