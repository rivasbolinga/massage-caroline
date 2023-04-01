import { GrLanguage } from 'react-icons/gr'
import styled from 'styled-components';

const LanguageButton = () => {
  return (
    <Wrapper>
    <GrLanguage/>
    <div className='languages'>
      <button className='fr language'>fr</button>
      <div className='grey-line'></div>
      <button className='en language'>en</button>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: 211, 84, 0;
  .language {
    background: none;
  }
`

export default LanguageButton