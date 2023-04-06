import imageCaroline from '../../../assets/images/image5.jpeg';
import imageHands from '../../../assets/images/image0 (1).jpeg';


const AboutImages = () => {
  return (
    <div className="images-container">
      <img className="image image2" alt="myself" src={imageCaroline}></img>
      <img className="image image1" alt="giving a massage" src={imageHands}></img>
    </div>
  )
}

export default AboutImages;
