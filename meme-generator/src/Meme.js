import Data from "./memesData.js"

const getImage = () => {
  let image = Data.data.memes.url
  r
   }


const Meme = () => {
  return (
    <div className="meme-width">
      <form className="form" action="">
        <input type="text" placeholder="hello"/>
        <input type="text" placeholder="hello"/>
        <button className="meme-button">Get a new image</button>
        <img src={getImage()} alt=""/>
      </form>
    </div>
  )
}

export default Meme
