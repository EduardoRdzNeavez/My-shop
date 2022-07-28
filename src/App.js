import './App.css';
import { useEffect, useRef, useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import { Ref } from 'react';

function App() {

  const inputRef = useRef(null);
//
  return (
    <>
    <Header></Header>
      <p>text welcome</p>
    <Footer></Footer>
    </>
  );
}

export default App;


const example = () => {}