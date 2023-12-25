import React from 'react';
import { useParams } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs.jsx';
import Comment from './Comment/Comment.jsx';
import Gallery from './Gallery/Gallery.jsx';
import News from './News/News.jsx';
import Services from './Services/Services.jsx';
import Slide from './Slide/Slide.jsx';
import Chat from '../Chatbot/Chat.js';

export default function Home() {
  const pr = useParams();
  console.log('pr', pr);
  return (
    <>
      <Slide />
      <AboutUs />
      <Services />
      <Comment />
      <Gallery />
      <News />
      <Chat />
    </>
  );
}
