import React from 'react';
import jsPDF from 'jspdf';

const Blog = () => {

    const generatePDF = () => {
        const doc = new jsPDF();

        const questions = document.getElementsByTagName('h2');
        const answers = document.getElementsByTagName('p');

        for (let i = 0; i < questions.length; i++) {
            const questionText = questions[i].textContent;
            const answerText = answers[i].textContent;

            doc.text(questionText, 10, i * 50 + 20);
            doc.text(answerText, 20, i * 50 + 30, { maxWidth: 200 });
        }

        doc.save('Recipe_Fusion.pdf');
    };



    return (
        <div>
            <div className='text-center mb-5'>
                <h1 className='text-3xl font-bold my-5'>Blog Page</h1>
                <button className="btn btn-success mt-1 text-white" onClick={generatePDF}>
                    Download PDF
                </button>
            </div>
            <h2 className='font-bold text-xl text-success' id='q1'>1.Differences between Uncontrolled and Controlled Components in React?</h2>
            <p id='a1'>
                <span className='text-black font-bold text-2xl'>Ans: </span>
                Uncontrolled components in React are form elements that maintain their own internal state. The state is managed by the browser, not by React, and accessed through the DOM. Controlled components, on the other hand, are form elements whose state is controlled by React. The values of these elements are stored in state and updated through setState() or other state management techniques.
            </p>

            <h2 className='font-bold text-xl text-success' id='q2'>2.How to Validate React Props using PropTypes?</h2>
            <p id='a2'>
                <span className='text-black font-bold text-2xl'>Ans: </span>
                PropTypes is a built-in feature in React that enables you to check the type of props passed to a component. To use PropTypes, you need to import it from the 'prop-types' package and define a propTypes object in your component. This object will define the expected types of your props, which React will validate at runtime.</p>

            <h2 className='font-bold text-xl text-success' id='q3'>3.Difference between Node.js and Express.js?</h2>
            <p id='a3'>
                <span className='text-black font-bold text-2xl'>Ans: </span>
                Node.js is a server-side JavaScript runtime that allows developers to run JavaScript on the server. It provides a platform for building scalable, high-performance web applications. Express.js, on the other hand, is a lightweight web application framework that runs on top of Node.js. It provides a set of tools and features that make it easy to build web applications and APIs.
            </p>

            <h2 className='font-bold text-xl text-success' id='q4'>4.What is a Custom Hook, and Why will you create a Custom Hook?</h2>
            <p id='a4'>
                <span className='text-black font-bold text-2xl'>Ans: </span>
                A custom hook in React is a JavaScript function that allows you to reuse logic across different components. It is a way to extract stateful logic from a component and reuse it in other components. Custom hooks are created using the 'use' prefix, such as 'useFetch' or 'useLocalStorage'. You might create a custom hook when you find yourself repeating the same code in different components, or when you want to share functionality between unrelated components. Custom hooks can also make your code more readable and maintainable by abstracting away complex logic and reducing the amount of code in your components.
            </p>
        </div>
    );
};

export default Blog;

