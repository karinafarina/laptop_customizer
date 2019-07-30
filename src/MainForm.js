import React, { Component } from 'react';

function MainForm(props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      { props.features }
    </section>
  )
}

export default MainForm;