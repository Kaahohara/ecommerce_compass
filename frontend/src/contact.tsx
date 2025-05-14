import React from 'react';
import './App.css';
import Products from './components/products';
import Banner from './components/banner';
import PetSellers from './components/petsellers';
import PetKnowledge from './components/PetKnowledge';


function Contact() {
  return (
    <div>
        
        <Banner title='One more friend' subtitle='Thousands more fun!' description=' Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!' image='/images/principalbanner.png' variant='principal' />
        <Products category='Pet' subtitle='Whats new?' title='Take a look at some of our pets' variant={''} filters={{
        gender: [],
        color: [],
        breed: []
      }} />
        <Banner title='One more friend' subtitle='Thousands more fun!' description=' Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!' image='/images/petsbanner.png' variant='right' />
        <Products category='Product' subtitle='Our products' title='Hard to choose right products for your pets?' variant={''} filters={{
        gender: [],
        color: [],
        breed: []
      }}/>
        <PetSellers/>
        <Banner title='Adoption' subtitle='We need help. So Do They.' description='Adopt a pet and give it a home, it will be love you back unconditionally.' image='/images/yellowbanner.png' variant='left' button="reverse"/>
       <PetKnowledge/>
    </div>
  );
}

export default Contact;
