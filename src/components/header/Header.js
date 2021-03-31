// import { useState } from 'react'
// import Button from "../button/Button"

const Header = () => {
  const ifVisible = false;

  return (
    <div className="header">
  
    <div className="topbar">
      <div className="topbar-left">
      <div className="topbar-logo">
        <span className="icon-logo" />
        <span className="text-logo">Prototype</span>
      </div>
      <div className="topbar-title">Process Creator</div>
      <div className="topbar-pilot-ui"></div>

      </div>

      <div className="topbar-right">
      </div>
    </div>

      { ifVisible && <div className="logo">
        <span className="icon-logo" />
        <a href="/" className="nav-trigger"><span></span></a>
      </div>}

    </div>
  )

  // const [count, setCount] = useState(0);
  // const posts = [
  //   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  //   {id: 2, title: 'Installation', content: 'You can install React from npm.'},
  // ];

  // const inc = () => {
  //   setCount(count + 1)
  // }

  // const dec = () => {
  //   setCount(count - 1)
  // }

  // const content = posts.map((post) =>
  //   <div key={post.id}>
  //     <div>{post.id}. {post.title}</div>
  //     <p>{post.content}</p>
  //   </div>
  // );

  // return (
  //   <header>
  //     <h1>Hello From React</h1>

  //     <Button title="Increment" primary="true" handleClick={inc}></Button>
  //     <Button title="Decrement" secondary="true" handleClick={dec}></Button>
      
  //     { count >= 0 && <div>Count: {count}</div> }

  //     {content}
  //   </header>
  // )
}
export default Header