import React from 'react';
import './App.css';

// 1. Data arrays matching lab hints and layout requirements
export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11 ', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

export const courses = [
  { id: 1, cname: 'Angular', date: '4/5/2021' },
  { id: 2, cname: 'React', date: '6/3/20201' },
];

export const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', content: 'You can install React from npm.' },
];

function App(props) {
  // Conditional Rendering via Element Variable with map() & key extraction (Book Details)
  const bookdet = (
    <ul>
      {books.map((book) => (
        <div key={book.id} style={{ marginBottom: '20px' }}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  // Conditional Rendering via Element Variable (Course Details)
  const coursedet = (
    <ul>
      {courses.map((course) => (
        <div key={course.id} style={{ marginBottom: '25px' }}>
          <h2>{course.cname}</h2>
          <p><b>{course.date}</b></p>
        </div>
      ))}
    </ul>
  );

  // Conditional Rendering via Element Variable (Blog Details)
  const content = (
    <div>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: '25px' }}>
          <h2>{blog.title}</h2>
          <p><b>{blog.author}</b></p>
          <p style={{ color: '#555' }}>{blog.content}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div className="container">
        {/* Course Details Section */}
        <div className="mystyle1">
          <h1>Course Details</h1>
          {coursedet}
        </div>

        {/* Book Details Section */}
        <div className="st2">
          <h1>Book Details</h1>
          {bookdet}
        </div>

        {/* Blog Details Section */}
        <div className="v1">
          <h1>Blog Details</h1>
          {content}
        </div>
      </div>
    </div>
  );
}

export default App;