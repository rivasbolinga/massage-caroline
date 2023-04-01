import { GrLanguage } from 'react-icons/gr'
const LanguageButton = () => {
  return (
    <>
    <GrLanguage/>
    <div className='languages'>
      <button className='fr-language'>fr</button>
      <div className='grey-line'></div>
      <div className='en-language'>en</div>
    </div>
    </>
  )
}

export default LanguageButton