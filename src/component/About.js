import React from 'react'

function About(props) {
  return (
    <div>
      <p className={`text-${props.mode==='light'? 'dark':'light'}`} my-3>TextUtilities" is a versatile and indispensable software tool designed to streamline and enhance various aspects of working with text-based data. This comprehensive utility is meticulously crafted to cater to the diverse needs of writers, researchers, developers, and anyone dealing with textual content in their daily tasks.

      At its core, TextUtilities is a collection of advanced features and functions that empower users to manipulate, analyze, and optimize text seamlessly. Whether it's processing large volumes of text for data extraction, conducting in-depth linguistic analysis, or automating text-related tasks, TextUtilities serves as a reliable companion to expedite and simplify the process. <br /> <br /><br />
      <h4><b><u>Some features:</u></b></h4>
       <b>
         <ul><li>Upper Case</li></ul>
         <ul><li>Lower Case</li></ul>
         <ul><li>Clear Text</li></ul>
         <ul><li>Copy Text</li></ul>
         <ul><li>Remove Space</li></ul>
         </b>
         And also we check total <b>Word</b>,<b>Character</b> and <b>Preview</b>
      </p>
    </div>
  )
}

export default About



