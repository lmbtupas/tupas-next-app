"use client"
import React, { useState } from 'react';

const NewPost = () => {

  const [form, setForm] = useState({
    title: '',
    author: '',
    body: ''
  })

  const handleChange = (e) => {
    const id = e.target.id

    setForm({
      ...form,
      [id]: e.target.value 
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={form.title} id="title" onChange={handleChange}/>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Author:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={form.author} id="author" onChange={handleChange}/>
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Body:
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={form.body} id="body" onChange={handleChange} />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;