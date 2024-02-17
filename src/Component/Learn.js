import { Link } from "react-router-dom";
import img from "../images//1stimage.png";
import image from "../images//2rowimage.png";
import image1 from "../images//3rdpick.png";
import image2 from "../images//4pick.png";
import image3 from "../images//5pick.png";
import image4 from "../images//6pick.png";
import image5 from "../images//first.png";
import image6 from "../images//second.png";
import image7 from "../images//third.png";
import image8 from "../images//forth.png";
import image10 from "../images//fifth.png";
import image11 from "../images//sixth.png";
import image12 from "../images//seventh.png";
const Home = () => {
  return (
    <>
      <div className="container align-center">
        <div className="row mt-5">
          <div className="col-md-12 col-sm-12 bg-white p-2 mt-5">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              className="mt-5"
              style={{ width: "120px" }}
              alt="/"
            />
            <h1>React</h1>
            <h4>The library for web and native user interfaces</h4>
            <Link className="btn btn-secondary m-2 fs-3" to="/Learn">
              Learn react
            </Link>
            <Link className="btn btn-primary m-2 fs-3" to="/Learn">
              API Referance
            </Link>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 col-sm-12 bg-white p-2 mt-5">
            <h1 className="mt-5">
              Create user interfaces <br /> from components
            </h1>
            <h5 className="mt-5">
              React lets you build user interfaces out of individual pieces
              called components. <br /> Create your own React components like
              Thumbnail, LikeButton, and Video. <br /> Then combine them into
              entire screens, pages, and apps.
            </h5>
            <img src={img} className="img-fluid mt-5" alt="/" />

            <h5 className="mt-5">
              Whether you work on your own or with thousands of other
              developers, using <br /> React feels the same. It is designed to
              let you seamlessly combine components
              <br /> written by independent people, teams, and organizations.
            </h5>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 col-sm-12 bg-white p-2 mt-5">
            <h1 className="mt-5">
              Write components <br />
              with code and markup
            </h1>
            <h5>
              React components are JavaScript functions. Want to show some
              content <br /> conditionally? Use an if statement. Displaying a
              list? Try array map(). Learning <br />
              React is learning programming.
            </h5>
            <img src={image} className="img-fluid" alt="/" />

            <h5 className="mt-5">
              This markup syntax is called JSX. It is a JavaScript syntax
              extension popularized <br />
              by React. Putting JSX markup close to related rendering logic
              makes React <br />
              components easy to create, maintain, and delete.
            </h5>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 col-sm-12 bg-white p-2 mt-5">
            <h1 className="mt-5">
              Add interactivity
              <br />
              wherever you need it
            </h1>
            <p>
              React components receive data and return what should appear on the
              screen. <br /> types into an input. React will then update the
              screen to match the new data.
            </p>
            <img src={image1} className="img-fluid" alt="/" />

            <h5 className="mt-5">
              This markup syntax is called JSX. It is a JavaScript syntax
              extension popularized <br />
              by React. Putting JSX markup close to related rendering logic
              makes React <br />
              components easy to create, maintain, and delete.
            </h5>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 col-sm-12 bg-white p-2 mt-5">
            <h1 className="mt-5">
              Go full-stack
              <br />
              with a framework
            </h1>
            <p>
              React is a library. It lets you put components together, but it
              doesn’t prescribe <br />
              how to do routing and data fetching. To build an entire app with
              React, we <br />
              recommend a full-stack React framework like Next.js or Remix.
            </p>
            <img src={image2} className="img-fluid" alt="/" />

            <p className="mt-5">
              React is also an architecture. Frameworks that implement it let
              you fetch data in
              <br />
              asynchronous components that run on the server or even during the
              build. Read <br />
              data from a file or a database, and pass it down to your
              interactive components.
            </p>
            <button className="btn btn-secondary">
              Get start with a frame work
            </button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12 col-sm-12 bg-white p-2 mt-5">
            <h1 className="mt-5">
              Use the best from
              <br />
              every platform
            </h1>
            <p>
              People love web and native apps for different reasons. React lets
              you build both <br />
              web apps and native apps using the same skills. It leans upon each
              platform’s
              <br />
              unique strengths to let your interfaces feel just right on every
              platform.
            </p>
            <img src={image3} className="img-fluid" alt="/" />

            <p className="mt-5">
              With React, you can be a web and a native developer. Your team can
              ship to many
              <br />
              platforms without sacrificing the user experience. Your
              organization can bridge
              <br />
              the platform silos, and form teams that own entire features
              end-to-end.
            </p>
            <button className="btn btn-secondary">
              Build For Native platform
            </button>
          </div>
        </div>

        <div className="row mt-5 text-start">
          <div className="col-md-6 col-sm-12 bg-white p-2 mt-5">
            <h1 className="mt-5 ">
              Upgrade when the
              <br />
              future is ready
            </h1>
            <p className="mt-3">
              React approaches changes with care. Every React commit is tested
              on business-critical surfaces with over a billion users. Over
              100,000 React components at Meta help validate every migration
              strategy.
            </p>
            <p>
              The React team is always researching how to improve React. Some
              research takes years to pay off. React has a high bar for taking a
              research idea into production. Only proven approaches become a
              part of React.
            </p>
            <button className="btn btn-secondary">Read more React news</button>
          </div>
          <div className="col-md-6 col-sm-12 bg-white p-2 mt-5">
            <img src={image4} className="img-fluid" alt="/" />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-12 col-sm-12 bg-white p-2 mt-5">
            <h1 className="mt-5">
              Join a community
              <br />
              of millions
            </h1>
            <p>
              You’re not alone. Two million developers from all over the world
              visit the React <br />
              docs every month. React is something that people and teams can
              agree on.
            </p>
          </div>
        </div>

        <div className="row ">
          <div className="col-md-12 col-sm-12 bg-white p-2 mt-5">
            <marquee className='images'>
              <img
                src={image5}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image6}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image7}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image8}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image12}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image10}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image11}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image7}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image6}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image10}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image8}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
               <img
                src={image11}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
               <img
                src={image6}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
              <img
                src={image7}
                behavior="alternate"
                className="img-fluid m-3 fs-5"
                alt="/"
              />
            </marquee>
            <p>This is why React is more than a library, an architecture, or even an ecosystem.<br/>  React is a community. It’s a place where you can ask for help, find opportunities, <br/> and meet new friends. You will meet both developers and designers,<br/> beginners and experts, researchers and artists, teachers and students.<br/> Our backgrounds may be very different, but React lets us all create user interfaces together.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
