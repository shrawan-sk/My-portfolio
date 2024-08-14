import React from 'react';
import Nav from './Nav';

const projects = () =>{
    return(
        <>
        
        <Nav></Nav>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <section className="text-center p-8 bg-white shadow-lg rounded-lg">
                <h1 className="text-4xl font-bold text-blue-900 mb-4">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\project1.png" alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Assignment 3</h2>
                        <p className="text-gray-700">Designing a Page that consist of link to all other assignment.</p>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\project2.png" alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Assignment 4</h2>
                        <p className="text-gray-700">Responsive page that can be adujested according to the screen size.</p>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-gray-200 p-4 rounded-lg">
                        <img src="src\assets\project3.png" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-xl font-bold text-blue-600 mb-2">Final Assignment</h2>
                        <p className="text-gray-700">Final Assignment of the Web Page Development that includes sort of everything.</p>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default projects