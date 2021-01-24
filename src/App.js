import React, { useState, useRef, useEffect } from "react";
import HomeSvg from "./Svg/HomeSvg";
import MessageSvg from "./Svg/MessageSvg";
import CompassSvg from "./Svg/CompassSvg";
import LikeSvg from "./Svg/LikeSvg";
import CommentSvg from "./Svg/CommentSvg";
import SavepicSvg from "./Svg/SavepicSvg";
import { AiOutlineEllipsis } from "react-icons/ai";

function App() {
  const [ishover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const hovercontainer = useRef(null);
  const headerbutton = useRef(null);

  useEffect(() => {
    const hoverElement = hovercontainer.current;
    if (ishover) {
      hoverElement.style.display = "inline";
    } else {
      hoverElement.style.display = "none";
    }
  }, [ishover]);

  useEffect(() => {
    const header_button = headerbutton.current;
    if (isClicked) {
      header_button.style.display = "inline";
    } else {
      header_button.style.display = "none";
    }
  }, [isClicked]);

  return (
    <div>
      <div className="header">
        <div className="header__container">
          <div className="header__first">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt="pix"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "200px",
                height: "30px",
                outline: "none",
                border: "1px solid rgb(216, 214, 214 )",
                borderRadius: "5px",
                paddingLeft: "5px",
              }}
            />
          </div>
          <div className="header__third">
            <HomeSvg />
            <MessageSvg />
            <CompassSvg />
            <LikeSvg />
            <img
              style={{ height: "30px", width: "30px", borderRadius: "100px" }}
              src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="pix"
            />
          </div>
        </div>
      </div>
      <div className="page">
        <div className="page__container">
          <div className="page__suggestions">
            <div className="page__suggestions__header__main">
              <div className="page__suggestions__header__left">
                <img
                  className="page__suggestions__header__logo"
                  src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="pix"
                />
                <p style={{ fontWeight: "bold" }}>leo_nex_</p>
              </div>
              <div className="page__suggestions__header__right">
                <button
                  style={{
                    color: "aqua",
                    padding: "0",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}
                >
                  Switch
                </button>
              </div>
            </div>
            <div className="page__suggestions__body">
              <h4 style={{ color: "gray" }}>Suggestions For You</h4>
              <h4>See All</h4>
            </div>
            <div className="page__suggestions__header">
              <div className="page__suggestions__header__body__left">
                <img
                  className="page__suggestions__header__body__logo"
                  src="https://images.pexels.com/photos/1735671/pexels-photo-1735671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <div>
                  <p style={{ fontWeight: "bold" }}>nisha_nr</p>
                  <p style={{ fontSize: "0.8rem" }}>Followed by sonali_sb</p>
                </div>
              </div>
              <div className="page__suggestions__header__right">
                <button
                  style={{
                    color: "aqua",
                    padding: "0",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}
                >
                  Follow
                </button>
              </div>
            </div>

            <div className="page__suggestions__header">
              <div className="page__suggestions__header__body__left">
                <img
                  className="page__suggestions__header__body__logo"
                  src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <div>
                  <p style={{ fontWeight: "bold" }}>ritika.r</p>
                  <p style={{ fontSize: "0.8rem" }}>Followed by jessica_kr</p>
                </div>
              </div>
              <div className="page__suggestions__header__right">
                <button
                  style={{
                    color: "aqua",
                    padding: "0",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
            <div className="page__suggestions__header">
              <div className="page__suggestions__header__body__left">
                <img
                  className="page__suggestions__header__body__logo"
                  src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <div>
                  <p style={{ fontWeight: "bold" }}>ak_don_</p>
                  <p style={{ fontSize: "0.8rem" }}>Followed by rohan.roy.</p>
                </div>
              </div>
              <div className="page__suggestions__header__right">
                <button
                  style={{
                    color: "aqua",
                    padding: "0",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
            <div className="page__suggestions__header">
              <div className="page__suggestions__header__body__left">
                <img
                  className="page__suggestions__header__body__logo"
                  src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <div>
                  <p style={{ fontWeight: "bold" }}>karan_</p>
                  <p style={{ fontSize: "0.8rem" }}>Followed by ankit.negi_</p>
                </div>
              </div>
              <div className="page__suggestions__header__right">
                <button
                  style={{
                    color: "aqua",
                    padding: "0",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
          <div className="page__stories">
            <div className="page__stories__main">
              <div className="page__stories__container">
                <img
                  className="page__stories__logo"
                  src="https://images.pexels.com/photos/1553783/pexels-photo-1553783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <p>ankit.negi_</p>
              </div>
              <div className="page__stories__container">
                <img
                  className="page__stories__logo"
                  src="https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <p>sonali_sb</p>
              </div>
              <div className="page__stories__container">
                <img
                  className="page__stories__logo"
                  src="https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <p>jessica_kr</p>
              </div>
              <div className="page__stories__container">
                <img
                  className="page__stories__logo"
                  src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <p>ankita.ak</p>
              </div>
              <div className="page__stories__container">
                <img
                  className="page__stories__logo"
                  src="https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="pix"
                />
                <p>rohan.roy.</p>
              </div>
            </div>
          </div>
          <div className="page__posts">
            <div
              className="page__posts__header__right__button"
              ref={headerbutton}
            >
              <div
                className="page__posts__header__right__button__div"
                style={{ color: "red" }}
              >
                Report
              </div>
              <div
                className="page__posts__header__right__button__div"
                style={{ color: "red" }}
              >
                Unfollow
              </div>
              <div className="page__posts__header__right__button__div">
                Go to post
              </div>
              <div
                className="page__posts__header__right__button__div"
                onClick={() => setIsClicked(false)}
              >
                Cancel
              </div>
            </div>
            <div
              className="page__posts__image__hover__container"
              ref={hovercontainer}
            >
              <div className="page__posts__image__hover__header">
                <div className="page__posts__image__hover__header__left">
                  <img
                    className="page__posts__header__logo"
                    src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt="pix"
                  />
                  <div style={{ position: "relative", height: "100%" }}>
                    <p style={{ fontWeight: "bold", marginLeft: "20px" }}>
                      leo_nex_
                    </p>
                    <h4
                      style={{
                        fontWeight: "bold",
                        color: "gray",
                        marginLeft: "20px",
                      }}
                    >
                      |Rahul Gaira|
                    </h4>
                    <p style={{ fontWeight: "bold", marginLeft: "20px" }}>
                      Followed by ankit.negi_
                    </p>
                  </div>
                </div>
              </div>
              <div className="page__posts__image__hover__body1">
                <div
                  style={{
                    width: "33%",
                    height: "100%",
                    backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4>198</h4>
                  <p>Posts</p>
                </div>
                <div
                  style={{
                    width: "33%",
                    height: "100%",
                    backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4>8158</h4>
                  <p>followers</p>
                </div>
                <div
                  style={{
                    width: "33%",
                    height: "100%",
                    backgroundColor: "red",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4>123</h4>
                  <p>Followings</p>
                </div>
              </div>
              <div className="page__posts__image__hover__body">
                <img
                  className="page__posts__image__hover__body__images"
                  src=" https://images.unsplash.com/photo-1523469615101-40c35985fb90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJveXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="pix"
                />
                <img
                  className="page__posts__image__hover__body__images"
                  src=" https://images.unsplash.com/photo-1523469615101-40c35985fb90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJveXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="pix"
                />
                <img
                  className="page__posts__image__hover__body__images"
                  src=" https://images.unsplash.com/photo-1523469615101-40c35985fb90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJveXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="pix"
                />
              </div>

              <div className="page__posts__image__hover__footer">
                <button
                  style={{
                    width: "49%",
                    height: "90%",
                    outline: "none",
                    border: "1px solid rgb(216,214,214)",
                    borderRadius: "5px",
                  }}
                >
                  Message
                </button>
                <button
                  style={{
                    width: "49%",
                    height: "90%",
                    outline: "none",
                    border: "1px solid rgb(216,214,214)",
                    borderRadius: "5px",
                  }}
                >
                  Following
                </button>
              </div>
            </div>

            <div className="page__posts__header">
              <div className="page__posts__header__left">
                <img
                  className="page__posts__header__logo"
                  src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="pix"
                  onMouseOver={() => {
                    setIsHover(true);
                  }}
                  onMouseLeave={() => {
                    setIsHover(false);
                  }}
                />
                <p style={{ fontWeight: "bold" }}>leo_nex_</p>
              </div>
              <div className="page__posts__header__right">
                <AiOutlineEllipsis
                  style={{ height: "40px", width: "40px" }}
                  onClick={() => setIsClicked(true)}
                />
              </div>
            </div>
            <div className="page__posts__body">
              <img
                className="page__posts__image"
                src=" https://images.unsplash.com/photo-1523469615101-40c35985fb90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJveXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="pix"
              />
            </div>
            <div className="page__posts__icons">
              <div className="page__posts__icons__left">
                <LikeSvg />
                <CommentSvg />
                <MessageSvg />
              </div>
              <div className="page__posts__icons__right">
                <SavepicSvg />
              </div>
            </div>
            <div className="page__posts__footer">
              <div className="page__posts__footer__left">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  style={{
                    height: "25px",
                    width: "800px",
                    outline: "none",
                    border: "none",
                    fontSize: "1.2rem",
                  }}
                />
              </div>
              <div className="page__posts__footer__right">
                <button
                  disabled
                  style={{
                    color: "aqua",
                    padding: "0",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>

          <div className="page__posts">
            <div className="page__posts__header">
              <div className="page__posts__header__left">
                <img
                  className="page__posts__header__logo"
                  src="https://images.unsplash.com/photo-1519764622345-23439dd774f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Ym95c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt="pix"
                />
                <p style={{ fontWeight: "bold" }}>leo_nex_</p>
              </div>
              <div className="page__posts__header__right">
                <AiOutlineEllipsis style={{ height: "40px", width: "40px" }} />
              </div>
            </div>
            <div className="page__posts__body">
              <img
                className="page__posts__image"
                src=" https://images.unsplash.com/photo-1523469615101-40c35985fb90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGJveXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="pix"
              />
            </div>
            <div className="page__posts__icons">
              <div className="page__posts__icons__left">
                <LikeSvg />
                <CommentSvg />
                <MessageSvg />
              </div>
              <div className="page__posts__icons__right">
                <SavepicSvg />
              </div>
            </div>
            <div className="page__posts__footer">
              <div className="page__posts__footer__left">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  style={{
                    height: "25px",
                    width: "800px",
                    outline: "none",
                    border: "none",
                    fontSize: "1.2rem",
                  }}
                />
              </div>
              <div className="page__posts__footer__right">
                <button
                  disabled
                  style={{
                    color: "aqua",
                    padding: "0",
                    border: "none",
                    background: "none",
                    outline: "none",
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
