import './App.css';
import Song from './components/Song'

const App = () => {
  return (
    <div className="App">
      <h1>
      ♬ Community Board -- Favorite Songs ♬
      </h1>
      <h2> Check out the most played songs below!
        <Song name={"Not Me"} artist={"Jeebanoff"} image={"./src/assets/not_me.jfif"} button={"https://www.youtube.com/watch?v=e6JXZVTUA1Q"}/>
        <Song name={"About You"} artist={"The 1975"} image={"./src/assets/about_you.jfif"} button={"https://www.youtube.com/watch?v=tGv7CUutzqU"}/>
        <Song name={"Sun Maahi"} artist={"Armaan Malik"} image={"./src/assets/sun_maahi.png"} button={"https://www.youtube.com/watch?v=sK0lNipRzGI"}/>
        <Song name={"Katie Queen of Tennessee"} artist={"The Apache Relay"} image={"./src/assets/katie_queen.png"} button={"https://www.youtube.com/watch?v=K8OD2X15NFc"}/>
        <Song name={"Hello"} artist={"Jeebanoff"} image={"./src/assets/hello.jfif"} button={"https://www.youtube.com/watch?v=FlEEplNhjFM"}/>
        <Song name={"Falsafa"} artist={"Tanzeel Khan"} image={"./src/assets/falsafa.jfif"} button={"https://www.youtube.com/watch?v=ef1Aq17GhrI"}/>
        <Song name={"KTMBK"} artist={"Zaeden"} image={"./src/assets/ktmbk.jfif"} button={"https://www.youtube.com/watch?v=kpYdswZvC3w"}/>
        <Song name={"Otro Atardecer"} artist={"Bad Bunny"} image={"./src/assets/un_verano.jfif"} button={"https://www.youtube.com/watch?v=_k69U0dp6vM"}/>
        <Song name={"When You Sleep"} artist={"My Bloody Valentine"} image={"./src/assets/when_you_sleep.jfif"} button={"https://www.youtube.com/watch?v=I-Ig71fhUc8"}/>
        <Song name={"Cariño"} artist={"The Marias"} image={"./src/assets/carino.jpg"} button={"https://www.youtube.com/watch?v=myvaAKFyg2I"}/>
      </h2>
    </div>
  )
}

export default App