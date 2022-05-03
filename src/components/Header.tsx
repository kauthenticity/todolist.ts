import styled from 'styled-components'
import moment from 'moment'


const Header = ()=>{
  const today = moment()
  const ordinalDay = moment.localeData().ordinal(today.day())

  return (
    <HeaderContainer>
      <TitleContainer>
        <Day>{today.format('dddd')},</Day>
        <Month>{today.format('MMMM')}</Month><Date>{ordinalDay}</Date>
      </TitleContainer>
    </HeaderContainer>
  )
}

export default Header
const HeaderContainer = styled.div`
  height : 60px;
`
const TitleContainer = styled.div`
display : flex;
  align-items: flex-end;
  justify-content: center;
  height : 50px;
  letter-spacing : 1px;
`

const Day = styled.div`
  font-family : 'Louis George Cafe Bold';
  font-size : 1.5rem;
  font-weight : bolder;
  color : #4FE3A4;
`

const Month = styled.div`
  font-size : 1.2rem;
  margin-left : 0.5rem;
  color : #4FE3A4;
`

const Date = styled.div`
  font-size : 1.2rem;
  margin-left : 0.25rem;
  color : #4FE3A4;

`