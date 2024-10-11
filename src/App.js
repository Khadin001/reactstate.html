import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personne: {
        fullName: 'Khadim Senghor',
        bio: 'Développeur web passionné',
        imgSrc: 'https://i.pinimg.com/564x/09/c8/ab/09c8ab7a37f5694c3374bb08c8a93fb6.jpg ',
        profession: 'Développeur'
      },
      show: false,
      elapsedTime: 0
    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.personne;
    const { show, elapsedTime } = this.state;

    return (
      <div className="App">
        <h1>Profil de la Personne</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Cacher le profil' : 'Afficher le profil'}
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p><strong>Profession :</strong> {profession}</p>
          </div>
        )}
        <p>Temps écoulé : {elapsedTime} secondes</p>
      </div>
    );
  }
}

export default App;

