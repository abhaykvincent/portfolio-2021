import React, { /* useEffect, useRef, */ useState } from 'react';
import './App.scss';
// Components
import Header from './components/header/header'

// Vendors

// React Scroll Parallax
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// AOS script and css import
import AOS from 'aos';
import 'aos/dist/aos.css'

//AOS initalization
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 100, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 300, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



/* function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
} */

// APP
function App() {

  // States
  const [notification, setNotification] = useState('');
  return (

    // Parallax Provider -  CONTAINER
    // INSIDE .APP
    <ParallaxProvider>

      <div className="App">

        {/* Header */}
        <Header/>

        {/* Notification */}
        <div className={`notification ${notification} fixed` }>
          <div className="popup">Website maintenance in Progress. Portfolio 2021 RELEASING this FALL !</div> 
        </div>

        {/* Sections */  //REF-01
        }   
         
        <section className="first-impression">
          <div className="first-impression__left">
            <div className="hi">Hi</div>
            <div className="name-title-social">
              <div className="name">I'm Abhay Vincent </div>
              <div className="title">Design Engineer</div>
              <div className="techs"><p>React     Node.js     Firebase    Javascript</p></div>
              <div className="social-links">
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
              </div>
              <div className="cta-wrap">
                <div className="email-cta">
                <div className="icon"></div>
                <div className="email-address" onClick={() => {
                  navigator.clipboard.writeText('abhaykvincent@gmail.com');
                  setNotification('show')
                  setTimeout(() => {
                    setNotification('')
                }, 1000);
                  }}>abhaykvincent@gmail.com</div>
              </div>
                <div className="copy-icon"></div>
              </div>
              </div>
          </div>
          <div className="first-impression__right">
          {/* <iframe src='https://my.spline.design/untitled-ee5cb40f77a7d49646a16952e70808c8/' frameborder='0' width='100%' height='100%'></iframe>
          */}</div>
          </section>
        <section className="first-imagery-impression">
          <div className="image-background-layer"></div>
          <div className="image-strip">
            <div className="image"></div>
            <div className="image"></div>
            <div className="image"></div>
          </div>
          
        </section>
        <section className="the-process">
          {/* Heading */}
          {/* <Parallax y={[-80,20]}> */}<div className="head-text-border">
            Trust The Process</div>
          å

          {/* Processes */}
          
          {/* Strategy */}
          <div className="process strategy" data-aos="flip-up">
            <div className="strategy__left">
              <div className="process-heading">
                <Parallax y={[30,-50]}>
                  Strategy
                  <span className="process-heading__dot">.</span>
                </Parallax>
                <Parallax y={[30,-50]}>
                  <div className="services">
                    <p className="service">Web Design Strategy</p>
                    <p className="service">UI/UX Research</p>
                  </div>
                </Parallax>
                <Parallax y={[30,-30]}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad voluptas aspernatur ullam dolor leniti  maiores tempora sint, at,laboriosam accusantium!</p>
                </Parallax>
                </div>
              </div>
            <div className="strategy__right">
                  <div className="process-image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="841.5" height="749.992" viewBox="0 0 841.5 749.992">
                      <defs>
                        <filter id="Rectangle_34" x="274.5" y="328.992" width="567" height="421" filterUnits="userSpaceOnUse">
                          <feOffset dy="3" input="SourceAlpha"/>
                          <feGaussianBlur stdDeviation="3" result="blur"/>
                          <feFlood flood-opacity="0.161"/>
                          <feComposite operator="in" in2="blur"/>
                          <feComposite in="SourceGraphic"/>
                        </filter>
                        <filter id="Rectangle_35" x="26.5" y="538.992" width="540" height="145" filterUnits="userSpaceOnUse">
                          <feOffset dy="3" input="SourceAlpha"/>
                          <feGaussianBlur stdDeviation="3" result="blur-2"/>
                          <feFlood flood-opacity="0.161"/>
                          <feComposite operator="in" in2="blur-2"/>
                          <feComposite in="SourceGraphic"/>
                        </filter>
                        <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" gradientUnits="objectBoundingBox">
                          <stop offset="0" stop-color="gray" stop-opacity="0.251"/>
                          <stop offset="0.535" stop-color="gray" stop-opacity="0.122"/>
                          <stop offset="1" stop-color="gray" stop-opacity="0.102"/>
                        </linearGradient>
                      </defs>
                      <g id="Group_64" data-name="Group 64" transform="translate(-818.5 -2725.571)">
                        <g class="rectangle_34-2" transform="matrix(1, 0, 0, 1, 818.5, 2725.57)" filter="url(#Rectangle_34)">
                          <rect  id="Rectangle_34-2" data-name="Rectangle 34"rx="4" transform="translate(283.5 334.99)" fill="#ef9e4b" opacity="0.2"/>
                        </g>
                        <g   class="strategy-box"   transform="matrix(1, 0, 0, 1, 818.5, 2725.57)" filter="url(#Rectangle_35)">
                          <rect  id="Rectangle_35-2" data-name="Rectangle 35" width="522" height="127" rx="4" transform="translate(35.5 544.99)" fill="#fff"/>
                        </g>
                        <g   class="strategy-1" id="undraw_in_thought_gjsf" transform="translate(818.5 2725.571)">
                          <path id="Path_225" data-name="Path 225" d="M749.9,256.8q9.268,4.892,18.119,10.012" transform="translate(-400.685 -118.982)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_226" data-name="Path 226" d="M562.441,223.849c26.951,5.828,56.375,15.888,86.016,30.086a411.424,411.424,0,0,1,61.4,36.036" transform="translate(-328.206 -106.244)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <line id="Line_5" data-name="Line 5" x2="276.342" transform="translate(144.528 510.867)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_227" data-name="Path 227" d="M521.327,216.817c8.1,1,16.53,2.434,25.218,4.313" transform="translate(-312.31 -103.525)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_228" data-name="Path 228" d="M382.054,300.288c-14.962-21.9-20.1-42.585-12.415-58.634,8.5-17.751,31.263-26.832,62.115-27.5" transform="translate(-252.293 -102.495)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_229" data-name="Path 229" d="M886.727,434.318c12.471,20.076,16.341,38.9,9.227,53.749-6.26,13.069-20.247,21.438-39.5,25.21" transform="translate(-441.88 -187.618)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_230" data-name="Path 230" d="M802.78,331.65a305.524,305.524,0,0,1,35.341,29.292" transform="translate(-421.128 -147.923)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_231" data-name="Path 231" d="M378.605,170.167c24.836-5.336,56.976-4.387,92.921,2.7" transform="translate(-257.129 -84.17)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_232" data-name="Path 232" d="M967.943,434.314c11.119,16.242,17.957,31.959,19.745,46.273" transform="translate(-484.986 -187.617)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_233" data-name="Path 233" d="M779.444,273.12q16.729,9.673,31.833,20.008" transform="translate(-412.106 -125.293)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_234" data-name="Path 234" d="M796.42,663.141a15.378,15.378,0,0,0-13.255,9.268c-3.314,8.012.953,17.423,7.36,23.265s14.636,9.182,22.113,13.571c10.043,5.9,19.068,14.08,24.093,24.586s5.56,23.519-.347,33.556c-5.482,9.316-15.452,14.891-24.959,20.033" transform="translate(-413.099 -276.089)" fill="none" stroke="#3f3d56" stroke-miterlimit="10" stroke-width="1"/>
                          <ellipse id="Ellipse_158" data-name="Ellipse 158" cx="11.709" cy="5.687" rx="11.709" ry="5.687" transform="translate(380.055 382.063)" fill="#6ad08a"/>
                          <ellipse id="Ellipse_159" data-name="Ellipse 159" cx="11.709" cy="5.687" rx="11.709" ry="5.687" transform="translate(389.422 419.533)" fill="#57b894"/>
                          <ellipse id="Ellipse_160" data-name="Ellipse 160" cx="11.709" cy="5.687" rx="11.709" ry="5.687" transform="translate(368.011 425.555)" fill="#57b894"/>
                          <ellipse id="Ellipse_161" data-name="Ellipse 161" cx="11.709" cy="5.687" rx="11.709" ry="5.687" transform="translate(401.466 457.003)" fill="#57b894"/>
                          <ellipse id="Ellipse_162" data-name="Ellipse 162" cx="11.709" cy="5.687" rx="11.709" ry="5.687" transform="translate(424.885 457.003)" fill="#57b894"/>
                          <path id="Path_235" data-name="Path 235" d="M696.5,303.075h6.6s6.047,46.725,1.649,51.123-16.491,7.146-18.14,0,0-33.532,0-33.532Z" transform="translate(-375.928 -136.875)" fill="#8a8a8a"/>
                          <ellipse id="Ellipse_163" data-name="Ellipse 163" cx="40.129" cy="47" rx="40.129" ry="47" transform="translate(237.291 78.521)" fill="#2f2e41"/>
                          <path id="Path_236" data-name="Path 236" d="M614.19,247.629s2.2,18.14-4.4,21.988,7.7,25.836,7.7,25.836l17.041,4.4,11.544-15.941-2.2-16.491s-13.193-13.193-7.146-25.287Z" transform="translate(-345.841 -113.313)" fill="#ffc1c7"/>
                          <path id="Path_237" data-name="Path 237" d="M614.19,247.629s2.2,18.14-4.4,21.988,7.7,25.836,7.7,25.836l17.041,4.4,11.544-15.941-2.2-16.491s-13.193-13.193-7.146-25.287Z" transform="translate(-345.841 -113.313)" opacity="0.1"/>
                          <path id="Path_238" data-name="Path 238" d="M575.88,568.324s-6.6,59.918,0,74.211,24.187,54.421,24.187,54.421l-5.5,11.544,14.842-3.3,6.047-11.544s-7.146-28.035-8.246-37.93-9.345-28.035-9.345-28.035l15.392-65.415Z" transform="translate(-332.268 -237.091)" fill="#ffc1c7"/>
                          <path id="Path_239" data-name="Path 239" d="M662.869,550.956s.55,60.468,4.4,69.847l-2.2,81.906,12.094,1.615s17.591-68.714,14.842-85.2.55-75.86.55-75.86Z" transform="translate(-367.034 -229.738)" fill="#ffc1c7"/>
                          <circle id="Ellipse_164" data-name="Ellipse 164" cx="20.889" cy="20.889" r="20.889" transform="translate(256.53 99.96)" fill="#ffc1c7"/>
                          <path id="Path_240" data-name="Path 240" d="M677.259,457.319s-14.842,9.895-20.889,2.749-80.257,4.4-89.6,2.2,4.947-37.38,4.947-55.521c0-13.572,4.925-34.219,7.4-43.762.836-3.21,1.391-5.162,1.391-5.162s5.64-16.046,4.585-22.714a5.734,5.734,0,0,0-.412-1.468,3.01,3.01,0,0,0-.324-.555c-2.633-3.513-10.181-29.129-13.11-40.129a49.666,49.666,0,0,1-1.182-4.947c0-1.649,20.339-6.6,25.424-6.833s6.459,6.833,6.459,6.833c1.649,1.1,9.345,20.339,9.345,20.339l7.146-18.14s-.55-3.848-1.1-3.848,8.13-5.189,8.13-5.189,8.911,6.289,13.858,5.189,16.491,8.8,16.491,8.8-20.339,51.123-12.094,62.117S677.259,457.319,677.259,457.319Z" transform="translate(-328.653 -128.406)" fill="#2e3346"/>
                          <path id="Path_241" data-name="Path 241" d="M611.815,772.867s-9.345,9.345-9.345,10.444l-7.7-3.3s-3.3,12.094-3.848,13.743-9.895,16.491-19.24,23.088,0,14.842,8.246,13.193S609.066,809.7,609.066,809.7s14.292,0,19.24-10.994C628.306,798.7,615.113,771.767,611.815,772.867Z" transform="translate(-330.273 -318.499)" fill="#2f2e41"/>
                          <path id="Path_242" data-name="Path 242" d="M673.907,795.72s-14.122-10.261-15.032-.733-.91,30.417-.91,30.417-4.4,13.743,9.345,12.094,14.842-5.5,14.842-5.5l-6.6-26.386V794.071Z" transform="translate(-364.88 -325.498)" fill="#2f2e41"/>
                          <path id="Path_243" data-name="Path 243" d="M589.181,340.515C586.548,337,579,311.386,576.071,300.386h2.666s6.7,26.2,10.769,40.684A3.015,3.015,0,0,0,589.181,340.515Z" transform="translate(-333.475 -135.836)" opacity="0.1"/>
                          <path id="Path_244" data-name="Path 244" d="M630.424,403.365s-7.7.55-35.731-4.947a56.054,56.054,0,0,1-5.788-1.435c.836-3.21,1.391-5.162,1.391-5.162s5.64-16.046,4.585-22.714c1.314,4.618,2.292,7.734,2.562,7.872,1.1.55,36.281,6.6,41.228,8.8S630.424,403.365,630.424,403.365Z" transform="translate(-338.437 -162.406)" opacity="0.1"/>
                          <path id="Path_245" data-name="Path 245" d="M672.727,307.235s15.162-1.871,16.1.588,4.787,26.217,6.436,29.263,2.2,21.931-4.4,22.541-15.392-6.092-13.743-11.575S672.727,307.235,672.727,307.235Z" transform="translate(-370.846 -138.22)" opacity="0.1"/>
                          <path id="Path_246" data-name="Path 246" d="M657.062,388.954s23.088,2.749,26.936,0,19.789-2.749,16.491,4.947-31.883,8.246-31.883,8.246H652.114Z" transform="translate(-362.876 -169.432)" fill="#ffc1c7"/>
                          <path id="Path_247" data-name="Path 247" d="M573.715,294.113h-3.848s-7.7,1.649-6.6,25.836-6.6,40.129,21.439,45.626,35.731,4.947,35.731,4.947,13.193-15.392,8.246-17.591-40.129-8.246-41.228-8.8S573.715,294.113,573.715,294.113Z" transform="translate(-328.454 -133.41)" fill="#8a8a8a"/>
                          <path id="Path_248" data-name="Path 248" d="M679.668,289.023s-9.632-36.137-17.328-36.137-16.491,1.649-9.895,8.8,14.842,14.842,15.392,18.69a51.8,51.8,0,0,0,2.749,9.345Z" transform="translate(-362.107 -117.471)" fill="#ffc1c7"/>
                          <path id="Path_249" data-name="Path 249" d="M676.312,307.235s15.162-1.871,16.1.588,4.787,26.217,6.437,29.263,2.2,21.931-4.4,22.541-15.392-6.092-13.743-11.575S676.312,307.235,676.312,307.235Z" transform="translate(-372.232 -138.22)" fill="#8a8a8a"/>
                          <circle id="Ellipse_165" data-name="Ellipse 165" cx="19.789" cy="19.789" r="19.789" transform="translate(252.133 81.27)" fill="#2f2e41"/>
                          <path id="Path_250" data-name="Path 250" d="M628.891,499.047c-30.71-5.061-65.452-16.064-100.5-32.851-39.9-19.114-73.717-42.62-97.811-66.376" transform="translate(-277.225 -174.28)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <path id="Path_251" data-name="Path 251" d="M504.377,495.56a496.9,496.9,0,0,1-73.8-46.534" transform="translate(-277.224 -193.305)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <circle id="Ellipse_166" data-name="Ellipse 166" cx="32.938" cy="32.938" r="32.938" transform="translate(0 13.919)" fill="#2e3346"/>
                          <circle id="Ellipse_167" data-name="Ellipse 167" cx="32.938" cy="32.938" r="32.938" transform="translate(7.726 0.5)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <circle id="Ellipse_168" data-name="Ellipse 168" cx="19.164" cy="19.164" r="19.164" transform="translate(471.723 146.665)" fill="#ffa64b"/>
                          <circle id="Ellipse_169" data-name="Ellipse 169" cx="19.164" cy="19.164" r="19.164" transform="translate(476.218 138.858)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                          <circle id="Ellipse_170" data-name="Ellipse 170" cx="27.548" cy="27.548" r="27.548" transform="translate(113.749 338.046)" fill="#ffa64b"/>
                          <circle id="Ellipse_171" data-name="Ellipse 171" cx="27.548" cy="27.548" r="27.548" transform="translate(120.211 326.822)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="1"/>
                        </g>
                        <g   class="strategy-1"  id="Group_28" data-name="Group 28" transform="translate(-1730.884 -2909.437)">
                          <rect id="Rectangle_218" data-name="Rectangle 218" width="337.753" height="231.402" rx="4" transform="translate(3019.368 5819)" fill="#f2f2f2" stroke="#b2b2b2" stroke-width="1"/>
                          <g id="Group_28-2" data-name="Group 28" transform="translate(3050.164 5841.79)" opacity="0.5">
                            <rect id="Rectangle_219" data-name="Rectangle 219" width="79.507" height="73.355" rx="4.5" transform="translate(0 0)" fill="url(#linear-gradient)"/>
                          </g>
                          <rect id="Rectangle_219-2" data-name="Rectangle 219" width="77.673" height="71.576" rx="4.5" transform="translate(3051.135 5842.358)" fill="#f5f5f5"/>
                          <rect id="Rectangle_220" data-name="Rectangle 220" width="13.099" height="11.789" rx="4.5" transform="translate(3057.121 5854.147)" fill="#ffa64b"/>
                          <rect id="Rectangle_221" data-name="Rectangle 221" width="52.073" height="1.31" rx="0.655" transform="translate(3074.15 5854.147)" fill="#e0e0e0"/>
                          <rect id="Rectangle_222" data-name="Rectangle 222" width="52.073" height="1.31" rx="0.655" transform="translate(3074.15 5858.078)" fill="#e0e0e0"/>
                          <rect id="Rectangle_223" data-name="Rectangle 223" width="70.412" height="1.31" rx="0.655" transform="translate(3055.811 5872.341)" fill="#e0e0e0"/>
                          <rect id="Rectangle_224" data-name="Rectangle 224" width="70.412" height="1.31" rx="0.655" transform="translate(3055.811 5876.271)" fill="#e0e0e0"/>
                          <rect id="Rectangle_225" data-name="Rectangle 225" width="70.412" height="1.31" rx="0.655" transform="translate(3055.811 5881.51)" fill="#e0e0e0"/>
                          <rect id="Rectangle_226" data-name="Rectangle 226" width="40.607" height="1.31" rx="0.655" transform="translate(3055.811 5885.44)" fill="#e0e0e0"/>
                          <rect id="Rectangle_227" data-name="Rectangle 227" width="70.412" height="1.31" rx="0.655" transform="translate(3055.811 5890.667)" fill="#e0e0e0"/>
                          <rect id="Rectangle_228" data-name="Rectangle 228" width="70.412" height="1.31" rx="0.655" transform="translate(3055.811 5894.597)" fill="#e0e0e0"/>
                          <rect id="Rectangle_229" data-name="Rectangle 229" width="70.412" height="1.31" rx="0.655" transform="translate(3055.811 5899.836)" fill="#e0e0e0"/>
                          <rect id="Rectangle_230" data-name="Rectangle 230" width="40.607" height="1.31" rx="0.655" transform="translate(3055.811 5903.766)" fill="#e0e0e0"/>
                          <g id="Group_29" data-name="Group 29" transform="translate(3062.164 5858.741)" opacity="0.5">
                            <rect id="Rectangle_232" data-name="Rectangle 232" width="79.507" height="73.355" rx="4.5" transform="translate(0 0)" fill="url(#linear-gradient)"/>
                          </g>
                          <rect id="Rectangle_231" data-name="Rectangle 231" width="77.673" height="71.576" rx="4.5" transform="translate(3063.134 5859.31)" fill="#fff"/>
                          <rect id="Rectangle_232-2" data-name="Rectangle 232" width="13.099" height="11.789" rx="4.5" transform="translate(3069.12 5871.099)" fill="#ffa64b"/>
                          <rect id="Rectangle_233" data-name="Rectangle 233" width="52.073" height="1.31" rx="0.655" transform="translate(3086.149 5871.099)" fill="#e0e0e0"/>
                          <rect id="Rectangle_234" data-name="Rectangle 234" width="52.073" height="1.31" rx="0.655" transform="translate(3086.149 5875.028)" fill="#e0e0e0"/>
                          <rect id="Rectangle_235" data-name="Rectangle 235" width="70.412" height="1.31" rx="0.655" transform="translate(3067.81 5889.292)" fill="#e0e0e0"/>
                          <rect id="Rectangle_236" data-name="Rectangle 236" width="70.412" height="1.31" rx="0.655" transform="translate(3067.81 5893.222)" fill="#e0e0e0"/>
                          <rect id="Rectangle_237" data-name="Rectangle 237" width="70.412" height="1.31" rx="0.655" transform="translate(3067.81 5898.461)" fill="#e0e0e0"/>
                          <rect id="Rectangle_238" data-name="Rectangle 238" width="40.607" height="1.31" rx="0.655" transform="translate(3067.81 5902.391)" fill="#e0e0e0"/>
                          <rect id="Rectangle_239" data-name="Rectangle 239" width="70.412" height="1.31" rx="0.655" transform="translate(3067.81 5907.618)" fill="#e0e0e0"/>
                          <rect id="Rectangle_240" data-name="Rectangle 240" width="70.412" height="1.31" rx="0.655" transform="translate(3067.81 5911.548)" fill="#e0e0e0"/>
                          <rect id="Rectangle_241" data-name="Rectangle 241" width="70.412" height="1.31" rx="0.655" transform="translate(3067.81 5916.788)" fill="#e0e0e0"/>
                          <rect id="Rectangle_242" data-name="Rectangle 242" width="40.607" height="1.31" rx="0.655" transform="translate(3067.81 5920.717)" fill="#e0e0e0"/>
                          <rect id="Rectangle_243" data-name="Rectangle 243" width="43.79" height="42.073" transform="translate(3174.531 5869.838)" fill="url(#linear-gradient)"/>
                          <rect id="Rectangle_244" data-name="Rectangle 244" width="42.416" height="40.184" transform="translate(3175.218 5870.869)" fill="#f5f5f5"/>
                          <g id="Group_30" data-name="Group 30" transform="translate(3189.127 5894.739)" opacity="0.6">
                            <rect id="Rectangle_247" data-name="Rectangle 247" width="15.284" height="2.061" transform="translate(0 0)" fill="#8a8a8a"/>
                          </g>
                          <rect id="Rectangle_245" data-name="Rectangle 245" width="26.102" height="2.061" transform="translate(3183.375 5898.517)" fill="#bdbdbd"/>
                          <g id="Group_31" data-name="Group 31" transform="translate(3238.378 5833.024)" opacity="0.5">
                            <rect id="Rectangle_249" data-name="Rectangle 249" width="95.49" height="112.195" transform="translate(0 0)" fill="url(#linear-gradient)"/>
                          </g>
                          <rect id="Rectangle_246" data-name="Rectangle 246" width="90.523" height="107.906" transform="translate(3241.313 5834.831)" fill="#fff"/>
                          <rect id="Rectangle_247-2" data-name="Rectangle 247" width="63.66" height="2.709" transform="translate(3254.858 5882.173)" fill="#e0e0e0"/>
                          <rect id="Rectangle_248" data-name="Rectangle 248" width="63.66" height="2.709" transform="translate(3254.858 5900.007)" fill="#e0e0e0"/>
                          <rect id="Rectangle_249-2" data-name="Rectangle 249" width="63.66" height="2.709" transform="translate(3254.858 5904.747)" fill="#e0e0e0"/>
                          <rect id="Rectangle_250" data-name="Rectangle 250" width="26.864" height="2.709" transform="translate(3254.858 5895.266)" fill="#e0e0e0"/>
                          <rect id="Rectangle_251" data-name="Rectangle 251" width="20.091" height="2.709" transform="translate(3298.426 5895.266)" fill="#ffa64b" opacity="0.6"/>
                          <rect id="Rectangle_252" data-name="Rectangle 252" width="20.091" height="2.709" transform="translate(3277.206 5915.809)" fill="#2e3346"/>
                          <g id="Group_32" data-name="Group 32" transform="translate(3182.663 5976.774)" opacity="0.5">
                            <rect id="Rectangle_257" data-name="Rectangle 257" width="56.738" height="46.602" transform="translate(0 0)" fill="url(#linear-gradient)"/>
                          </g>
                          <rect id="Rectangle_253" data-name="Rectangle 253" width="55.306" height="44.95" transform="translate(3183.324 5977.655)" fill="#f2f2f2"/>
                          <rect id="Rectangle_254" data-name="Rectangle 254" width="55.306" height="10.026" transform="translate(3183.324 5977.655)" fill="#ffa64b"/>
                          <path id="Path_302" data-name="Path 302" d="M0,0H55.306V10.026H0Z" transform="translate(3183.324 5977.655)" fill="#ffa64b" opacity="0.1"/>
                          <rect id="Rectangle_256" data-name="Rectangle 256" width="46.492" height="5.839" transform="translate(3187.731 5991.316)" fill="#e0e0e0"/>
                          <rect id="Rectangle_257-2" data-name="Rectangle 257" width="33.933" height="1.983" transform="translate(3187.731 6001.563)" fill="#e0e0e0"/>
                          <rect id="Rectangle_258" data-name="Rectangle 258" width="22.034" height="1.983" transform="translate(3187.731 6004.978)" fill="#e0e0e0"/>
                          <rect id="Rectangle_259" data-name="Rectangle 259" width="29.085" height="1.983" transform="translate(3187.731 6008.393)" fill="#e0e0e0"/>
                          <rect id="Rectangle_260" data-name="Rectangle 260" width="33.933" height="1.983" transform="translate(3187.731 6011.808)" fill="#e0e0e0"/>
                          <rect id="Rectangle_261" data-name="Rectangle 261" width="11.348" height="1.983" transform="translate(3187.731 6015.224)" fill="#e0e0e0"/>
                          <g id="Group_33" data-name="Group 33" transform="translate(3147.137 5959.681)" opacity="0.5">
                            <rect id="Rectangle_267" data-name="Rectangle 267" width="70.325" height="57.762" transform="translate(0 0)" fill="url(#linear-gradient)"/>
                          </g>
                          <rect id="Rectangle_262" data-name="Rectangle 262" width="68.55" height="55.714" transform="translate(3147.957 5960.774)" fill="#fff"/>
                          <rect id="Rectangle_263" data-name="Rectangle 263" width="68.55" height="12.426" transform="translate(3147.957 5960.774)" fill="#ffa64b"/>
                          <rect id="Rectangle_264" data-name="Rectangle 264" width="57.626" height="7.237" transform="translate(3153.419 5977.707)" fill="#f5f5f5"/>
                          <rect id="Rectangle_265" data-name="Rectangle 265" width="42.059" height="2.458" transform="translate(3153.419 5990.406)" fill="#e0e0e0"/>
                          <rect id="Rectangle_266" data-name="Rectangle 266" width="27.311" height="2.458" transform="translate(3153.419 5994.639)" fill="#e0e0e0"/>
                          <rect id="Rectangle_267-2" data-name="Rectangle 267" width="36.05" height="2.458" transform="translate(3153.419 5998.872)" fill="#e0e0e0"/>
                          <rect id="Rectangle_268" data-name="Rectangle 268" width="42.059" height="2.458" transform="translate(3153.419 6003.105)" fill="#e0e0e0"/>
                          <rect id="Rectangle_269" data-name="Rectangle 269" width="14.065" height="2.458" transform="translate(3153.419 6007.339)" fill="#e0e0e0"/>
                          <rect id="Rectangle_270" data-name="Rectangle 270" width="16.386" height="2.185" transform="translate(3156.423 5980.164)" fill="#ffa64b"/>
                          <circle id="Ellipse_172" data-name="Ellipse 172" cx="9.495" cy="9.495" r="9.495" transform="translate(3059.383 6063.563)" fill="#535461" opacity="0.1"/>
                        </g>
                      </g>
                    </svg>

                  </div>
               </div>
          </div>
          {/* Design */}
          <div className="process design"  data-aos="flip-up" data-aos-delay="0.8s">
            <div className="design__left">
                  <div className="process-image">
                  <svg xmlns="http://www.w3.org/2000/svg"  width="815" height="629.924" viewBox="0 0 815 629.924">
                    <defs>
                      <filter id="Rectangle_19" x="275" y="418.924" width="540" height="145" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur"/>
                        <feFlood flood-opacity="0.161"/>
                        <feComposite operator="in" in2="blur"/>
                        <feComposite in="SourceGraphic"/>
                      </filter>
                      <filter id="Rectangle_18" x="0" y="118.924" width="567" height="511" filterUnits="userSpaceOnUse">
                        <feOffset dy="3" input="SourceAlpha"/>
                        <feGaussianBlur stdDeviation="3" result="blur-2"/>
                        <feFlood flood-opacity="0.161"/>
                        <feComposite operator="in" in2="blur-2"/>
                        <feComposite in="SourceGraphic"/>
                      </filter>
                    </defs>
                    <g  class="design_svg" id="Group_63" data-name="Group 63" transform="translate(-140 -1933.639)">
                      
                      <g class="rectangle_18-2" transform="matrix(1, 0, 0, 1, 140, 1933.64)" filter="url(#Rectangle_18)">
                        <rect id="Rectangle_18-2" data-name="Rectangle 18" width="549" height="493" rx="4" transform="translate(9 124.92)" fill="#ef9e4b" opacity="0.2"/>
                      </g>
                      <g class="design-1" id="undraw_design_components_9vy6" transform="translate(196.678 1933.64)">
                        <path id="Path_128" data-name="Path 128" d="M269.838,205.26A159,159,0,0,0,209.87,216.89c-.767.314-1.537.63-2.307.953A159.622,159.622,0,0,0,110,365.1V539.509a6.955,6.955,0,0,0,6.947,6.947l.138.012c133.906,24.318,264.085,36.64,387.028,36.64q2.765,0,5.524-.008c120.851-.368,238.524-12.69,349.752-36.626l.162-.017a6.955,6.955,0,0,0,6.948-6.947v-327.3a6.955,6.955,0,0,0-6.947-6.947Z" transform="translate(-110 -205.26)" fill="#2e3346"/>
                        <path id="Path_40" data-name="Path 40" d="M854.443,385.452a4.59,4.59,0,1,0,0,9.181H969.528a4.591,4.591,0,1,0,.151-9.18H854.443Z" transform="translate(-278.732 -246.355)" fill="#ffa64b"/>
                        <path id="Path_129" data-name="Path 129" d="M1036.748,383.719a.9.9,0,0,0,0,1.277l3.877,3.877h-9.561a.9.9,0,0,0,0,1.806h9.561l-3.877,3.877a.9.9,0,1,0,1.277,1.277l5.419-5.419a.9.9,0,0,0,0-1.277l-5.419-5.419a.9.9,0,0,0-1.277,0Z" transform="translate(-319.853 -245.899)" fill="#fff"/>
                        <path id="Path_130" data-name="Path 130" d="M819.871,383.719a.9.9,0,0,1,0,1.277l-3.877,3.877h9.561a.9.9,0,0,1,0,1.806h-9.561l3.877,3.877a.9.9,0,1,1-1.277,1.277l-5.419-5.419a.9.9,0,0,1,0-1.277l5.419-5.419a.9.9,0,0,1,1.277,0Z" transform="translate(-270.307 -245.899)" fill="#fff"/>
                        <g id="Group_22" data-name="Group 22" transform="translate(575.426 33.965)" opacity="0.4">
                          <circle id="Ellipse_86" data-name="Ellipse 86" cx="4.933" cy="4.933" r="4.933" fill="#fff"/>
                          <circle id="Ellipse_87" data-name="Ellipse 87" cx="4.933" cy="4.933" r="4.933" transform="translate(20.553)" fill="#fff"/>
                          <circle id="Ellipse_88" data-name="Ellipse 88" cx="4.933" cy="4.933" r="4.933" transform="translate(41.105)" fill="#fff"/>
                          <circle id="Ellipse_89" data-name="Ellipse 89" cx="4.933" cy="4.933" r="4.933" transform="translate(61.658)" fill="#fff"/>
                          <circle id="Ellipse_90" data-name="Ellipse 90" cx="4.933" cy="4.933" r="4.933" transform="translate(82.21)" fill="#fff"/>
                          <circle id="Ellipse_91" data-name="Ellipse 91" cx="4.933" cy="4.933" r="4.933" transform="translate(102.763)" fill="#fff"/>
                          <circle id="Ellipse_92" data-name="Ellipse 92" cx="4.933" cy="4.933" r="4.933" transform="translate(123.315)" fill="#fff"/>
                          <circle id="Ellipse_93" data-name="Ellipse 93" cx="4.933" cy="4.933" r="4.933" transform="translate(0 15.62)" fill="#fff"/>
                          <circle id="Ellipse_94" data-name="Ellipse 94" cx="4.933" cy="4.933" r="4.933" transform="translate(20.553 15.62)" fill="#fff"/>
                          <circle id="Ellipse_95" data-name="Ellipse 95" cx="4.933" cy="4.933" r="4.933" transform="translate(41.105 15.62)" fill="#fff"/>
                          <circle id="Ellipse_96" data-name="Ellipse 96" cx="4.933" cy="4.933" r="4.933" transform="translate(61.658 15.62)" fill="#fff"/>
                          <circle id="Ellipse_97" data-name="Ellipse 97" cx="4.933" cy="4.933" r="4.933" transform="translate(82.21 15.62)" fill="#fff"/>
                          <circle id="Ellipse_98" data-name="Ellipse 98" cx="4.933" cy="4.933" r="4.933" transform="translate(102.763 15.62)" fill="#fff"/>
                          <circle id="Ellipse_99" data-name="Ellipse 99" cx="4.933" cy="4.933" r="4.933" transform="translate(123.315 15.62)" fill="#fff"/>
                          <circle id="Ellipse_100" data-name="Ellipse 100" cx="4.933" cy="4.933" r="4.933" transform="translate(0 31.24)" fill="#fff"/>
                          <circle id="Ellipse_101" data-name="Ellipse 101" cx="4.933" cy="4.933" r="4.933" transform="translate(20.553 31.24)" fill="#fff"/>
                          <circle id="Ellipse_102" data-name="Ellipse 102" cx="4.933" cy="4.933" r="4.933" transform="translate(41.105 31.24)" fill="#fff"/>
                          <circle id="Ellipse_103" data-name="Ellipse 103" cx="4.933" cy="4.933" r="4.933" transform="translate(61.658 31.24)" fill="#fff"/>
                          <circle id="Ellipse_104" data-name="Ellipse 104" cx="4.933" cy="4.933" r="4.933" transform="translate(82.21 31.24)" fill="#fff"/>
                          <circle id="Ellipse_105" data-name="Ellipse 105" cx="4.933" cy="4.933" r="4.933" transform="translate(102.763 31.24)" fill="#fff"/>
                          <circle id="Ellipse_106" data-name="Ellipse 106" cx="4.933" cy="4.933" r="4.933" transform="translate(123.315 31.24)" fill="#fff"/>
                          <circle id="Ellipse_107" data-name="Ellipse 107" cx="4.933" cy="4.933" r="4.933" transform="translate(0 46.86)" fill="#fff"/>
                          <circle id="Ellipse_108" data-name="Ellipse 108" cx="4.933" cy="4.933" r="4.933" transform="translate(20.553 46.86)" fill="#fff"/>
                          <circle id="Ellipse_109" data-name="Ellipse 109" cx="4.933" cy="4.933" r="4.933" transform="translate(0 62.48)" fill="#fff"/>
                          <circle id="Ellipse_110" data-name="Ellipse 110" cx="4.933" cy="4.933" r="4.933" transform="translate(20.553 62.48)" fill="#fff"/>
                          <circle id="Ellipse_111" data-name="Ellipse 111" cx="4.933" cy="4.933" r="4.933" transform="translate(41.105 62.48)" fill="#fff"/>
                          <circle id="Ellipse_112" data-name="Ellipse 112" cx="4.933" cy="4.933" r="4.933" transform="translate(41.105 46.86)" fill="#fff"/>
                          <circle id="Ellipse_113" data-name="Ellipse 113" cx="4.933" cy="4.933" r="4.933" transform="translate(61.658 46.86)" fill="#fff"/>
                          <circle id="Ellipse_114" data-name="Ellipse 114" cx="4.933" cy="4.933" r="4.933" transform="translate(82.21 46.86)" fill="#fff"/>
                          <circle id="Ellipse_115" data-name="Ellipse 115" cx="4.933" cy="4.933" r="4.933" transform="translate(102.763 46.86)" fill="#fff"/>
                          <circle id="Ellipse_116" data-name="Ellipse 116" cx="4.933" cy="4.933" r="4.933" transform="translate(123.315 46.86)" fill="#fff"/>
                        </g>
                        <path id="Path_131" data-name="Path 131" d="M762.113,564.63A27.228,27.228,0,1,1,789.341,537.4,27.228,27.228,0,0,1,762.113,564.63Zm0-52.912A25.684,25.684,0,1,0,787.8,537.4,25.684,25.684,0,0,0,762.113,511.718Z" transform="translate(-252.512 -274.799)" fill="#ffa64b"/>
                        <path id="Path_132" data-name="Path 132" d="M776.741,538.981h-7.829v-7.829a2.61,2.61,0,1,0-5.22,0v7.829h-7.829a2.61,2.61,0,1,0,0,5.219h7.829v7.829a2.61,2.61,0,0,0,5.22,0V544.2h7.829a2.61,2.61,0,1,0,0-5.219Z" transform="translate(-256.701 -278.988)" fill="#fff"/>
                        <g id="Group_23" data-name="Group 23" transform="translate(37.825 188.464)" opacity="0.4">
                          <circle id="Ellipse_117" data-name="Ellipse 117" cx="3.878" cy="3.878" r="3.878" transform="translate(0 96.954)" fill="#fff"/>
                          <circle id="Ellipse_118" data-name="Ellipse 118" cx="3.878" cy="3.878" r="3.878" transform="translate(0 80.795)" fill="#fff"/>
                          <circle id="Ellipse_119" data-name="Ellipse 119" cx="3.878" cy="3.878" r="3.878" transform="translate(0 64.636)" fill="#fff"/>
                          <circle id="Ellipse_120" data-name="Ellipse 120" cx="3.878" cy="3.878" r="3.878" transform="translate(0 48.477)" fill="#fff"/>
                          <circle id="Ellipse_121" data-name="Ellipse 121" cx="3.878" cy="3.878" r="3.878" transform="translate(0 32.318)" fill="#fff"/>
                          <circle id="Ellipse_122" data-name="Ellipse 122" cx="3.878" cy="3.878" r="3.878" transform="translate(0 16.159)" fill="#fff"/>
                          <circle id="Ellipse_123" data-name="Ellipse 123" cx="3.878" cy="3.878" r="3.878" fill="#fff"/>
                          <circle id="Ellipse_124" data-name="Ellipse 124" cx="3.878" cy="3.878" r="3.878" transform="translate(12.281 96.954)" fill="#fff"/>
                          <circle id="Ellipse_125" data-name="Ellipse 125" cx="3.878" cy="3.878" r="3.878" transform="translate(12.281 80.795)" fill="#fff"/>
                          <circle id="Ellipse_126" data-name="Ellipse 126" cx="3.878" cy="3.878" r="3.878" transform="translate(12.281 64.636)" fill="#fff"/>
                          <circle id="Ellipse_127" data-name="Ellipse 127" cx="3.878" cy="3.878" r="3.878" transform="translate(12.281 48.477)" fill="#fff"/>
                          <circle id="Ellipse_128" data-name="Ellipse 128" cx="3.878" cy="3.878" r="3.878" transform="translate(12.281 32.318)" fill="#fff"/>
                          <circle id="Ellipse_129" data-name="Ellipse 129" cx="3.878" cy="3.878" r="3.878" transform="translate(12.281 16.159)" fill="#fff"/>
                          <circle id="Ellipse_130" data-name="Ellipse 130" cx="3.878" cy="3.878" r="3.878" transform="translate(12.281)" fill="#fff"/>
                          <circle id="Ellipse_131" data-name="Ellipse 131" cx="3.878" cy="3.878" r="3.878" transform="translate(24.562 96.954)" fill="#fff"/>
                          <circle id="Ellipse_132" data-name="Ellipse 132" cx="3.878" cy="3.878" r="3.878" transform="translate(24.562 80.795)" fill="#fff"/>
                          <circle id="Ellipse_133" data-name="Ellipse 133" cx="3.878" cy="3.878" r="3.878" transform="translate(24.562 64.636)" fill="#fff"/>
                          <circle id="Ellipse_134" data-name="Ellipse 134" cx="3.878" cy="3.878" r="3.878" transform="translate(24.562 48.477)" fill="#fff"/>
                          <circle id="Ellipse_135" data-name="Ellipse 135" cx="3.878" cy="3.878" r="3.878" transform="translate(24.562 32.318)" fill="#fff"/>
                          <circle id="Ellipse_136" data-name="Ellipse 136" cx="3.878" cy="3.878" r="3.878" transform="translate(24.562 16.159)" fill="#fff"/>
                          <circle id="Ellipse_137" data-name="Ellipse 137" cx="3.878" cy="3.878" r="3.878" transform="translate(24.562)" fill="#fff"/>
                          <circle id="Ellipse_138" data-name="Ellipse 138" cx="3.878" cy="3.878" r="3.878" transform="translate(36.842 96.954)" fill="#fff"/>
                          <circle id="Ellipse_139" data-name="Ellipse 139" cx="3.878" cy="3.878" r="3.878" transform="translate(36.842 80.795)" fill="#fff"/>
                          <circle id="Ellipse_140" data-name="Ellipse 140" cx="3.878" cy="3.878" r="3.878" transform="translate(49.123 96.954)" fill="#fff"/>
                          <circle id="Ellipse_141" data-name="Ellipse 141" cx="3.878" cy="3.878" r="3.878" transform="translate(49.123 80.795)" fill="#fff"/>
                          <circle id="Ellipse_142" data-name="Ellipse 142" cx="3.878" cy="3.878" r="3.878" transform="translate(49.123 64.636)" fill="#fff"/>
                          <circle id="Ellipse_143" data-name="Ellipse 143" cx="3.878" cy="3.878" r="3.878" transform="translate(36.842 64.636)" fill="#fff"/>
                          <circle id="Ellipse_144" data-name="Ellipse 144" cx="3.878" cy="3.878" r="3.878" transform="translate(36.842 48.477)" fill="#fff"/>
                          <circle id="Ellipse_145" data-name="Ellipse 145" cx="3.878" cy="3.878" r="3.878" transform="translate(36.842 32.318)" fill="#fff"/>
                          <circle id="Ellipse_146" data-name="Ellipse 146" cx="3.878" cy="3.878" r="3.878" transform="translate(36.842 16.159)" fill="#fff"/>
                          <circle id="Ellipse_147" data-name="Ellipse 147" cx="3.878" cy="3.878" r="3.878" transform="translate(36.842)" fill="#fff"/>
                        </g>
                        <path id="Path_133" data-name="Path 133" d="M529.885,238.262H272.256a4.777,4.777,0,0,0-4.772,4.772v220.3a4.777,4.777,0,0,0,4.772,4.772H529.885a4.777,4.777,0,0,0,4.772-4.772v-220.3a4.777,4.777,0,0,0-4.772-4.772Zm2.86,225.071a2.87,2.87,0,0,1-2.86,2.869H272.256a2.864,2.864,0,0,1-2.86-2.869v-220.3a2.864,2.864,0,0,1,2.86-2.869H529.885a2.87,2.87,0,0,1,2.86,2.869Z" transform="translate(-145.916 -212.786)" fill="#ffa64b"/>
                        <path id="Path_134" data-name="Path 134" d="M339.22,479.525c0,.34-.009.679-.027,1.01a19.433,19.433,0,0,1-38.814,0c-.018-.331-.027-.67-.027-1.01a19.434,19.434,0,1,1,38.867,0Z" transform="translate(-153.412 -263.377)" fill="#fff"/>
                        <path id="Path_135" data-name="Path 135" d="M535.4,468.479h-152.7a3.24,3.24,0,1,0,0,6.479H535.4a3.24,3.24,0,1,0,0-6.479Z" transform="translate(-171.455 -265.29)" fill="#ffa64b"/>
                        <path id="Path_136" data-name="Path 136" d="M448.413,493.66H382.707a3.235,3.235,0,0,0,0,6.47h65.705a3.235,3.235,0,0,0,0-6.47Z" transform="translate(-171.456 -271.033)" fill="#fff"/>
                        <path id="Path_137" data-name="Path 137" d="M608.635,401.539H351.008a6.607,6.607,0,0,1-6.6-6.6V281.879a6.607,6.607,0,0,1,6.6-6.6H608.635a6.607,6.607,0,0,1,6.6,6.6v113.06A6.607,6.607,0,0,1,608.635,401.539ZM351.008,277.6a4.288,4.288,0,0,0-4.283,4.284v113.06a4.289,4.289,0,0,0,4.283,4.284H608.635a4.289,4.289,0,0,0,4.283-4.284V281.879a4.288,4.288,0,0,0-4.283-4.284Z" transform="translate(-163.46 -221.229)" fill="#fff"/>
                        <path id="Path_138" data-name="Path 138" d="M419.967,328.7a3.239,3.239,0,0,0,0,6.478h152.7a3.239,3.239,0,1,0,0-6.478Z" transform="translate(-179.953 -233.412)" fill="#fff"/>
                        <path id="Path_139" data-name="Path 139" d="M419.967,353.012a3.239,3.239,0,0,0,0,6.478h152.7a3.239,3.239,0,1,0,0-6.478Z" transform="translate(-179.953 -238.956)" fill="#fff"/>
                        <path id="Path_140" data-name="Path 140" d="M419.967,377.03a3.239,3.239,0,1,0,0,6.478h65.705a3.239,3.239,0,0,0,0-6.478Z" transform="translate(-179.953 -244.434)" fill="#fff"/>
                        <path id="Path_141" data-name="Path 141" d="M732.5,489.181,706.63,452.663l8.376,1.745a1.159,1.159,0,1,0,.473-2.269L703,449.541l-1.685,12.637a1.159,1.159,0,0,0,2.3.306l1.13-8.486,25.878,36.522a1.158,1.158,0,1,0,1.889-1.339Z" transform="translate(-244.853 -260.971)" fill="#fff"/>
                        <path id="Path_142" data-name="Path 142" d="M504.322,623.089H320.4A3.41,3.41,0,0,1,317,619.683V574.06a3.41,3.41,0,0,1,3.406-3.406h183.92a3.41,3.41,0,0,1,3.406,3.406v45.623A3.41,3.41,0,0,1,504.322,623.089ZM320.4,572.017a2.046,2.046,0,0,0-2.044,2.044v45.623a2.046,2.046,0,0,0,2.044,2.044h183.92a2.046,2.046,0,0,0,2.044-2.044V574.06a2.046,2.046,0,0,0-2.044-2.044Z" transform="translate(-157.208 -288.592)" fill="#ffa64b"/>
                        <circle id="Ellipse_148" data-name="Ellipse 148" cx="13.874" cy="13.874" r="13.874" transform="translate(177.898 292.655)" fill="#fff"/>
                        <path id="Path_143" data-name="Path 143" d="M399.255,590.368a2.312,2.312,0,1,0,0,4.625H508.264a2.312,2.312,0,1,0,0-4.625Z" transform="translate(-175.441 -293.088)" fill="#fff"/>
                        <path id="Path_144" data-name="Path 144" d="M399.255,608.341a2.312,2.312,0,1,0,0,4.625h46.907a2.312,2.312,0,1,0,0-4.625Z" transform="translate(-175.441 -297.187)" fill="#fff"/>
                        <path id="Path_145" data-name="Path 145" d="M873.018,428.016h81.742a3.41,3.41,0,0,1,3.406,3.406v85.131a3.41,3.41,0,0,1-3.406,3.406H873.018a3.41,3.41,0,0,1-3.406-3.406V431.422A3.41,3.41,0,0,1,873.018,428.016ZM954.761,518.6a2.046,2.046,0,0,0,2.044-2.044V431.422a2.046,2.046,0,0,0-2.044-2.044H873.018a2.046,2.046,0,0,0-2.044,2.044v85.131a2.046,2.046,0,0,0,2.044,2.044Z" transform="translate(-283.238 -256.062)" fill="#ffa64b"/>
                        <path id="Path_146" data-name="Path 146" d="M942.812,523.014a2.312,2.312,0,0,0,0-4.625H895.9a2.312,2.312,0,0,0,0,4.625Z" transform="translate(-288.707 -276.673)" fill="#fff"/>
                        <path id="Path_147" data-name="Path 147" d="M942.812,505.365a2.312,2.312,0,0,0,0-4.625H895.9a2.312,2.312,0,1,0,0,4.625Z" transform="translate(-288.707 -272.648)" fill="#fff"/>
                        <path id="Path_148" data-name="Path 148" d="M922.67,450.758a14.555,14.555,0,1,1-14.555,14.555A14.555,14.555,0,0,1,922.67,450.758Z" transform="translate(-292.019 -261.249)" fill="#fff"/>
                      </g>
                      <g class="design-box"  id="Group_3" data-name="Group 3" transform="translate(0 -2772.437)">
                        <g transform="matrix(1, 0, 0, 1, 140, 4706.08)" filter="url(#Rectangle_19)">
                          <rect id="Rectangle_19-2" data-name="Rectangle 19" width="522" height="127" rx="4" transform="translate(284 424.92)" fill="#fff"/>
                        </g>
                      </g>
                    </g>
                  </svg>

                  </div>
            
            </div>
            <div className="design__right">
              <div className="process-heading">
                <Parallax y={[30,-50]}>
                  Design
                  <span className="process-heading__dot">.</span>
                </Parallax>
                
                <Parallax y={[30,-50]}>
                  <div className="services">
                    <p className="service">Wireframing</p>
                    <p className="service">Prototype</p>
                    <p className="service">UI/UX Design</p>
                    <p className="service">Illustrations</p>
                  </div>
                </Parallax>
                <Parallax y={[30,-30]}>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad voluptas aspernatur ullam dolor leniti  maiores tempora sint, at,laboriosam accusantium!</p>
                </Parallax>
                </div>
              </div>
          </div>
          {/* Development */}
          <div className="process development" data-aos="flip-up" >
            <div className="development__left">
              <div className="process-heading">
              {/* <Parallax y={[50,-50]}> */}
                  Development
                  <span className="process-heading__dot">.</span>
              {/* </Parallax> */}
              
              {/* <Parallax y={[30,-40]}> */}
                  <div className="services">
                    <p className="service">React </p>
                    <p className="service">Node.js</p>
                    <p className="service">Firebase</p>
                    <p className="service">Rest API</p>
                  </div>
              {/* </Parallax>
              <Parallax y={[50,-50]}> */}
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad voluptas aspernatur ullam dolor leniti  maiores tempora sint, at,laboriosam accusantium!</p>
              {/* </Parallax> */}
              </div>
              </div>
            <div className="development__right">
                <div className="process-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="872.417" height="872.417" viewBox="0 0 872.417 691.528">
                  <defs>
                    <filter id="Rectangle_26" x="57.417" y="270.528" width="567" height="421" filterUnits="userSpaceOnUse">
                      <feOffset dy="3" input="SourceAlpha"/>
                      <feGaussianBlur stdDeviation="3" result="blur"/>
                      <feFlood flood-opacity="0.161"/>
                      <feComposite operator="in" in2="blur"/>
                      <feComposite in="SourceGraphic"/>
                    </filter>
                    <filter id="Rectangle_27" x="332.417" y="480.528" width="540" height="145" filterUnits="userSpaceOnUse">
                      <feOffset dy="3" input="SourceAlpha"/>
                      <feGaussianBlur stdDeviation="3" result="blur-2"/>
                      <feFlood flood-opacity="0.161"/>
                      <feComposite operator="in" in2="blur-2"/>
                      <feComposite in="SourceGraphic"/>
                    </filter>
                    <linearGradient id="linear-gradient" x1="0.5" y1="1" x2="0.5" y2="-0.001" gradientUnits="objectBoundingBox">
                      <stop offset="0" stop-color="gray" stop-opacity="0.251"/>
                      <stop offset="0.54" stop-color="gray" stop-opacity="0.122"/>
                      <stop offset="1" stop-color="gray" stop-opacity="0.102"/>
                    </linearGradient>
                  </defs>
                  <g id="Group_65" data-name="Group 65" transform="translate(-82.583 -3674.036)">
                    <g class="rectangle_26-2" transform="matrix(1, 0, 0, 1, 82.58, 3674.04)" filter="url(#Rectangle_26)">
                      <rect id="Rectangle_26-2" data-name="Rectangle 26" width="549" height="403" rx="4" transform="translate(66.42 276.53)" fill="#051722" opacity="0.2"/>
                    </g>
                    <g  class="development-box" transform="matrix(1, 0, 0, 1, 82.58, 3674.04)" filter="url(#Rectangle_27)">
                      <rect id="Rectangle_27-2" data-name="Rectangle 27" width="522" height="127" rx="4" transform="translate(341.42 486.53)" fill="#051722"/>
                    </g>
                    <g class="development-1" id="undraw_programming_2svr" transform="translate(82.572 3674.001)">
                      <path id="Path_149" data-name="Path 149" d="M791.643,497.561q-1.289,2.778-2.571,5.482-2,4.2-3.949,8.238c-.578,1.193-1.156,2.363-1.719,3.534-6.371,13.016-12.32,24.529-17.373,34a54.237,54.237,0,0,1-47.273,28.67l-112.348,1.222h-1.185l-9.631.1-8.238.089-25.263.274h-1.022l-12.861.141h-.393l-79.27.859-70.757.741-8.231.089-51.118.556h-.059l-33.152.356h-.356l-104.829,1.133-31.36.341a65.243,65.243,0,0,1-19.758-2.83,64,64,0,0,1-28.959-18.336,148.124,148.124,0,0,1-29.878-50.94q-1.43-4.067-2.667-8.238c-22.825-77.158,5-176.7,55.081-243.321q3.149-4.178,6.4-8.149l.052-.059c15.4-18.906,32.671-34.7,51.066-45.932,32.6-19.936,68.713-25.551,104.236-8.816,30.056,14.165,58.119,20.825,85.322,22.633,2.749.178,5.5.311,8.231.393,62.4,1.963,120.882-20.521,189.558-35.034,2.734-.578,5.475-1.148,8.238-1.689,48.992-9.749,103.339-14.891,167.97-4.082a140.085,140.085,0,0,1,19.825,4.741q4.275,1.378,8.238,2.963c30.849,12.55,47.673,35.738,54.822,64.794q1.015,4.045,1.756,8.231C860.9,329.606,823.773,428.745,791.643,497.561Z" transform="translate(-79.34 -172.91)" fill="#8a8a8a" opacity="0.1"/>
                      <g id="Group_24" data-name="Group 24" transform="translate(8.085 10.136)" opacity="0.1">
                        <path id="Path_150" data-name="Path 150" d="M224.358,217V594.546l-31.36.341a65.247,65.247,0,0,1-19.758-2.83V262.932h.052C188.694,244,205.963,228.209,224.358,217Z" transform="translate(-111.758 -194.464)" fill="#8a8a8a"/>
                        <path id="Path_151" data-name="Path 151" d="M870.352,287.208H164.6q3.149-4.178,6.4-8.149V279H868.6Q869.611,283.023,870.352,287.208Z" transform="translate(-109.519 -210.532)" fill="#8a8a8a"/>
                        <path id="Path_152" data-name="Path 152" d="M1037.938,190.463V506.8h-2.571q-2,4.2-3.949,8.238c-.578,1.193-1.156,2.363-1.719,3.534V187.47Q1033.975,188.848,1037.938,190.463Z" transform="translate(-333.72 -186.811)" fill="#8a8a8a"/>
                        <path id="Path_153" data-name="Path 153" d="M773.328,186.58V582.373l-8.238.089V188.269C767.824,187.691,770.565,187.121,773.328,186.58Z" transform="translate(-265.143 -186.58)" fill="#8a8a8a"/>
                        <path id="Path_154" data-name="Path 154" d="M506.341,236.013V597.23l-8.231.089V235.62C500.859,235.8,503.607,235.9,506.341,236.013Z" transform="translate(-195.952 -199.289)" fill="#8a8a8a"/>
                        <path id="Path_155" data-name="Path 155" d="M791.9,618.52q-2,4.2-3.949,8.238H92.917q-1.43-4.067-2.667-8.238Z" transform="translate(-90.25 -298.523)" fill="#8a8a8a"/>
                      </g>
                      <rect id="Rectangle_203" data-name="Rectangle 203" width="14.076" height="42.717" transform="translate(156.764 196.946)" fill="#3f3d56"/>
                      <rect id="Rectangle_204" data-name="Rectangle 204" width="14.076" height="45.191" transform="translate(535.577 194.723)" fill="#3f3d56"/>
                      <path id="Path_156" data-name="Path 156" d="M666.914,526.264v9.631l-112.548,1.037-1.2.022-42.776.393-1.022.015-13,.111h-.385l-79.255.733-130.1,1.208h-.111l-33.078.311-.356.007L106.1,541.081V529.968l34.56-20.743L210,508.647l1.482-.007.489-.007,1.482-.022,33.293-.274,1.489-.007.474-.007,1.482-.007,10.675-.089.282-.007,26.337-.222h.215l205.508-1.734,5.03-.037h.5l3.838-.037,27.893-.23,1.482-.022,1.371-.015h.711l8.675-.067,1.719-.022,2.3-.015,7.223-.067,11.461-.1,1.482-.015,2.578-.015h.481l55.348-.474Z" transform="translate(-27.494 -130.907)" fill="#65617d"/>
                      <path id="Path_157" data-name="Path 157" d="M666.914,526.264v9.631l-112.548,1.037-1.2.022-42.776.393-1.022.015-13,.111h-.385l-79.255.733-130.1,1.208h-.111l-33.078.311-.356.007L106.1,541.081V529.968l34.56-20.743L210,508.647l1.482-.007.489-.007,1.482-.022,33.293-.274,1.489-.007.474-.007,1.482-.007,10.675-.089.282-.007,26.337-.222h.215l205.508-1.734,5.03-.037h.5l3.838-.037,27.893-.23,1.482-.022,1.371-.015h.711l8.675-.067,1.719-.022,2.3-.015,7.223-.067,11.461-.1,1.482-.015,2.578-.015h.481l55.348-.474Z" transform="translate(-27.494 -130.907)" fill="#ffa64b" opacity="0.536"/>
                      <path id="Path_158" data-name="Path 158" d="M363.215,656.57v18.143a4.541,4.541,0,0,1-2.593,4.1,4.445,4.445,0,0,1-1.852.444l-25.855.548a4.445,4.445,0,0,1-2-.422,4.534,4.534,0,0,1-2.645-4.126V656.57Z" transform="translate(-143.851 -298.247)" fill="#3f3d56"/>
                      <path id="Path_159" data-name="Path 159" d="M363.215,656.57v18.143a4.541,4.541,0,0,1-2.593,4.1,4.445,4.445,0,0,1-1.852.444l-25.855.548a4.445,4.445,0,0,1-2-.422,4.534,4.534,0,0,1-2.645-4.126V656.57Z" transform="translate(-143.851 -298.247)" opacity="0.1"/>
                      <path id="Path_160" data-name="Path 160" d="M365.215,656.57v18.143a4.541,4.541,0,0,1-2.593,4.1,4.445,4.445,0,0,1-1.852.444l-25.855.548a4.446,4.446,0,0,1-2-.422,4.534,4.534,0,0,1-2.645-4.126V656.57Z" transform="translate(-144.369 -298.247)" fill="#3f3d56"/>
                      <rect id="Rectangle_205" data-name="Rectangle 205" width="34.945" height="23.336" transform="translate(504.461 358.323)" fill="#3f3d56"/>
                      <rect id="Rectangle_206" data-name="Rectangle 206" width="34.945" height="23.336" transform="translate(504.461 358.323)" opacity="0.1"/>
                      <rect id="Rectangle_207" data-name="Rectangle 207" width="34.945" height="23.336" transform="translate(502.98 358.323)" fill="#3f3d56"/>
                      <path id="Path_161" data-name="Path 161" d="M225.676,265.82v4.245L211.6,269.7V265.82Z" transform="translate(-54.836 -68.881)" opacity="0.1"/>
                      <path id="Path_162" data-name="Path 162" d="M378.589,272.824l-16.913,121.5a3.186,3.186,0,0,1-3.237,2.748l-135.425-3.512-2.571-.067a3.186,3.186,0,0,1-3.082-3.608L236.348,262.7a3.186,3.186,0,0,1,3.363-2.689l135.914,9.2a3.178,3.178,0,0,1,2.963,3.615Z" transform="translate(-115.1 -195.471)" fill="#2e3346"/>
                      <path id="Path_163" data-name="Path 163" d="M170.92,99.16,156.6,211.271l124.461,3.949,15.306-108.162Z" transform="translate(-40.582 -25.689)" fill="#fdfdfd"/>
                      <rect id="Rectangle_208" data-name="Rectangle 208" width="151.627" height="128.409" rx="5.33" transform="translate(284.929 71.737)" fill="#2e3346"/>
                      <rect id="Rectangle_209" data-name="Rectangle 209" width="137.796" height="106.925" transform="translate(292.085 80.383)" fill="#fdfdfd"/>
                      <path id="Path_164" data-name="Path 164" d="M737.006,262.82v2.808l-14.076.289v-3.1Z" transform="translate(-187.353 -68.104)" opacity="0.1"/>
                      <path id="Path_165" data-name="Path 165" d="M852.723,387.012a2.282,2.282,0,0,1-2.223,2.43l-138.685,2.867a2.282,2.282,0,0,1-2.319-2.067l-11.92-123.927a2.282,2.282,0,0,1,2.163-2.5l137.633-6.845,1.482-.074a2.274,2.274,0,0,1,2.385,2.074Z" transform="translate(-239.558 -194.667)" fill="#2e3346"/>
                      <path id="Path_166" data-name="Path 166" d="M628.93,101l125.7-6.179,10.616,112.607-124.705,2.963Z" transform="translate(-162.992 -24.565)" fill="#fdfdfd"/>
                      <path id="Path_167" data-name="Path 167" d="M901.63,387.012a2.282,2.282,0,0,1-2.222,2.43L886.28,256.973l1.482-.074a2.274,2.274,0,0,1,2.385,2.074Z" transform="translate(-288.466 -194.667)" opacity="0.1"/>
                      <path id="Path_168" data-name="Path 168" d="M239.733,260,223.013,393.555l-2.571-.067a3.186,3.186,0,0,1-3.082-3.608l18.988-127.187A3.186,3.186,0,0,1,239.733,260Z" transform="translate(-115.1 -195.468)" opacity="0.1"/>
                      <rect id="Rectangle_210" data-name="Rectangle 210" width="14.076" height="12.654" transform="translate(156.764 227.009)" opacity="0.1"/>
                      <path id="Path_169" data-name="Path 169" d="M285.875,483.65v3.682l-34.945.933V483.65Z" transform="translate(-65.029 -125.335)" opacity="0.1"/>
                      <path id="Path_170" data-name="Path 170" d="M408.987,484.246V608.855a2.963,2.963,0,0,1-2.852,2.926L264.153,615.56h-.037a2.963,2.963,0,0,1-2.926-2.926V484.246a2.963,2.963,0,0,1,2.926-2.926H406.061a2.963,2.963,0,0,1,2.926,2.926Z" transform="translate(-126.466 -252.829)" fill="#2e3346"/>
                      <path id="Path_171" data-name="Path 171" d="M264.153,481.32V615.56h-.037a2.963,2.963,0,0,1-2.926-2.926V484.246a2.963,2.963,0,0,1,2.926-2.926Z" transform="translate(-126.466 -252.829)" opacity="0.1"/>
                      <path id="Path_172" data-name="Path 172" d="M194.6,319.15H326.1V428.979l-131.5,2.963Z" transform="translate(-50.43 -82.703)" fill="#fdfdfd"/>
                      <rect id="Rectangle_211" data-name="Rectangle 211" width="14.076" height="12.905" transform="translate(535.577 227.009)" opacity="0.1"/>
                      <path id="Path_173" data-name="Path 173" d="M713.875,483.65V488.4l-34.945-.933V483.65Z" transform="translate(-175.95 -125.335)" opacity="0.1"/>
                      <path id="Path_174" data-name="Path 174" d="M815.977,484.246V612.633a2.963,2.963,0,0,1-2.963,2.926h0L671,611.782a2.963,2.963,0,0,1-2.852-2.926V484.246a2.963,2.963,0,0,1,2.926-2.926H813.021a2.963,2.963,0,0,1,2.956,2.926Z" transform="translate(-231.935 -252.829)" fill="#2e3346"/>
                      <path id="Path_175" data-name="Path 175" d="M866.653,484.246V612.633a2.963,2.963,0,0,1-2.963,2.926h0V481.32h0a2.963,2.963,0,0,1,2.963,2.927Z" transform="translate(-282.611 -252.829)" opacity="0.1"/>
                      <path id="Path_176" data-name="Path 176" d="M729.6,319.15H598.1V428.979l131.5,2.963Z" transform="translate(-155.002 -82.703)" fill="#fdfdfd"/>
                      <path id="Path_177" data-name="Path 177" d="M611.487,484.246V608.855a2.963,2.963,0,0,1-2.852,2.926L466.653,615.56h0a2.963,2.963,0,0,1-2.963-2.927V484.246a2.963,2.963,0,0,1,2.926-2.926H608.561A2.963,2.963,0,0,1,611.487,484.246Z" transform="translate(-178.946 -252.829)" fill="#2e3346"/>
                      <path id="Path_178" data-name="Path 178" d="M397.1,319.15H528.6V428.979l-131.5,2.963Z" transform="translate(-102.911 -82.703)" fill="#fdfdfd"/>
                      <path id="Path_179" data-name="Path 179" d="M666.914,533.65v9.631l-112.548,1.037-1.2.022-42.776.393-1.022.015-13,.111h-.385l-79.255.733-130.1,1.208h-.111l-33.078.311-.356.007L106.1,548.467V537.354l150.027-.985h.356l30.367-.207h.141l209.716-1.385h.215l.126-.007h.348l3.549-.022h1.082l55.185-.37,3.26-.015.726-.007Z" transform="translate(-27.494 -138.293)" fill="#ffa64b" opacity="0.536"/>
                      <circle id="Ellipse_149" data-name="Ellipse 149" cx="38.027" cy="38.027" r="38.027" transform="translate(322.956 163.608)" fill="#fbbebe"/>
                      <g id="Group_52" data-name="Group 52">
                        <g id="Group_49" data-name="Group 49" transform="translate(310.586 -6.201)">
                          <line id="Line_2" data-name="Line 2" y1="0.741" x2="75.277" transform="translate(147.422 253.272)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_3" data-name="Line 3" y1="0.733" x2="75.277" transform="translate(147.422 262.517)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_4" data-name="Line 4" y1="0.741" x2="75.277" transform="translate(147.422 271.756)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        </g>
                        <g id="Group_50" data-name="Group 50" transform="translate(310.586 25.799)">
                          <line id="Line_2-2" data-name="Line 2" y1="0.741" x2="58.751" transform="translate(147.422 253.272)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_3-2" data-name="Line 3" y1="0.733" x2="58.751" transform="translate(147.422 262.517)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_4-2" data-name="Line 4" y1="0.741" x2="58.751" transform="translate(147.422 271.756)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        </g>
                        <g id="Group_51" data-name="Group 51" transform="translate(310.586 58.633)">
                          <line id="Line_2-3" data-name="Line 2" y1="0.741" x2="71.943" transform="translate(147.422 253.272)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_3-3" data-name="Line 3" y1="0.733" x2="71.943" transform="translate(147.422 262.517)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                          <line id="Line_4-3" data-name="Line 4" y1="0.741" x2="71.943" transform="translate(147.422 271.756)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        </g>
                      </g>
                      <g id="Group_48" data-name="Group 48" transform="translate(155 -7.388)">
                        <line id="Line_2-4" data-name="Line 2" y1="0.741" x2="75.277" transform="translate(147.422 253.272)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        <line id="Line_3-4" data-name="Line 3" y1="0.733" x2="75.277" transform="translate(147.422 262.517)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        <line id="Line_4-4" data-name="Line 4" y1="0.741" x2="75.277" transform="translate(147.422 271.756)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                      </g>
                      <g id="undraw_design_components_9vy6" transform="translate(133.605 102.33)">
                        <path id="Path_128" data-name="Path 128" d="M29.845.426a20.059,20.059,0,0,0-2.087.065,21.071,21.071,0,0,0-2.1.283q-1.053.2-2.1.5t-2.086.711l-.084.033-.084.034-.084.034-.084.034A25.723,25.723,0,0,0,15.1,5.64a28.145,28.145,0,0,0-4.975,5.016A28.625,28.625,0,0,0,6.516,16.78a26.975,26.975,0,0,0-1.943,6.838L.907,48.949a.982.982,0,0,0,.019.388.82.82,0,0,0,.158.315.76.76,0,0,0,.271.21.827.827,0,0,0,.359.073h.019Q8.394,51.137,14.911,52q6.47.86,12.784,1.392,6.27.529,12.373.735,6.063.205,11.947.094l.176,0,.176,0,.176,0,.175,0q5.746-.128,11.4-.56,5.621-.428,11.138-1.153,5.486-.72,10.855-1.728,5.341-1,10.552-2.289l.02,0a.849.849,0,0,0,.336-.079,1.093,1.093,0,0,0,.3-.2,1.24,1.24,0,0,0,.231-.3,1.191,1.191,0,0,0,.13-.364l7.993-44.663a1.045,1.045,0,0,0,0-.376.818.818,0,0,0-.125-.31.657.657,0,0,0-.542-.294Z" transform="translate(0 0)" fill="#2e3346"/>
                        <path id="Path_40" data-name="Path 40" d="M.788,0a.571.571,0,0,0-.23.049.721.721,0,0,0-.2.136A.816.816,0,0,0,.2.391.8.8,0,0,0,.109.639a.671.671,0,0,0,0,.249.53.53,0,0,0,.087.2.45.45,0,0,0,.158.138.462.462,0,0,0,.213.051l14.118.058a.552.552,0,0,0,.226-.045.708.708,0,0,0,.2-.131.813.813,0,0,0,.157-.2A.8.8,0,0,0,15.363.72a.678.678,0,0,0,0-.247.529.529,0,0,0-.081-.2.438.438,0,0,0-.151-.14.443.443,0,0,0-.207-.055H14.91Z" transform="translate(79.572 20.955)" fill="#ffa64b"/>
                        <path id="Path_129" data-name="Path 129" d="M1.1.04A.16.16,0,0,0,1.05.128a.136.136,0,0,0,0,.047.1.1,0,0,0,.017.041L1.441.75.285.745a.109.109,0,0,0-.044.01A.14.14,0,0,0,.2.781.159.159,0,0,0,.154.869a.135.135,0,0,0,0,.048A.1.1,0,0,0,.17.957.086.086,0,0,0,.2.983a.087.087,0,0,0,.041.01L1.4,1l-.563.53a.161.161,0,0,0-.047.087.136.136,0,0,0,0,.047A.1.1,0,0,0,.8,1.7a.085.085,0,0,0,.031.027.087.087,0,0,0,.039.009.109.109,0,0,0,.043-.009A.138.138,0,0,0,.957,1.7L1.743.964A.159.159,0,0,0,1.791.876a.133.133,0,0,0,0-.047A.1.1,0,0,0,1.775.788L1.252.041A.085.085,0,0,0,1.221.014.087.087,0,0,0,1.181,0a.109.109,0,0,0-.043.009A.139.139,0,0,0,1.1.04Z" transform="translate(96.577 20.831)" fill="#fff"/>
                        <path id="Path_130" data-name="Path 130" d="M1.161.042a.1.1,0,0,1,.018.042.133.133,0,0,1,0,.047A.16.16,0,0,1,1.131.22L.556.758,1.747.764a.091.091,0,0,1,.042.01A.09.09,0,0,1,1.82.8a.1.1,0,0,1,.017.04.133.133,0,0,1,0,.049A.158.158,0,0,1,1.82.939a.161.161,0,0,1-.031.04.144.144,0,0,1-.04.027.114.114,0,0,1-.045.01L.513,1.01.9,1.553a.1.1,0,0,1,.018.042.132.132,0,0,1,0,.047.157.157,0,0,1-.016.047.159.159,0,0,1-.032.042.142.142,0,0,1-.042.027.113.113,0,0,1-.044.009.092.092,0,0,1-.041-.009A.088.088,0,0,1,.715,1.73L.168.972A.105.105,0,0,1,.15.93a.135.135,0,0,1,0-.047A.156.156,0,0,1,.166.835.158.158,0,0,1,.2.793L1,.041A.142.142,0,0,1,1.044.013.113.113,0,0,1,1.088,0a.092.092,0,0,1,.041.009A.088.088,0,0,1,1.161.042Z" transform="translate(75.978 20.722)" fill="#fff"/>
                        <g id="Group_22" data-name="Group 22" transform="translate(81.106 6.256)" opacity="0.4">
                          <path id="Ellipse_86" data-name="Ellipse 86" d="M.851.01A.5.5,0,0,1,1.08.068.492.492,0,0,1,1.249.22a.586.586,0,0,1,.094.222.737.737,0,0,1,0,.27A.863.863,0,0,1,1.25.981a.876.876,0,0,1-.169.218.767.767,0,0,1-.22.145A.607.607,0,0,1,.613,1.4a.487.487,0,0,1-.4-.209A.586.586,0,0,1,.121.964a.737.737,0,0,1,0-.27A.863.863,0,0,1,.213.424.876.876,0,0,1,.382.206.767.767,0,0,1,.6.061.607.607,0,0,1,.851.01Z" transform="translate(1.498)" fill="#fff"/>
                          <path id="Ellipse_87" data-name="Ellipse 87" d="M.849.01a.494.494,0,0,1,.228.058.49.49,0,0,1,.169.151.585.585,0,0,1,.093.222.737.737,0,0,1,0,.27.863.863,0,0,1-.094.268.875.875,0,0,1-.169.218.765.765,0,0,1-.22.145.6.6,0,0,1-.247.051.484.484,0,0,1-.4-.209A.585.585,0,0,1,.121.962a.737.737,0,0,1,0-.27A.863.863,0,0,1,.213.423.875.875,0,0,1,.382.205.765.765,0,0,1,.6.06.6.6,0,0,1,.849.01Z" transform="translate(4.049 0.041)" fill="#fff"/>
                          <path id="Ellipse_88" data-name="Ellipse 88" d="M.848.01a.481.481,0,0,1,.4.209A.584.584,0,0,1,1.335.44a.737.737,0,0,1,0,.269.864.864,0,0,1-.094.268.875.875,0,0,1-.168.217.763.763,0,0,1-.219.145.6.6,0,0,1-.246.051.481.481,0,0,1-.4-.209A.583.583,0,0,1,.121.96a.737.737,0,0,1,0-.269A.864.864,0,0,1,.214.423.875.875,0,0,1,.382.205.763.763,0,0,1,.6.06.6.6,0,0,1,.848.01Z" transform="translate(6.591 0.081)" fill="#fff"/>
                          <path id="Ellipse_89" data-name="Ellipse 89" d="M.846.01A.478.478,0,0,1,1.24.218a.582.582,0,0,1,.092.221.737.737,0,0,1,0,.269.864.864,0,0,1-.094.267.875.875,0,0,1-.168.217.762.762,0,0,1-.218.145.6.6,0,0,1-.245.051.478.478,0,0,1-.394-.208A.582.582,0,0,1,.121.958a.737.737,0,0,1,0-.269A.864.864,0,0,1,.214.422.875.875,0,0,1,.382.2.762.762,0,0,1,.6.06.6.6,0,0,1,.846.01Z" transform="translate(9.123 0.122)" fill="#fff"/>
                          <path id="Ellipse_90" data-name="Ellipse 90" d="M.845.01a.476.476,0,0,1,.392.208.581.581,0,0,1,.091.221.737.737,0,0,1,0,.268.864.864,0,0,1-.094.267.874.874,0,0,1-.168.216.76.76,0,0,1-.218.144.6.6,0,0,1-.244.05.476.476,0,0,1-.392-.208A.581.581,0,0,1,.121.956a.737.737,0,0,1,0-.268A.864.864,0,0,1,.214.421.874.874,0,0,1,.382.2.76.76,0,0,1,.6.06.6.6,0,0,1,.845.01Z" transform="translate(11.646 0.162)" fill="#fff"/>
                          <path id="Ellipse_91" data-name="Ellipse 91" d="M.843.01a.473.473,0,0,1,.39.208.58.58,0,0,1,.09.22.737.737,0,0,1,0,.268A.865.865,0,0,1,1.23.972a.874.874,0,0,1-.167.216.758.758,0,0,1-.217.144.593.593,0,0,1-.244.05.473.473,0,0,1-.39-.207A.579.579,0,0,1,.121.955a.737.737,0,0,1,0-.268A.865.865,0,0,1,.215.42.874.874,0,0,1,.382.2.758.758,0,0,1,.6.06.593.593,0,0,1,.843.01Z" transform="translate(14.16 0.202)" fill="#fff"/>
                          <path id="Ellipse_92" data-name="Ellipse 92" d="M.842.01A.47.47,0,0,1,1.23.217a.578.578,0,0,1,.09.22A.737.737,0,0,1,1.32.7.865.865,0,0,1,1.226.97a.874.874,0,0,1-.167.216.757.757,0,0,1-.216.144.591.591,0,0,1-.243.05.47.47,0,0,1-.389-.207.578.578,0,0,1-.09-.22.737.737,0,0,1,0-.267A.876.876,0,0,1,.382.2.757.757,0,0,1,.6.06.59.59,0,0,1,.842.01Z" transform="translate(16.664 0.242)" fill="#fff"/>
                          <path id="Ellipse_93" data-name="Ellipse 93" d="M.85.009a.5.5,0,0,1,.229.058.491.491,0,0,1,.169.151.584.584,0,0,1,.094.222.735.735,0,0,1,0,.27A.862.862,0,0,1,1.25.977a.876.876,0,0,1-.169.218.768.768,0,0,1-.22.146.608.608,0,0,1-.248.051.5.5,0,0,1-.229-.058.491.491,0,0,1-.169-.151A.583.583,0,0,1,.121.962a.735.735,0,0,1,0-.27A.862.862,0,0,1,.213.423.876.876,0,0,1,.382.205.768.768,0,0,1,.6.06.608.608,0,0,1,.85.009Z" transform="translate(1.122 2.194)" fill="#fff"/>
                          <path id="Ellipse_94" data-name="Ellipse 94" d="M.849.009a.494.494,0,0,1,.228.058.488.488,0,0,1,.168.151.583.583,0,0,1,.093.221.735.735,0,0,1,0,.269.862.862,0,0,1-.094.268.876.876,0,0,1-.169.218.766.766,0,0,1-.219.145.605.605,0,0,1-.247.051.494.494,0,0,1-.228-.057.488.488,0,0,1-.169-.151A.582.582,0,0,1,.121.96a.735.735,0,0,1,0-.269A.862.862,0,0,1,.213.423.876.876,0,0,1,.382.2.766.766,0,0,1,.6.06.6.6,0,0,1,.849.009Z" transform="translate(3.673 2.231)" fill="#fff"/>
                          <path id="Ellipse_95" data-name="Ellipse 95" d="M.847.009a.491.491,0,0,1,.227.058.486.486,0,0,1,.168.15.581.581,0,0,1,.092.221.735.735,0,0,1,0,.269.862.862,0,0,1-.094.267.875.875,0,0,1-.168.217.765.765,0,0,1-.219.145.6.6,0,0,1-.246.051.491.491,0,0,1-.227-.057.486.486,0,0,1-.168-.15A.581.581,0,0,1,.121.958a.735.735,0,0,1,0-.269A.862.862,0,0,1,.213.422.875.875,0,0,1,.382.2.764.764,0,0,1,.6.059.6.6,0,0,1,.847.009Z" transform="translate(6.213 2.267)" fill="#fff"/>
                          <path id="Ellipse_96" data-name="Ellipse 96" d="M.846.009a.488.488,0,0,1,.226.057.484.484,0,0,1,.167.15.58.58,0,0,1,.092.22.735.735,0,0,1,0,.268.863.863,0,0,1-.094.267.875.875,0,0,1-.168.217.763.763,0,0,1-.218.145.6.6,0,0,1-.245.051.478.478,0,0,1-.393-.207A.58.58,0,0,1,.121.957a.735.735,0,0,1,0-.268A.863.863,0,0,1,.214.421.875.875,0,0,1,.382.2.763.763,0,0,1,.6.059.6.6,0,0,1,.846.009Z" transform="translate(8.744 2.303)" fill="#fff"/>
                          <path id="Ellipse_97" data-name="Ellipse 97" d="M.844.009A.485.485,0,0,1,1.07.066a.481.481,0,0,1,.166.15.579.579,0,0,1,.091.22.735.735,0,0,1,0,.268A.863.863,0,0,1,1.233.97a.875.875,0,0,1-.167.216.761.761,0,0,1-.217.144A.6.6,0,0,1,.6,1.381a.475.475,0,0,1-.392-.207A.578.578,0,0,1,.121.955a.735.735,0,0,1,0-.268A.863.863,0,0,1,.214.42.875.875,0,0,1,.382.2.761.761,0,0,1,.6.059.6.6,0,0,1,.844.009Z" transform="translate(11.266 2.339)" fill="#fff"/>
                          <path id="Ellipse_98" data-name="Ellipse 98" d="M.843.009a.472.472,0,0,1,.39.207.577.577,0,0,1,.09.22.735.735,0,0,1,0,.267.864.864,0,0,1-.094.266.874.874,0,0,1-.167.216.76.76,0,0,1-.217.144A.594.594,0,0,1,.6,1.379a.472.472,0,0,1-.39-.206A.577.577,0,0,1,.121.953a.734.734,0,0,1,0-.267A.864.864,0,0,1,.215.42.874.874,0,0,1,.382.2.759.759,0,0,1,.6.059.594.594,0,0,1,.843.009Z" transform="translate(13.778 2.375)" fill="#fff"/>
                          <path id="Ellipse_99" data-name="Ellipse 99" d="M.841.008a.47.47,0,0,1,.388.206.576.576,0,0,1,.09.219.735.735,0,0,1,0,.267.864.864,0,0,1-.094.265.874.874,0,0,1-.167.216.758.758,0,0,1-.216.144A.591.591,0,0,1,.6,1.376.47.47,0,0,1,.211,1.17.576.576,0,0,1,.121.951a.734.734,0,0,1,0-.267A.864.864,0,0,1,.215.419.874.874,0,0,1,.382.2.758.758,0,0,1,.6.059.591.591,0,0,1,.841.008Z" transform="translate(16.281 2.411)" fill="#fff"/>
                          <path id="Ellipse_100" data-name="Ellipse 100" d="M.849.008a.5.5,0,0,1,.229.057.489.489,0,0,1,.169.15.581.581,0,0,1,.094.221.733.733,0,0,1,0,.269.86.86,0,0,1-.094.268.876.876,0,0,1-.169.218.769.769,0,0,1-.22.146.609.609,0,0,1-.248.051.5.5,0,0,1-.229-.057.489.489,0,0,1-.169-.15A.581.581,0,0,1,.12.96a.733.733,0,0,1,0-.269A.86.86,0,0,1,.213.423.876.876,0,0,1,.381.2.769.769,0,0,1,.6.059.609.609,0,0,1,.849.008Z" transform="translate(0.748 4.385)" fill="#fff"/>
                          <path id="Ellipse_101" data-name="Ellipse 101" d="M.848.008a.493.493,0,0,1,.228.057.487.487,0,0,1,.168.15.58.58,0,0,1,.093.221.733.733,0,0,1,0,.269.861.861,0,0,1-.094.268.876.876,0,0,1-.168.217.768.768,0,0,1-.219.145.606.606,0,0,1-.247.051.493.493,0,0,1-.228-.057.487.487,0,0,1-.169-.15A.58.58,0,0,1,.12.959a.732.732,0,0,1,0-.269A.861.861,0,0,1,.213.422.876.876,0,0,1,.381.2.767.767,0,0,1,.6.059.606.606,0,0,1,.848.008Z" transform="translate(3.297 4.417)" fill="#fff"/>
                          <path id="Ellipse_102" data-name="Ellipse 102" d="M.846.008a.49.49,0,0,1,.227.057.484.484,0,0,1,.168.15.579.579,0,0,1,.092.22.733.733,0,0,1,0,.268A.861.861,0,0,1,1.241.97a.876.876,0,0,1-.168.217.766.766,0,0,1-.219.145.6.6,0,0,1-.246.051.49.49,0,0,1-.227-.057.484.484,0,0,1-.168-.15A.579.579,0,0,1,.121.957a.732.732,0,0,1,0-.268A.861.861,0,0,1,.213.421.876.876,0,0,1,.381.2.766.766,0,0,1,.6.059.6.6,0,0,1,.846.008Z" transform="translate(5.836 4.449)" fill="#fff"/>
                          <path id="Ellipse_103" data-name="Ellipse 103" d="M.845.008a.487.487,0,0,1,.226.057.482.482,0,0,1,.167.15.578.578,0,0,1,.092.22.733.733,0,0,1,0,.268.862.862,0,0,1-.094.267.875.875,0,0,1-.168.217.764.764,0,0,1-.218.145.6.6,0,0,1-.245.051.488.488,0,0,1-.226-.057.482.482,0,0,1-.167-.149A.577.577,0,0,1,.121.955a.732.732,0,0,1,0-.268A.862.862,0,0,1,.214.42.875.875,0,0,1,.381.2.764.764,0,0,1,.6.059.6.6,0,0,1,.845.008Z" transform="translate(8.366 4.481)" fill="#fff"/>
                          <path id="Ellipse_104" data-name="Ellipse 104" d="M.843.008a.484.484,0,0,1,.225.057.48.48,0,0,1,.166.149.576.576,0,0,1,.091.219.733.733,0,0,1,0,.267.862.862,0,0,1-.094.266.875.875,0,0,1-.167.216.762.762,0,0,1-.217.145A.6.6,0,0,1,.6,1.378a.485.485,0,0,1-.225-.057.48.48,0,0,1-.166-.149A.576.576,0,0,1,.121.953a.732.732,0,0,1,0-.267A.862.862,0,0,1,.214.419.875.875,0,0,1,.381.2.762.762,0,0,1,.6.059.6.6,0,0,1,.843.008Z" transform="translate(10.887 4.513)" fill="#fff"/>
                          <path id="Ellipse_105" data-name="Ellipse 105" d="M.842.008a.482.482,0,0,1,.225.057.477.477,0,0,1,.165.149.575.575,0,0,1,.09.219.732.732,0,0,1,0,.267.862.862,0,0,1-.094.266.875.875,0,0,1-.167.216.761.761,0,0,1-.217.144A.6.6,0,0,1,.6,1.376a.471.471,0,0,1-.39-.205A.575.575,0,0,1,.121.952a.732.732,0,0,1,0-.267A.862.862,0,0,1,.214.419.875.875,0,0,1,.381.2.761.761,0,0,1,.6.059.6.6,0,0,1,.842.008Z" transform="translate(13.398 4.545)" fill="#fff"/>
                          <path id="Ellipse_106" data-name="Ellipse 106" d="M.84.008a.479.479,0,0,1,.224.057.475.475,0,0,1,.164.149.574.574,0,0,1,.09.219.732.732,0,0,1,0,.266.863.863,0,0,1-.094.265.874.874,0,0,1-.167.215.759.759,0,0,1-.216.144A.592.592,0,0,1,.6,1.373a.469.469,0,0,1-.388-.2A.574.574,0,0,1,.121.95a.732.732,0,0,1,0-.266A.863.863,0,0,1,.215.418.874.874,0,0,1,.381.2.759.759,0,0,1,.6.058.592.592,0,0,1,.84.008Z" transform="translate(15.899 4.577)" fill="#fff"/>
                          <path id="Ellipse_107" data-name="Ellipse 107" d="M.849.007a.5.5,0,0,1,.229.057.488.488,0,0,1,.169.15A.579.579,0,0,1,1.34.434a.731.731,0,0,1,0,.269.859.859,0,0,1-.094.268.877.877,0,0,1-.169.218.77.77,0,0,1-.22.146.61.61,0,0,1-.247.052.5.5,0,0,1-.229-.057.488.488,0,0,1-.169-.15A.579.579,0,0,1,.12.959a.73.73,0,0,1,0-.269A.859.859,0,0,1,.212.422.877.877,0,0,1,.381.2.77.77,0,0,1,.6.058.609.609,0,0,1,.849.007Z" transform="translate(0.374 6.572)" fill="#fff"/>
                          <path id="Ellipse_108" data-name="Ellipse 108" d="M.847.007a.493.493,0,0,1,.228.057.485.485,0,0,1,.168.15.578.578,0,0,1,.093.22.73.73,0,0,1,0,.268.86.86,0,0,1-.094.267.876.876,0,0,1-.168.217.769.769,0,0,1-.219.145.607.607,0,0,1-.247.052.493.493,0,0,1-.228-.056.485.485,0,0,1-.169-.149A.578.578,0,0,1,.12.957a.73.73,0,0,1,0-.268A.86.86,0,0,1,.213.421.876.876,0,0,1,.381.2.769.769,0,0,1,.6.058.607.607,0,0,1,.847.007Z" transform="translate(2.921 6.6)" fill="#fff"/>
                          <path id="Ellipse_109" data-name="Ellipse 109" d="M.848.006a.5.5,0,0,1,.229.056.486.486,0,0,1,.169.149.577.577,0,0,1,.093.22.728.728,0,0,1,0,.268.858.858,0,0,1-.094.267.877.877,0,0,1-.169.218.772.772,0,0,1-.22.146.611.611,0,0,1-.247.052.5.5,0,0,1-.229-.056.486.486,0,0,1-.169-.149A.577.577,0,0,1,.12.957a.728.728,0,0,1,0-.269A.858.858,0,0,1,.212.421.877.877,0,0,1,.381.2.771.771,0,0,1,.6.058.61.61,0,0,1,.848.006Z" transform="translate(0 8.756)" fill="#fff"/>
                          <path id="Ellipse_110" data-name="Ellipse 110" d="M.847.006a.493.493,0,0,1,.228.056.484.484,0,0,1,.168.149.576.576,0,0,1,.093.22.728.728,0,0,1,0,.268.859.859,0,0,1-.094.267.877.877,0,0,1-.168.217.77.77,0,0,1-.219.146A.608.608,0,0,1,.61,1.38a.493.493,0,0,1-.228-.056.484.484,0,0,1-.168-.149A.575.575,0,0,1,.12.956a.728.728,0,0,1,0-.268A.858.858,0,0,1,.212.42.877.877,0,0,1,.381.2.77.77,0,0,1,.6.058.608.608,0,0,1,.847.006Z" transform="translate(2.547 8.78)" fill="#fff"/>
                          <path id="Ellipse_111" data-name="Ellipse 111" d="M.845.006a.49.49,0,0,1,.227.056A.482.482,0,0,1,1.24.211.574.574,0,0,1,1.332.43a.728.728,0,0,1,0,.267.859.859,0,0,1-.094.266.876.876,0,0,1-.168.217.768.768,0,0,1-.218.145.605.605,0,0,1-.246.052A.49.49,0,0,1,.38,1.322a.481.481,0,0,1-.168-.149A.574.574,0,0,1,.12.954a.728.728,0,0,1,0-.268A.859.859,0,0,1,.213.42.876.876,0,0,1,.381.2.768.768,0,0,1,.6.057.6.6,0,0,1,.845.006Z" transform="translate(5.084 8.804)" fill="#fff"/>
                          <path id="Ellipse_112" data-name="Ellipse 112" d="M.846.007a.49.49,0,0,1,.227.057A.483.483,0,0,1,1.24.213a.577.577,0,0,1,.092.22.73.73,0,0,1,0,.268A.86.86,0,0,1,1.24.967a.876.876,0,0,1-.168.217.767.767,0,0,1-.219.145.6.6,0,0,1-.246.052.49.49,0,0,1-.227-.056.483.483,0,0,1-.168-.149A.576.576,0,0,1,.12.955a.73.73,0,0,1,0-.268A.86.86,0,0,1,.213.42.876.876,0,0,1,.381.2.767.767,0,0,1,.6.058.6.6,0,0,1,.846.007Z" transform="translate(5.46 6.628)" fill="#fff"/>
                          <path id="Ellipse_113" data-name="Ellipse 113" d="M.844.007A.487.487,0,0,1,1.07.063a.481.481,0,0,1,.167.149.575.575,0,0,1,.092.219A.73.73,0,0,1,1.33.7a.861.861,0,0,1-.094.266.876.876,0,0,1-.168.216.765.765,0,0,1-.218.145.6.6,0,0,1-.245.051.487.487,0,0,1-.226-.056.48.48,0,0,1-.167-.149A.575.575,0,0,1,.12.954a.73.73,0,0,1,0-.267A.86.86,0,0,1,.213.42.876.876,0,0,1,.381.2.765.765,0,0,1,.6.058.6.6,0,0,1,.844.007Z" transform="translate(7.988 6.656)" fill="#fff"/>
                          <path id="Ellipse_114" data-name="Ellipse 114" d="M.843.007a.484.484,0,0,1,.225.056.478.478,0,0,1,.166.149.574.574,0,0,1,.091.219.73.73,0,0,1,0,.267.861.861,0,0,1-.094.266.875.875,0,0,1-.167.216.764.764,0,0,1-.217.145A.6.6,0,0,1,.6,1.376a.484.484,0,0,1-.225-.056.478.478,0,0,1-.166-.149A.574.574,0,0,1,.121.952a.73.73,0,0,1,0-.267A.861.861,0,0,1,.214.419.875.875,0,0,1,.381.2.763.763,0,0,1,.6.058.6.6,0,0,1,.843.007Z" transform="translate(10.508 6.684)" fill="#fff"/>
                          <path id="Ellipse_115" data-name="Ellipse 115" d="M.841.007a.481.481,0,0,1,.224.056.476.476,0,0,1,.165.149.573.573,0,0,1,.09.219.73.73,0,0,1,0,.266.861.861,0,0,1-.094.265.875.875,0,0,1-.167.216.762.762,0,0,1-.217.144A.6.6,0,0,1,.6,1.373a.481.481,0,0,1-.224-.056.476.476,0,0,1-.165-.148A.573.573,0,0,1,.121.95a.73.73,0,0,1,0-.266A.861.861,0,0,1,.214.418.875.875,0,0,1,.381.2.762.762,0,0,1,.6.058.6.6,0,0,1,.841.007Z" transform="translate(13.017 6.712)" fill="#fff"/>
                          <path id="Ellipse_116" data-name="Ellipse 116" d="M.84.007a.478.478,0,0,1,.224.056.474.474,0,0,1,.164.148.572.572,0,0,1,.09.218.73.73,0,0,1,0,.266A.862.862,0,0,1,1.224.96a.875.875,0,0,1-.166.215.76.76,0,0,1-.216.144A.593.593,0,0,1,.6,1.37a.479.479,0,0,1-.224-.056.473.473,0,0,1-.165-.148A.571.571,0,0,1,.121.948a.73.73,0,0,1,0-.266A.862.862,0,0,1,.214.417.875.875,0,0,1,.381.2.76.76,0,0,1,.6.058.593.593,0,0,1,.84.007Z" transform="translate(15.518 6.74)" fill="#fff"/>
                        </g>
                        <path id="Path_131" data-name="Path 131" d="M3.41,7.547a2.787,2.787,0,0,1-1.276-.282,2.649,2.649,0,0,1-.949-.8A3.075,3.075,0,0,1,.653,5.278,3.887,3.887,0,0,1,.63,3.812,4.662,4.662,0,0,1,1.145,2.34a4.867,4.867,0,0,1,.934-1.205A4.358,4.358,0,0,1,3.3.32a3.472,3.472,0,0,1,1.377-.3,2.783,2.783,0,0,1,1.275.29,2.651,2.651,0,0,1,.943.8A3.084,3.084,0,0,1,7.42,2.3a3.9,3.9,0,0,1,.018,1.461,4.673,4.673,0,0,1-.515,1.463A4.876,4.876,0,0,1,6,6.423a4.368,4.368,0,0,1-1.214.815A3.486,3.486,0,0,1,3.41,7.547ZM4.641.23a3.274,3.274,0,0,0-1.3.286,4.112,4.112,0,0,0-1.152.769,4.59,4.59,0,0,0-.881,1.137A4.4,4.4,0,0,0,.824,3.811,3.668,3.668,0,0,0,.846,5.194a2.9,2.9,0,0,0,.5,1.123,2.5,2.5,0,0,0,.895.751,2.631,2.631,0,0,0,1.2.266A3.283,3.283,0,0,0,4.74,7.043a4.113,4.113,0,0,0,1.146-.768,4.592,4.592,0,0,0,.876-1.131,4.4,4.4,0,0,0,.485-1.381,3.677,3.677,0,0,0-.019-1.378,2.91,2.91,0,0,0-.495-1.124A2.5,2.5,0,0,0,5.843.5,2.627,2.627,0,0,0,4.641.23Z" transform="translate(65.177 34.313)" fill="#ffa64b"/>
                        <path id="Path_132" data-name="Path 132" d="M3.3,1.445l-.978.007L2.506.369a.372.372,0,0,0,0-.14A.3.3,0,0,0,2.453.114.254.254,0,0,0,2.362.038.267.267,0,0,0,2.24.01a.332.332,0,0,0-.132.029.417.417,0,0,0-.117.078A.466.466,0,0,0,1.9.233a.447.447,0,0,0-.049.141L1.67,1.457l-.98.007a.333.333,0,0,0-.132.029.417.417,0,0,0-.117.078.467.467,0,0,0-.089.115A.445.445,0,0,0,.3,1.828a.372.372,0,0,0,0,.14.3.3,0,0,0,.051.114.254.254,0,0,0,.091.077.268.268,0,0,0,.122.027l.98-.008L1.367,3.261a.371.371,0,0,0,0,.14.294.294,0,0,0,.051.114.254.254,0,0,0,.091.076.266.266,0,0,0,.122.027.333.333,0,0,0,.132-.03.417.417,0,0,0,.117-.078A.465.465,0,0,0,1.97,3.4a.445.445,0,0,0,.049-.14L2.2,2.174l.977-.008a.332.332,0,0,0,.131-.029.419.419,0,0,0,.117-.078.464.464,0,0,0,.089-.115.445.445,0,0,0,.049-.14.372.372,0,0,0,0-.14.3.3,0,0,0-.05-.114.254.254,0,0,0-.091-.077A.265.265,0,0,0,3.3,1.445Z" transform="translate(67.283 36.284)" fill="#fff"/>
                        <g id="Group_23" data-name="Group 23" transform="translate(6.941 27.807)" opacity="0.4">
                          <path id="Ellipse_117" data-name="Ellipse 117" d="M.693.005a.457.457,0,0,1,.2.042.423.423,0,0,1,.15.118.461.461,0,0,1,.087.176.553.553,0,0,1,.01.217.655.655,0,0,1-.073.218A.7.7,0,0,1,.926.955a.656.656,0,0,1-.185.121.553.553,0,0,1-.212.046.457.457,0,0,1-.2-.042A.423.423,0,0,1,.179.963.46.46,0,0,1,.092.786.553.553,0,0,1,.082.569.655.655,0,0,1,.155.351.7.7,0,0,1,.295.172.656.656,0,0,1,.48.051.552.552,0,0,1,.693.005Z" transform="translate(0 14.035)" fill="#fff"/>
                          <path id="Ellipse_118" data-name="Ellipse 118" d="M.693,0a.457.457,0,0,1,.2.042.424.424,0,0,1,.15.119A.462.462,0,0,1,1.13.342a.555.555,0,0,1,.01.217.656.656,0,0,1-.074.218A.7.7,0,0,1,.927.956a.655.655,0,0,1-.186.121.552.552,0,0,1-.212.046.457.457,0,0,1-.2-.042A.424.424,0,0,1,.179.963.462.462,0,0,1,.092.786.555.555,0,0,1,.082.568.656.656,0,0,1,.156.35.7.7,0,0,1,.3.171.655.655,0,0,1,.481.05.552.552,0,0,1,.693,0Z" transform="translate(0.341 11.706)" fill="#fff"/>
                          <path id="Ellipse_119" data-name="Ellipse 119" d="M.694,0a.457.457,0,0,1,.2.043.426.426,0,0,1,.15.119.464.464,0,0,1,.087.177A.557.557,0,0,1,1.14.56a.657.657,0,0,1-.074.218A.7.7,0,0,1,.927.958a.654.654,0,0,1-.186.121.551.551,0,0,1-.212.046.457.457,0,0,1-.2-.043A.426.426,0,0,1,.179.963.464.464,0,0,1,.092.786.557.557,0,0,1,.082.568.657.657,0,0,1,.156.349.7.7,0,0,1,.3.17.654.654,0,0,1,.481.049.551.551,0,0,1,.694,0Z" transform="translate(0.683 9.372)" fill="#fff"/>
                          <path id="Ellipse_120" data-name="Ellipse 120" d="M.694,0a.457.457,0,0,1,.2.043.427.427,0,0,1,.151.119.466.466,0,0,1,.087.178.559.559,0,0,1,.009.218A.658.658,0,0,1,1.068.78a.7.7,0,0,1-.14.179.653.653,0,0,1-.186.121.55.55,0,0,1-.212.045.457.457,0,0,1-.2-.043A.427.427,0,0,1,.179.963.466.466,0,0,1,.092.785.558.558,0,0,1,.082.567.658.658,0,0,1,.156.348.7.7,0,0,1,.3.169.653.653,0,0,1,.482.048.55.55,0,0,1,.694,0Z" transform="translate(1.026 7.035)" fill="#fff"/>
                          <path id="Ellipse_121" data-name="Ellipse 121" d="M.695,0a.457.457,0,0,1,.2.044.428.428,0,0,1,.151.12.468.468,0,0,1,.087.178.561.561,0,0,1,.009.219.659.659,0,0,1-.074.219A.7.7,0,0,1,.928.96a.652.652,0,0,1-.186.121.549.549,0,0,1-.213.045.458.458,0,0,1-.2-.043A.428.428,0,0,1,.179.963.468.468,0,0,1,.092.785.56.56,0,0,1,.082.566.659.659,0,0,1,.156.347.7.7,0,0,1,.3.168.652.652,0,0,1,.482.046.549.549,0,0,1,.695,0Z" transform="translate(1.369 4.694)" fill="#fff"/>
                          <path id="Ellipse_122" data-name="Ellipse 122" d="M.7,0A.458.458,0,0,1,.9.045a.429.429,0,0,1,.151.12.47.47,0,0,1,.087.179.562.562,0,0,1,.009.219.66.66,0,0,1-.074.219.7.7,0,0,1-.14.179.651.651,0,0,1-.186.121.549.549,0,0,1-.213.045.458.458,0,0,1-.2-.044A.429.429,0,0,1,.18.963.47.47,0,0,1,.092.784.562.562,0,0,1,.083.565.66.66,0,0,1,.156.346.7.7,0,0,1,.3.166.651.651,0,0,1,.483.045.548.548,0,0,1,.7,0Z" transform="translate(1.713 2.349)" fill="#fff"/>
                          <path id="Ellipse_123" data-name="Ellipse 123" d="M.7,0A.458.458,0,0,1,.9.045a.431.431,0,0,1,.151.121.472.472,0,0,1,.087.179.564.564,0,0,1,.009.22.661.661,0,0,1-.074.22A.7.7,0,0,1,.93.963a.65.65,0,0,1-.186.121.548.548,0,0,1-.213.044.458.458,0,0,1-.2-.044A.431.431,0,0,1,.18.964.472.472,0,0,1,.092.784a.564.564,0,0,1-.01-.22A.661.661,0,0,1,.157.345.7.7,0,0,1,.3.165.65.65,0,0,1,.483.044.548.548,0,0,1,.7,0Z" transform="translate(2.057)" fill="#fff"/>
                          <path id="Ellipse_124" data-name="Ellipse 124" d="M.692,0a.455.455,0,0,1,.2.042.422.422,0,0,1,.15.118.46.46,0,0,1,.087.176.553.553,0,0,1,.009.217.655.655,0,0,1-.073.218A.7.7,0,0,1,.924.954a.655.655,0,0,1-.185.121.551.551,0,0,1-.212.046.455.455,0,0,1-.2-.042A.422.422,0,0,1,.179.961.46.46,0,0,1,.092.785.553.553,0,0,1,.082.568.655.655,0,0,1,.156.351.7.7,0,0,1,.295.172.655.655,0,0,1,.48.051.551.551,0,0,1,.692,0Z" transform="translate(1.673 14.019)" fill="#fff"/>
                          <path id="Ellipse_125" data-name="Ellipse 125" d="M.692,0a.455.455,0,0,1,.2.042.423.423,0,0,1,.15.118.462.462,0,0,1,.087.177.555.555,0,0,1,.009.217.656.656,0,0,1-.074.218A.7.7,0,0,1,.925.955a.654.654,0,0,1-.185.121.55.55,0,0,1-.212.046.455.455,0,0,1-.2-.042A.423.423,0,0,1,.179.962.462.462,0,0,1,.092.785.555.555,0,0,1,.082.568.656.656,0,0,1,.156.35.7.7,0,0,1,.3.171.654.654,0,0,1,.481.05.55.55,0,0,1,.692,0Z" transform="translate(2.015 11.692)" fill="#fff"/>
                          <path id="Ellipse_126" data-name="Ellipse 126" d="M.693,0a.455.455,0,0,1,.2.043.424.424,0,0,1,.15.119.464.464,0,0,1,.087.177A.557.557,0,0,1,1.138.56a.657.657,0,0,1-.074.218A.7.7,0,0,1,.925.957a.653.653,0,0,1-.185.121.549.549,0,0,1-.212.045.455.455,0,0,1-.2-.042A.424.424,0,0,1,.179.962.464.464,0,0,1,.092.785.557.557,0,0,1,.082.567.657.657,0,0,1,.156.349.7.7,0,0,1,.3.17.653.653,0,0,1,.481.049.549.549,0,0,1,.693,0Z" transform="translate(2.358 9.361)" fill="#fff"/>
                          <path id="Ellipse_127" data-name="Ellipse 127" d="M.694,0a.456.456,0,0,1,.2.043.425.425,0,0,1,.15.119A.466.466,0,0,1,1.13.343a.559.559,0,0,1,.009.218.658.658,0,0,1-.074.218A.7.7,0,0,1,.926.958a.652.652,0,0,1-.186.121.549.549,0,0,1-.212.045.456.456,0,0,1-.2-.043A.425.425,0,0,1,.179.962.465.465,0,0,1,.092.784.558.558,0,0,1,.083.566.658.658,0,0,1,.156.348.7.7,0,0,1,.3.169.652.652,0,0,1,.481.048.548.548,0,0,1,.694,0Z" transform="translate(2.702 7.027)" fill="#fff"/>
                          <path id="Ellipse_128" data-name="Ellipse 128" d="M.694,0a.456.456,0,0,1,.2.043.427.427,0,0,1,.15.12A.468.468,0,0,1,1.13.343.56.56,0,0,1,1.14.561.659.659,0,0,1,1.066.78a.7.7,0,0,1-.14.179.651.651,0,0,1-.186.121.548.548,0,0,1-.212.045.456.456,0,0,1-.2-.043.427.427,0,0,1-.15-.12A.467.467,0,0,1,.092.784.56.56,0,0,1,.083.565.659.659,0,0,1,.156.346.7.7,0,0,1,.3.167.651.651,0,0,1,.482.046.548.548,0,0,1,.694,0Z" transform="translate(3.046 4.688)" fill="#fff"/>
                          <path id="Ellipse_129" data-name="Ellipse 129" d="M.695,0a.456.456,0,0,1,.2.044.428.428,0,0,1,.15.12.47.47,0,0,1,.087.179A.562.562,0,0,1,1.14.562a.66.66,0,0,1-.074.219A.7.7,0,0,1,.927.96a.65.65,0,0,1-.186.121.547.547,0,0,1-.212.045.456.456,0,0,1-.2-.044.428.428,0,0,1-.15-.12A.469.469,0,0,1,.092.783.562.562,0,0,1,.083.565.66.66,0,0,1,.157.345.7.7,0,0,1,.3.166.65.65,0,0,1,.482.045.547.547,0,0,1,.695,0Z" transform="translate(3.391 2.346)" fill="#fff"/>
                          <path id="Ellipse_130" data-name="Ellipse 130" d="M.7,0a.456.456,0,0,1,.2.044.429.429,0,0,1,.15.121.471.471,0,0,1,.087.179.564.564,0,0,1,.009.219.661.661,0,0,1-.074.219.7.7,0,0,1-.14.179.649.649,0,0,1-.186.121.546.546,0,0,1-.212.044.456.456,0,0,1-.2-.044A.429.429,0,0,1,.179.962.471.471,0,0,1,.092.783.564.564,0,0,1,.083.564.661.661,0,0,1,.157.344.7.7,0,0,1,.3.165.649.649,0,0,1,.483.044.546.546,0,0,1,.7,0Z" transform="translate(3.736 0)" fill="#fff"/>
                          <path id="Ellipse_131" data-name="Ellipse 131" d="M.691.005a.453.453,0,0,1,.2.042.42.42,0,0,1,.149.118.459.459,0,0,1,.086.176.553.553,0,0,1,.009.216.655.655,0,0,1-.073.217A.7.7,0,0,1,.922.953a.654.654,0,0,1-.185.121.549.549,0,0,1-.211.046.453.453,0,0,1-.2-.042A.42.42,0,0,1,.178.96.459.459,0,0,1,.092.784.553.553,0,0,1,.082.568.655.655,0,0,1,.156.35.7.7,0,0,1,.295.172.654.654,0,0,1,.48.051.549.549,0,0,1,.691.005Z" transform="translate(3.341 14.002)" fill="#fff"/>
                          <path id="Ellipse_132" data-name="Ellipse 132" d="M.692,0a.453.453,0,0,1,.2.042.422.422,0,0,1,.15.118.461.461,0,0,1,.086.176.555.555,0,0,1,.009.217.656.656,0,0,1-.074.218A.7.7,0,0,1,.923.954a.653.653,0,0,1-.185.121.549.549,0,0,1-.211.046.454.454,0,0,1-.2-.042A.422.422,0,0,1,.178.96.461.461,0,0,1,.092.784.555.555,0,0,1,.083.567.656.656,0,0,1,.156.349.7.7,0,0,1,.3.171.653.653,0,0,1,.48.05.548.548,0,0,1,.692,0Z" transform="translate(3.685 11.679)" fill="#fff"/>
                          <path id="Ellipse_133" data-name="Ellipse 133" d="M.692,0a.454.454,0,0,1,.2.043.423.423,0,0,1,.15.119.463.463,0,0,1,.086.177.557.557,0,0,1,.009.217.657.657,0,0,1-.074.218A.7.7,0,0,1,.923.955a.652.652,0,0,1-.185.121.548.548,0,0,1-.211.045.454.454,0,0,1-.2-.042A.423.423,0,0,1,.179.96.463.463,0,0,1,.092.783.556.556,0,0,1,.083.566.657.657,0,0,1,.156.348.7.7,0,0,1,.3.169.652.652,0,0,1,.481.048.548.548,0,0,1,.692,0Z" transform="translate(4.029 9.351)" fill="#fff"/>
                          <path id="Ellipse_134" data-name="Ellipse 134" d="M.693,0a.454.454,0,0,1,.2.043.424.424,0,0,1,.15.119.465.465,0,0,1,.087.177A.558.558,0,0,1,1.137.56a.658.658,0,0,1-.074.218A.7.7,0,0,1,.924.956a.651.651,0,0,1-.185.121.547.547,0,0,1-.212.045.454.454,0,0,1-.2-.043A.424.424,0,0,1,.179.96.465.465,0,0,1,.092.783.558.558,0,0,1,.083.565.658.658,0,0,1,.156.347.7.7,0,0,1,.3.168.651.651,0,0,1,.481.047.547.547,0,0,1,.693,0Z" transform="translate(4.373 7.019)" fill="#fff"/>
                          <path id="Ellipse_135" data-name="Ellipse 135" d="M.693,0a.454.454,0,0,1,.2.043.425.425,0,0,1,.15.12.467.467,0,0,1,.087.178.56.56,0,0,1,.009.218.659.659,0,0,1-.074.218A.7.7,0,0,1,.924.958a.65.65,0,0,1-.185.121.546.546,0,0,1-.212.045.454.454,0,0,1-.2-.043.425.425,0,0,1-.15-.12A.467.467,0,0,1,.092.783.56.56,0,0,1,.083.564.659.659,0,0,1,.157.346.7.7,0,0,1,.3.167.65.65,0,0,1,.482.046.546.546,0,0,1,.693,0Z" transform="translate(4.718 4.683)" fill="#fff"/>
                          <path id="Ellipse_136" data-name="Ellipse 136" d="M.694,0a.454.454,0,0,1,.2.044.427.427,0,0,1,.15.12.469.469,0,0,1,.087.178.562.562,0,0,1,.009.219.66.66,0,0,1-.074.219A.7.7,0,0,1,.925.959.649.649,0,0,1,.74,1.08a.545.545,0,0,1-.212.045.454.454,0,0,1-.2-.044.426.426,0,0,1-.15-.12A.469.469,0,0,1,.092.783.562.562,0,0,1,.083.564.66.66,0,0,1,.157.345.7.7,0,0,1,.3.166.649.649,0,0,1,.482.045.545.545,0,0,1,.694,0Z" transform="translate(5.064 2.344)" fill="#fff"/>
                          <path id="Ellipse_137" data-name="Ellipse 137" d="M.695,0a.454.454,0,0,1,.2.044.428.428,0,0,1,.15.121A.471.471,0,0,1,1.13.344a.564.564,0,0,1,.009.219.661.661,0,0,1-.074.219.7.7,0,0,1-.14.179.648.648,0,0,1-.186.121.545.545,0,0,1-.212.044.454.454,0,0,1-.2-.044.428.428,0,0,1-.15-.12A.471.471,0,0,1,.092.782.564.564,0,0,1,.083.563.661.661,0,0,1,.157.344.7.7,0,0,1,.3.165.648.648,0,0,1,.482.044.545.545,0,0,1,.695,0Z" transform="translate(5.41 0)" fill="#fff"/>
                          <path id="Ellipse_138" data-name="Ellipse 138" d="M.69,0a.452.452,0,0,1,.2.042.419.419,0,0,1,.149.118A.458.458,0,0,1,1.123.34a.553.553,0,0,1,.009.216.656.656,0,0,1-.073.217A.7.7,0,0,1,.92.951a.654.654,0,0,1-.184.121.548.548,0,0,1-.211.046.452.452,0,0,1-.2-.042A.419.419,0,0,1,.178.959.458.458,0,0,1,.092.783.553.553,0,0,1,.083.567.655.655,0,0,1,.156.35.7.7,0,0,1,.295.172.653.653,0,0,1,.479.051.548.548,0,0,1,.69,0Z" transform="translate(5.006 13.986)" fill="#fff"/>
                          <path id="Ellipse_139" data-name="Ellipse 139" d="M.691,0a.452.452,0,0,1,.2.042.42.42,0,0,1,.149.118.46.46,0,0,1,.086.176.555.555,0,0,1,.009.217.656.656,0,0,1-.074.217A.7.7,0,0,1,.921.953a.653.653,0,0,1-.185.121.547.547,0,0,1-.211.046.452.452,0,0,1-.2-.042A.42.42,0,0,1,.178.959.46.46,0,0,1,.092.783.555.555,0,0,1,.083.566.656.656,0,0,1,.156.349.7.7,0,0,1,.3.171.652.652,0,0,1,.48.05.547.547,0,0,1,.691,0Z" transform="translate(5.351 11.665)" fill="#fff"/>
                          <path id="Ellipse_140" data-name="Ellipse 140" d="M.69.005a.45.45,0,0,1,.2.042.418.418,0,0,1,.149.118A.458.458,0,0,1,1.121.34.553.553,0,0,1,1.13.556a.656.656,0,0,1-.073.217A.7.7,0,0,1,.918.951a.653.653,0,0,1-.184.121.546.546,0,0,1-.21.046.45.45,0,0,1-.2-.042A.418.418,0,0,1,.178.958.458.458,0,0,1,.092.783.553.553,0,0,1,.083.567.656.656,0,0,1,.156.35.7.7,0,0,1,.295.172.653.653,0,0,1,.479.051.546.546,0,0,1,.69.005Z" transform="translate(6.667 13.97)" fill="#fff"/>
                          <path id="Ellipse_141" data-name="Ellipse 141" d="M.69,0a.45.45,0,0,1,.2.042.419.419,0,0,1,.149.118.46.46,0,0,1,.086.176.555.555,0,0,1,.009.216.657.657,0,0,1-.073.217A.7.7,0,0,1,.919.952a.652.652,0,0,1-.184.121.545.545,0,0,1-.21.046.45.45,0,0,1-.2-.042A.419.419,0,0,1,.178.958.459.459,0,0,1,.092.782.554.554,0,0,1,.083.566.657.657,0,0,1,.156.349.7.7,0,0,1,.3.171.651.651,0,0,1,.48.05.545.545,0,0,1,.69,0Z" transform="translate(7.013 11.651)" fill="#fff"/>
                          <path id="Ellipse_142" data-name="Ellipse 142" d="M.691,0a.45.45,0,0,1,.2.043.42.42,0,0,1,.149.118.462.462,0,0,1,.086.177.557.557,0,0,1,.009.217.658.658,0,0,1-.074.217A.7.7,0,0,1,.919.953a.651.651,0,0,1-.184.121.545.545,0,0,1-.211.045.45.45,0,0,1-.2-.042A.42.42,0,0,1,.178.959.461.461,0,0,1,.092.782.556.556,0,0,1,.083.565.658.658,0,0,1,.157.348.7.7,0,0,1,.3.169.65.65,0,0,1,.48.049.545.545,0,0,1,.691,0Z" transform="translate(7.359 9.329)" fill="#fff"/>
                          <path id="Ellipse_143" data-name="Ellipse 143" d="M.691,0a.452.452,0,0,1,.2.043.421.421,0,0,1,.149.119.462.462,0,0,1,.086.177.557.557,0,0,1,.009.217A.657.657,0,0,1,1.06.776.7.7,0,0,1,.921.954a.651.651,0,0,1-.185.121.546.546,0,0,1-.211.045.452.452,0,0,1-.2-.042A.421.421,0,0,1,.178.959.462.462,0,0,1,.092.783.556.556,0,0,1,.083.565.657.657,0,0,1,.156.348.7.7,0,0,1,.3.169.651.651,0,0,1,.48.049.546.546,0,0,1,.691,0Z" transform="translate(5.696 9.34)" fill="#fff"/>
                          <path id="Ellipse_144" data-name="Ellipse 144" d="M.692,0a.452.452,0,0,1,.2.043.423.423,0,0,1,.149.119.464.464,0,0,1,.086.177.558.558,0,0,1,.009.217.658.658,0,0,1-.074.218A.7.7,0,0,1,.922.955a.65.65,0,0,1-.185.121.545.545,0,0,1-.211.045.452.452,0,0,1-.2-.043A.423.423,0,0,1,.178.96.464.464,0,0,1,.092.782.558.558,0,0,1,.083.565.658.658,0,0,1,.157.347.7.7,0,0,1,.3.168.65.65,0,0,1,.481.047.545.545,0,0,1,.692,0Z" transform="translate(6.041 7.011)" fill="#fff"/>
                          <path id="Ellipse_145" data-name="Ellipse 145" d="M.693,0a.452.452,0,0,1,.2.043.424.424,0,0,1,.149.12.466.466,0,0,1,.086.178A.56.56,0,0,1,1.135.56a.659.659,0,0,1-.074.218A.7.7,0,0,1,.922.957a.649.649,0,0,1-.185.121.545.545,0,0,1-.211.045.452.452,0,0,1-.2-.043A.424.424,0,0,1,.178.959.466.466,0,0,1,.092.782.56.56,0,0,1,.083.564.659.659,0,0,1,.157.345.7.7,0,0,1,.3.167.649.649,0,0,1,.481.046.545.545,0,0,1,.693,0Z" transform="translate(6.387 4.678)" fill="#fff"/>
                          <path id="Ellipse_146" data-name="Ellipse 146" d="M.693,0a.452.452,0,0,1,.2.044.425.425,0,0,1,.149.12.468.468,0,0,1,.086.178.562.562,0,0,1,.009.218.66.66,0,0,1-.074.218A.7.7,0,0,1,.923.958a.648.648,0,0,1-.185.121.544.544,0,0,1-.211.045.453.453,0,0,1-.2-.044A.425.425,0,0,1,.179.96.468.468,0,0,1,.092.782.562.562,0,0,1,.083.563.66.66,0,0,1,.157.344.7.7,0,0,1,.3.166.648.648,0,0,1,.482.045.544.544,0,0,1,.693,0Z" transform="translate(6.734 2.341)" fill="#fff"/>
                          <path id="Ellipse_147" data-name="Ellipse 147" d="M.694,0a.453.453,0,0,1,.2.044.426.426,0,0,1,.149.12.47.47,0,0,1,.086.179.564.564,0,0,1,.009.219.661.661,0,0,1-.074.219A.7.7,0,0,1,.924.96a.647.647,0,0,1-.185.121.543.543,0,0,1-.212.044.453.453,0,0,1-.2-.044A.426.426,0,0,1,.179.96.47.47,0,0,1,.092.781.564.564,0,0,1,.083.563.661.661,0,0,1,.157.344.7.7,0,0,1,.3.165.647.647,0,0,1,.482.044.543.543,0,0,1,.694,0Z" transform="translate(7.081 0)" fill="#fff"/>
                        </g>
                        <path id="Path_133" data-name="Path 133" d="M39.707.583,5.67.011a.652.652,0,0,0-.26.051.781.781,0,0,0-.228.147.854.854,0,0,0-.172.22A.827.827,0,0,0,4.918.7L.1,32.675a.685.685,0,0,0,.01.266.566.566,0,0,0,.1.217A.513.513,0,0,0,.4,33.3a.548.548,0,0,0,.241.052l33.77-.227a.628.628,0,0,0,.246-.054.776.776,0,0,0,.217-.144.854.854,0,0,0,.165-.213.816.816,0,0,0,.09-.26L40.21,1.277a.716.716,0,0,0-.005-.266.582.582,0,0,0-.1-.219.5.5,0,0,0-.172-.15A.511.511,0,0,0,39.707.583ZM34.886,32.458a.49.49,0,0,1-.054.156.514.514,0,0,1-.1.128.465.465,0,0,1-.13.087.377.377,0,0,1-.148.033L.682,33.082a.329.329,0,0,1-.145-.032.307.307,0,0,1-.109-.087.34.34,0,0,1-.063-.13.412.412,0,0,1-.006-.16L5.177.705A.5.5,0,0,1,5.232.542a.512.512,0,0,1,.1-.132A.468.468,0,0,1,5.472.321.391.391,0,0,1,5.628.29L39.662.856A.307.307,0,0,1,39.8.891a.3.3,0,0,1,.1.09.35.35,0,0,1,.058.132.43.43,0,0,1,0,.16Z" transform="translate(19.086 4.071)" fill="#ffa64b"/>
                        <path id="Path_134" data-name="Path 134" d="M5.61,2.785,5.6,2.821,5.6,2.857l-.007.036-.007.036a3.357,3.357,0,0,1-.4,1.036A3.484,3.484,0,0,1,4.5,4.8a3.2,3.2,0,0,1-.892.563A2.665,2.665,0,0,1,2.6,5.575a2.214,2.214,0,0,1-.945-.2,2.076,2.076,0,0,1-.725-.557,2.279,2.279,0,0,1-.437-.837A2.744,2.744,0,0,1,.4,2.944l0-.036,0-.036,0-.036L.423,2.8a3.314,3.314,0,0,1,.37-1.088A3.493,3.493,0,0,1,1.485.822,3.217,3.217,0,0,1,2.4.222,2.67,2.67,0,0,1,3.447,0,2.2,2.2,0,0,1,4.423.22a2.079,2.079,0,0,1,.732.6,2.316,2.316,0,0,1,.418.885A2.812,2.812,0,0,1,5.61,2.785Z" transform="translate(22.917 28.992)" fill="#fff"/>
                        <path id="Path_135" data-name="Path 135" d="M20.5,0,.572.03A.441.441,0,0,0,.4.066a.534.534,0,0,0-.152.1A.582.582,0,0,0,.133.313a.553.553,0,0,0-.062.18.468.468,0,0,0,.006.18A.384.384,0,0,0,.147.821a.343.343,0,0,0,.121.1A.363.363,0,0,0,.429.956L20.353.914a.426.426,0,0,0,.168-.036.524.524,0,0,0,.148-.1.579.579,0,0,0,.113-.145.556.556,0,0,0,.062-.178.469.469,0,0,0,0-.178.377.377,0,0,0-.066-.145.331.331,0,0,0-.117-.1A.347.347,0,0,0,20.5,0Z" transform="translate(31.616 29.885)" fill="#ffa64b"/>
                        <path id="Path_136" data-name="Path 136" d="M9.21,0,.571.031A.44.44,0,0,0,.4.068a.534.534,0,0,0-.151.1A.581.581,0,0,0,.133.315a.552.552,0,0,0-.061.18.467.467,0,0,0,.006.18A.382.382,0,0,0,.146.82a.342.342,0,0,0,.121.1A.362.362,0,0,0,.428.954L9.065.919a.434.434,0,0,0,.17-.037.53.53,0,0,0,.15-.1A.58.58,0,0,0,9.5.638.552.552,0,0,0,9.56.459a.467.467,0,0,0,0-.178A.379.379,0,0,0,9.488.135a.335.335,0,0,0-.119-.1A.355.355,0,0,0,9.21,0Z" transform="translate(31.188 32.661)" fill="#fff"/>
                        <path id="Path_137" data-name="Path 137" d="M34.35,18.295.879,18.265a.746.746,0,0,1-.33-.075.709.709,0,0,1-.248-.2.793.793,0,0,1-.142-.3.962.962,0,0,1-.013-.369L2.654.961A1.142,1.142,0,0,1,2.781.588a1.182,1.182,0,0,1,.236-.3,1.074,1.074,0,0,1,.312-.2A.891.891,0,0,1,3.684.012L37.3.478a.692.692,0,0,1,.315.078.679.679,0,0,1,.234.2.793.793,0,0,1,.131.3.984.984,0,0,1,.006.365L35.34,17.37a1.139,1.139,0,0,1-.126.36,1.178,1.178,0,0,1-.228.294,1.057,1.057,0,0,1-.3.2A.848.848,0,0,1,34.35,18.295ZM3.632.349A.578.578,0,0,0,3.4.4a.7.7,0,0,0-.2.131.767.767,0,0,0-.153.2.742.742,0,0,0-.082.242L.454,17.316a.625.625,0,0,0,.008.24.515.515,0,0,0,.092.2.459.459,0,0,0,.161.132.484.484,0,0,0,.214.049L34.4,17.97a.551.551,0,0,0,.219-.047.686.686,0,0,0,.194-.129.767.767,0,0,0,.148-.191.739.739,0,0,0,.081-.234L37.688,1.422a.638.638,0,0,0,0-.237A.514.514,0,0,0,37.6.99a.44.44,0,0,0-.152-.133.449.449,0,0,0-.2-.051Z" transform="translate(28.669 8.372)" fill="#fff"/>
                        <path id="Path_138" data-name="Path 138" d="M.574,0A.433.433,0,0,0,.4.039a.525.525,0,0,0-.152.1A.58.58,0,0,0,.135.286.559.559,0,0,0,.073.467.48.48,0,0,0,.078.649.394.394,0,0,0,.147.8a.348.348,0,0,0,.12.1A.36.36,0,0,0,.428.938l19.889.177a.418.418,0,0,0,.168-.035.517.517,0,0,0,.148-.1.577.577,0,0,0,.113-.145.56.56,0,0,0,.062-.179.478.478,0,0,0,0-.179.387.387,0,0,0-.065-.147.334.334,0,0,0-.116-.1.344.344,0,0,0-.156-.038Z" transform="translate(37.828 14.434)" fill="#fff"/>
                        <path id="Path_139" data-name="Path 139" d="M.573,0A.434.434,0,0,0,.4.039a.527.527,0,0,0-.152.1A.58.58,0,0,0,.135.285.557.557,0,0,0,.073.466.478.478,0,0,0,.078.648.392.392,0,0,0,.147.8a.346.346,0,0,0,.12.1A.36.36,0,0,0,.428.935L20.3,1.074a.419.419,0,0,0,.168-.035.517.517,0,0,0,.148-.1A.577.577,0,0,0,20.733.8a.559.559,0,0,0,.062-.178.477.477,0,0,0,0-.179.385.385,0,0,0-.065-.147.333.333,0,0,0-.116-.1.344.344,0,0,0-.156-.037Z" transform="translate(37.406 17.138)" fill="#fff"/>
                        <path id="Path_140" data-name="Path 140" d="M.573,0A.435.435,0,0,0,.4.038a.528.528,0,0,0-.152.1A.58.58,0,0,0,.134.284.557.557,0,0,0,.073.465.476.476,0,0,0,.078.646.39.39,0,0,0,.146.795a.345.345,0,0,0,.12.1A.36.36,0,0,0,.428.932L9.045.976a.428.428,0,0,0,.17-.035.525.525,0,0,0,.15-.1A.58.58,0,0,0,9.478.7.559.559,0,0,0,9.54.516a.476.476,0,0,0,0-.18A.387.387,0,0,0,9.469.189a.34.34,0,0,0-.118-.1A.353.353,0,0,0,9.192.052Z" transform="translate(36.991 19.804)" fill="#fff"/>
                        <path id="Path_141" data-name="Path 141" d="M3.975,5.522,1.563.437,2.58.68a.131.131,0,0,0,.058,0A.166.166,0,0,0,2.694.657.2.2,0,0,0,2.741.614.206.206,0,0,0,2.774.555.185.185,0,0,0,2.785.49.152.152,0,0,0,2.773.433.123.123,0,0,0,2.742.388.113.113,0,0,0,2.693.363L1.176,0,.669,1.768a.179.179,0,0,0-.007.064.143.143,0,0,0,.016.056.12.12,0,0,0,.035.041.117.117,0,0,0,.052.021.137.137,0,0,0,.059,0,.173.173,0,0,0,.055-.028.2.2,0,0,0,.045-.046A.205.205,0,0,0,.953,1.81L1.293.623,3.706,5.709a.117.117,0,0,0,.035.044.115.115,0,0,0,.048.022.134.134,0,0,0,.056,0A.168.168,0,0,0,3.9,5.747.2.2,0,0,0,3.95,5.7a.207.207,0,0,0,.029-.058.181.181,0,0,0,.009-.062A.146.146,0,0,0,3.975,5.522Z" transform="translate(63.294 27.824)" fill="#fff"/>
                        <path id="Path_142" data-name="Path 142" d="M24.495,7.331.453,7.683a.386.386,0,0,1-.17-.035.357.357,0,0,1-.128-.1.4.4,0,0,1-.074-.152.482.482,0,0,1-.007-.187L1.062.721A.579.579,0,0,1,1.127.531.614.614,0,0,1,1.247.376a.569.569,0,0,1,.16-.105A.471.471,0,0,1,1.59.231L25.675,0a.366.366,0,0,1,.164.036.344.344,0,0,1,.123.1.39.39,0,0,1,.069.151.486.486,0,0,1,0,.185L25.009,6.85a.577.577,0,0,1-.064.185.614.614,0,0,1-.118.152.56.56,0,0,1-.155.1A.454.454,0,0,1,24.495,7.331ZM1.56.425a.284.284,0,0,0-.109.024.343.343,0,0,0-.1.063.369.369,0,0,0-.072.093.346.346,0,0,0-.039.113L.255,7.2a.288.288,0,0,0,0,.112A.237.237,0,0,0,.3,7.408a.216.216,0,0,0,.077.061.232.232,0,0,0,.1.021l24.043-.349a.273.273,0,0,0,.106-.024.338.338,0,0,0,.093-.062.369.369,0,0,0,.071-.091.346.346,0,0,0,.039-.111L25.861.478a.291.291,0,0,0,0-.111.235.235,0,0,0-.042-.09.207.207,0,0,0-.074-.061.219.219,0,0,0-.1-.022Z" transform="translate(22.486 40.978)" fill="#ffa64b"/>
                        <path id="Ellipse_148" data-name="Ellipse 148" d="M2.444.019a1.559,1.559,0,0,1,.691.147,1.451,1.451,0,0,1,.518.415,1.611,1.611,0,0,1,.3.621,1.97,1.97,0,0,1,.026.763,2.349,2.349,0,0,1-.262.766,2.5,2.5,0,0,1-.489.629,2.312,2.312,0,0,1-.648.428,1.913,1.913,0,0,1-.738.164,1.561,1.561,0,0,1-.691-.145,1.451,1.451,0,0,1-.52-.414,1.609,1.609,0,0,1-.3-.62A1.968,1.968,0,0,1,.3,2.01a2.348,2.348,0,0,1,.262-.768A2.5,2.5,0,0,1,1.054.61,2.311,2.311,0,0,1,1.7.182,1.91,1.91,0,0,1,2.444.019Z" transform="translate(25.198 42.659)" fill="#fff"/>
                        <path id="Path_143" data-name="Path 143" d="M.406.159A.315.315,0,0,0,.284.186.384.384,0,0,0,.176.257a.414.414,0,0,0-.081.1A.392.392,0,0,0,.051.489a.329.329,0,0,0,0,.127A.269.269,0,0,0,.1.72.242.242,0,0,0,.19.789.259.259,0,0,0,.3.813l14.2-.162a.309.309,0,0,0,.12-.027.383.383,0,0,0,.106-.07.417.417,0,0,0,.08-.1.394.394,0,0,0,.044-.126.33.33,0,0,0,0-.126.265.265,0,0,0-.047-.1.233.233,0,0,0-.084-.068A.249.249,0,0,0,14.611,0Z" transform="translate(31.365 43.129)" fill="#fff"/>
                        <path id="Path_144" data-name="Path 144" d="M.406.08A.317.317,0,0,0,.283.107.383.383,0,0,0,.176.178a.417.417,0,0,0-.081.1A.392.392,0,0,0,.051.41a.328.328,0,0,0,0,.127A.267.267,0,0,0,.1.64.239.239,0,0,0,.19.709.256.256,0,0,0,.3.733L6.448.654A.312.312,0,0,0,6.57.627.382.382,0,0,0,6.677.557a.417.417,0,0,0,.081-.1A.391.391,0,0,0,6.8.326.327.327,0,0,0,6.8.2.266.266,0,0,0,6.749.1.236.236,0,0,0,6.664.028.254.254,0,0,0,6.551,0Z" transform="translate(31.061 45.17)" fill="#fff"/>
                        <path id="Path_145" data-name="Path 145" d="M2.6,0,12.623.018a.334.334,0,0,1,.155.037.324.324,0,0,1,.114.1A.388.388,0,0,1,12.955.3a.493.493,0,0,1,0,.182L10.912,12.135a.586.586,0,0,1-.064.181.609.609,0,0,1-.114.148.537.537,0,0,1-.149.1.42.42,0,0,1-.167.038l-10,.076a.341.341,0,0,1-.157-.036.326.326,0,0,1-.116-.1A.382.382,0,0,1,.082,12.4a.488.488,0,0,1,0-.182L2.1.472A.59.59,0,0,1,2.161.288a.607.607,0,0,1,.116-.15.536.536,0,0,1,.151-.1A.425.425,0,0,1,2.6,0Zm7.851,12.416a.253.253,0,0,0,.1-.023.323.323,0,0,0,.089-.06.367.367,0,0,0,.069-.089.354.354,0,0,0,.039-.108L12.79.487a.3.3,0,0,0,0-.109.233.233,0,0,0-.038-.089.2.2,0,0,0-.068-.06.2.2,0,0,0-.093-.022L2.566.189a.254.254,0,0,0-.1.022.322.322,0,0,0-.091.061.365.365,0,0,0-.07.09.351.351,0,0,0-.039.11L.248,12.213a.29.29,0,0,0,0,.109.229.229,0,0,0,.039.089.2.2,0,0,0,.07.06.2.2,0,0,0,.094.021Z" transform="translate(78.72 25.525)" fill="#ffa64b"/>
                        <path id="Path_146" data-name="Path 146" d="M6.024.634A.286.286,0,0,0,6.138.608a.364.364,0,0,0,.1-.068.413.413,0,0,0,.078-.1A.4.4,0,0,0,6.361.316a.332.332,0,0,0,0-.123.26.26,0,0,0-.043-.1A.218.218,0,0,0,6.24.026.227.227,0,0,0,6.134,0L.394.032A.288.288,0,0,0,.279.058a.366.366,0,0,0-.1.069A.413.413,0,0,0,.1.227.4.4,0,0,0,.055.351a.332.332,0,0,0,0,.124A.26.26,0,0,0,.1.575.221.221,0,0,0,.178.643.23.23,0,0,0,.284.667Z" transform="translate(81.414 35.112)" fill="#fff"/>
                        <path id="Path_147" data-name="Path 147" d="M6.026.634A.285.285,0,0,0,6.14.609a.363.363,0,0,0,.1-.068A.413.413,0,0,0,6.32.44.4.4,0,0,0,6.363.317a.333.333,0,0,0,0-.123.26.26,0,0,0-.043-.1A.219.219,0,0,0,6.242.025.227.227,0,0,0,6.137,0L.394.024A.288.288,0,0,0,.279.049a.365.365,0,0,0-.1.069A.412.412,0,0,0,.1.219.4.4,0,0,0,.055.343a.331.331,0,0,0,0,.124A.261.261,0,0,0,.1.568.223.223,0,0,0,.178.635.23.23,0,0,0,.284.66Z" transform="translate(81.737 33.247)" fill="#fff"/>
                        <path id="Path_148" data-name="Path 148" d="M2.48,0a1.437,1.437,0,0,1,.667.157,1.391,1.391,0,0,1,.492.429,1.652,1.652,0,0,1,.271.636,2.107,2.107,0,0,1,0,.778,2.513,2.513,0,0,1-.275.778,2.593,2.593,0,0,1-.492.636,2.287,2.287,0,0,1-.64.43A1.8,1.8,0,0,1,1.785,4a1.439,1.439,0,0,1-.667-.155,1.39,1.39,0,0,1-.493-.427,1.648,1.648,0,0,1-.273-.636,2.1,2.1,0,0,1-.005-.78,2.512,2.512,0,0,1,.276-.78A2.591,2.591,0,0,1,1.116.588a2.289,2.289,0,0,1,.642-.43A1.8,1.8,0,0,1,2.48,0Z" transform="translate(83.449 27.955)" fill="#fff"/>
                      </g>
                      <g id="undraw_design_components_9vy6-2" data-name="undraw_design_components_9vy6" transform="translate(483.969 77.147)">
                        <path id="Path_128-2" data-name="Path 128" d="M19.231.973a16.217,16.217,0,0,0-1.865.127,15.982,15.982,0,0,0-5.287,1.636l-.067.035-.067.035-.067.035-.067.035A17.177,17.177,0,0,0,7.248,6.435a19.844,19.844,0,0,0-3.289,4.928A23.179,23.179,0,0,0,2.092,17.3a26.157,26.157,0,0,0-.292,6.6L3.75,48.466a1.206,1.206,0,0,0,.095.381,1.151,1.151,0,0,0,.2.314.965.965,0,0,0,.277.215.761.761,0,0,0,.325.085l.016,0q6.054,1.432,12.064,2.56,6.042,1.133,12.02,1.953,6.009.824,11.931,1.324,5.953.5,11.793.672l.175,0,.175,0,.175,0,.175,0q5.776.147,11.512-.035,5.766-.183,11.471-.7,5.735-.52,11.387-1.378,5.682-.864,11.257-2.071l.022,0a.819.819,0,0,0,.363-.073.835.835,0,0,0,.286-.217.946.946,0,0,0,.181-.328,1.1,1.1,0,0,0,.048-.406L96.476,1.063a1.209,1.209,0,0,0-.1-.413,1.161,1.161,0,0,0-.226-.335,1.029,1.029,0,0,0-.317-.224.892.892,0,0,0-.375-.079Z" transform="translate(0 22.903)" fill="#2e3346"/>
                        <path id="Path_40-2" data-name="Path 40" d="M.605,0A.518.518,0,0,0,.373.055.549.549,0,0,0,.191.2.637.637,0,0,0,.076.419.739.739,0,0,0,.047.686.8.8,0,0,0,.113.953a.77.77,0,0,0,.145.218.675.675,0,0,0,.2.148A.569.569,0,0,0,.7,1.374l15.355.058a.537.537,0,0,0,.239-.049.561.561,0,0,0,.19-.144.641.641,0,0,0,.122-.218.736.736,0,0,0,.035-.269A.8.8,0,0,0,16.576.48a.774.774,0,0,0-.144-.223.691.691,0,0,0-.2-.153.59.59,0,0,0-.244-.06h-.02Z" transform="translate(72.898 44.061)" fill="#ffa64b"/>
                        <path id="Path_129-2" data-name="Path 129" d="M.9.042A.129.129,0,0,0,.872.087.151.151,0,0,0,.866.139.16.16,0,0,0,.878.19a.154.154,0,0,0,.03.045l.565.589-1.3,0A.106.106,0,0,0,.129.831.111.111,0,0,0,.093.861.126.126,0,0,0,.069.9.147.147,0,0,0,.063.957a.157.157,0,0,0,.013.053.152.152,0,0,0,.029.044.135.135,0,0,0,.041.029.117.117,0,0,0,.048.011l1.3,0L1,1.684a.129.129,0,0,0-.024.045.15.15,0,0,0-.005.051.16.16,0,0,0,.012.052.154.154,0,0,0,.03.045.136.136,0,0,0,.043.03.117.117,0,0,0,.047.01.107.107,0,0,0,.046-.01.111.111,0,0,0,.038-.03l.682-.818A.125.125,0,0,0,1.9,1.015.148.148,0,0,0,1.9.963.16.16,0,0,0,1.888.912a.151.151,0,0,0-.03-.045L1.069.043a.134.134,0,0,0-.042-.03A.117.117,0,0,0,.98,0a.107.107,0,0,0-.045.01A.11.11,0,0,0,.9.042Z" transform="translate(91.483 43.879)" fill="#fff"/>
                        <path id="Path_130-2" data-name="Path 130" d="M.916.042A.148.148,0,0,1,.945.086.158.158,0,0,1,.957.137.146.146,0,0,1,.952.188.124.124,0,0,1,.929.232L.46.808l1.255,0a.111.111,0,0,1,.047.011A.133.133,0,0,1,1.8.852.151.151,0,0,1,1.831.9a.158.158,0,0,1,.013.052A.146.146,0,0,1,1.838,1a.125.125,0,0,1-.023.043.107.107,0,0,1-.036.029.1.1,0,0,1-.045.01l-1.255,0,.549.58a.149.149,0,0,1,.029.045.158.158,0,0,1,.012.051.147.147,0,0,1-.005.051.123.123,0,0,1-.023.044A.107.107,0,0,1,1,1.877a.1.1,0,0,1-.044.01.112.112,0,0,1-.045-.01.133.133,0,0,1-.041-.03l-.767-.81A.148.148,0,0,1,.077.992.158.158,0,0,1,.065.942.147.147,0,0,1,.07.891.123.123,0,0,1,.093.847L.748.041A.107.107,0,0,1,.785.012.1.1,0,0,1,.829,0a.111.111,0,0,1,.045.01A.13.13,0,0,1,.916.042Z" transform="translate(69.133 43.821)" fill="#fff"/>
                        <g id="Group_22-2" data-name="Group 22" transform="translate(72.387 28.156)" opacity="0.4">
                          <path id="Ellipse_86-2" data-name="Ellipse 86" d="M.652.006A.607.607,0,0,1,.91.062a.714.714,0,0,1,.218.157.818.818,0,0,1,.156.234.857.857,0,0,1,.071.288.805.805,0,0,1-.032.289.7.7,0,0,1-.124.237.6.6,0,0,1-.2.16.562.562,0,0,1-.25.06A.607.607,0,0,1,.5,1.431a.714.714,0,0,1-.218-.157A.818.818,0,0,1,.122,1.04.857.857,0,0,1,.051.752.805.805,0,0,1,.082.463.7.7,0,0,1,.206.227.6.6,0,0,1,.4.066.562.562,0,0,1,.652.006Z" transform="translate(0 0.146)" fill="#fff"/>
                          <path id="Ellipse_87-2" data-name="Ellipse 87" d="M.655.006A.61.61,0,0,1,.914.062a.716.716,0,0,1,.219.157.819.819,0,0,1,.157.235.857.857,0,0,1,.071.289.806.806,0,0,1-.032.289.7.7,0,0,1-.124.237.6.6,0,0,1-.2.161.565.565,0,0,1-.251.06A.61.61,0,0,1,.5,1.434a.717.717,0,0,1-.219-.157.819.819,0,0,1-.156-.235A.857.857,0,0,1,.051.753.806.806,0,0,1,.082.464.7.7,0,0,1,.207.227.6.6,0,0,1,.4.066.565.565,0,0,1,.655.006Z" transform="translate(2.721 0.122)" fill="#fff"/>
                          <path id="Ellipse_88-2" data-name="Ellipse 88" d="M.657.006a.613.613,0,0,1,.26.056.719.719,0,0,1,.22.158.82.82,0,0,1,.157.235.857.857,0,0,1,.071.289.806.806,0,0,1-.032.29.7.7,0,0,1-.125.238.607.607,0,0,1-.2.161.568.568,0,0,1-.252.06A.613.613,0,0,1,.5,1.437a.719.719,0,0,1-.22-.158.82.82,0,0,1-.157-.235A.857.857,0,0,1,.05.755.806.806,0,0,1,.082.465.7.7,0,0,1,.207.228a.607.607,0,0,1,.2-.161A.568.568,0,0,1,.657.006Z" transform="translate(5.454 0.098)" fill="#fff"/>
                          <path id="Ellipse_89-2" data-name="Ellipse 89" d="M.66.006A.617.617,0,0,1,.921.062.721.721,0,0,1,1.142.22.821.821,0,0,1,1.3.456a.857.857,0,0,1,.071.29.806.806,0,0,1-.032.291.7.7,0,0,1-.126.238.61.61,0,0,1-.2.161A.572.572,0,0,1,.76,1.5.617.617,0,0,1,.5,1.44a.721.721,0,0,1-.221-.158.821.821,0,0,1-.157-.236A.857.857,0,0,1,.05.756.806.806,0,0,1,.082.466.7.7,0,0,1,.208.228a.61.61,0,0,1,.2-.162A.572.572,0,0,1,.66.006Z" transform="translate(8.197 0.074)" fill="#fff"/>
                          <path id="Ellipse_90-2" data-name="Ellipse 90" d="M.663.006A.62.62,0,0,1,.925.062.723.723,0,0,1,1.146.22.822.822,0,0,1,1.3.457a.857.857,0,0,1,.072.29.806.806,0,0,1-.033.291.705.705,0,0,1-.126.239.612.612,0,0,1-.2.162A.575.575,0,0,1,.763,1.5.62.62,0,0,1,.5,1.443a.724.724,0,0,1-.221-.158.822.822,0,0,1-.158-.236A.857.857,0,0,1,.05.758.806.806,0,0,1,.083.467.705.705,0,0,1,.209.229a.612.612,0,0,1,.2-.162A.575.575,0,0,1,.663.006Z" transform="translate(10.951 0.049)" fill="#fff"/>
                          <path id="Ellipse_91-2" data-name="Ellipse 91" d="M.665.006A.623.623,0,0,1,.928.062a.726.726,0,0,1,.222.159.823.823,0,0,1,.159.237.857.857,0,0,1,.072.291.807.807,0,0,1-.033.292.707.707,0,0,1-.127.239.615.615,0,0,1-.2.162A.579.579,0,0,1,.765,1.5.623.623,0,0,1,.5,1.446.726.726,0,0,1,.28,1.287.823.823,0,0,1,.121,1.05.857.857,0,0,1,.05.76.807.807,0,0,1,.083.468.707.707,0,0,1,.209.229.615.615,0,0,1,.41.067.579.579,0,0,1,.665.006Z" transform="translate(13.717 0.025)" fill="#fff"/>
                          <path id="Ellipse_92-2" data-name="Ellipse 92" d="M.668.006A.627.627,0,0,1,.932.062a.728.728,0,0,1,.223.159.824.824,0,0,1,.159.237A.857.857,0,0,1,1.386.75a.807.807,0,0,1-.033.292.708.708,0,0,1-.128.24.618.618,0,0,1-.2.162.582.582,0,0,1-.256.061A.627.627,0,0,1,.5,1.449.728.728,0,0,1,.28,1.29a.824.824,0,0,1-.159-.237A.857.857,0,0,1,.05.761.807.807,0,0,1,.083.469.708.708,0,0,1,.21.23a.618.618,0,0,1,.2-.163A.582.582,0,0,1,.668.006Z" transform="translate(16.494)" fill="#fff"/>
                          <path id="Ellipse_93-2" data-name="Ellipse 93" d="M.652,0A.607.607,0,0,1,.91.061a.716.716,0,0,1,.218.157.819.819,0,0,1,.156.234.856.856,0,0,1,.071.288.8.8,0,0,1-.032.289.7.7,0,0,1-.124.236.6.6,0,0,1-.2.16.561.561,0,0,1-.25.06A.608.608,0,0,1,.5,1.429a.716.716,0,0,1-.218-.157.819.819,0,0,1-.156-.234A.856.856,0,0,1,.051.749.8.8,0,0,1,.082.461.7.7,0,0,1,.206.225.6.6,0,0,1,.4.065.561.561,0,0,1,.652,0Z" transform="translate(0.161 2.493)" fill="#fff"/>
                          <path id="Ellipse_94-2" data-name="Ellipse 94" d="M.655,0A.611.611,0,0,1,.914.061a.718.718,0,0,1,.219.158.82.82,0,0,1,.156.235A.856.856,0,0,1,1.36.742a.8.8,0,0,1-.032.289.7.7,0,0,1-.124.237.6.6,0,0,1-.2.16.564.564,0,0,1-.251.06A.611.611,0,0,1,.5,1.431a.718.718,0,0,1-.219-.158.82.82,0,0,1-.156-.235A.856.856,0,0,1,.051.751.8.8,0,0,1,.082.462.7.7,0,0,1,.206.225.6.6,0,0,1,.4.065.564.564,0,0,1,.655,0Z" transform="translate(2.881 2.474)" fill="#fff"/>
                          <path id="Ellipse_95-2" data-name="Ellipse 95" d="M.657,0a.614.614,0,0,1,.26.057.72.72,0,0,1,.22.158.821.821,0,0,1,.157.235.856.856,0,0,1,.071.289.8.8,0,0,1-.032.29.7.7,0,0,1-.125.237.605.605,0,0,1-.2.161.568.568,0,0,1-.252.06A.614.614,0,0,1,.5,1.434a.72.72,0,0,1-.22-.158.821.821,0,0,1-.157-.235A.856.856,0,0,1,.05.752.8.8,0,0,1,.082.463.7.7,0,0,1,.207.226a.605.605,0,0,1,.2-.161A.568.568,0,0,1,.657,0Z" transform="translate(5.613 2.454)" fill="#fff"/>
                          <path id="Ellipse_96-2" data-name="Ellipse 96" d="M.66,0A.617.617,0,0,1,.921.061.723.723,0,0,1,1.142.22.822.822,0,0,1,1.3.455a.856.856,0,0,1,.071.29.8.8,0,0,1-.032.29.7.7,0,0,1-.126.238.608.608,0,0,1-.2.161.571.571,0,0,1-.253.06A.617.617,0,0,1,.5,1.437a.723.723,0,0,1-.22-.158.822.822,0,0,1-.157-.236A.856.856,0,0,1,.05.754.8.8,0,0,1,.082.464.7.7,0,0,1,.208.226a.608.608,0,0,1,.2-.161A.571.571,0,0,1,.66,0Z" transform="translate(8.356 2.435)" fill="#fff"/>
                          <path id="Ellipse_97-2" data-name="Ellipse 97" d="M.663,0A.621.621,0,0,1,.925.061.725.725,0,0,1,1.146.22.823.823,0,0,1,1.3.456a.856.856,0,0,1,.072.29.8.8,0,0,1-.033.291.7.7,0,0,1-.126.238.611.611,0,0,1-.2.161.575.575,0,0,1-.254.06A.621.621,0,0,1,.5,1.44a.725.725,0,0,1-.221-.159.823.823,0,0,1-.158-.236A.856.856,0,0,1,.05.755.8.8,0,0,1,.083.465.7.7,0,0,1,.209.227a.611.611,0,0,1,.2-.161A.575.575,0,0,1,.663,0Z" transform="translate(11.109 2.415)" fill="#fff"/>
                          <path id="Ellipse_98-2" data-name="Ellipse 98" d="M.665,0A.624.624,0,0,1,.928.061.727.727,0,0,1,1.151.22a.824.824,0,0,1,.159.237.856.856,0,0,1,.072.291.8.8,0,0,1-.033.292.7.7,0,0,1-.127.239.613.613,0,0,1-.2.162.578.578,0,0,1-.255.06A.624.624,0,0,1,.5,1.443.727.727,0,0,1,.28,1.284a.824.824,0,0,1-.158-.237A.856.856,0,0,1,.05.757.805.805,0,0,1,.083.465.7.7,0,0,1,.209.227.613.613,0,0,1,.41.065.578.578,0,0,1,.665,0Z" transform="translate(13.874 2.396)" fill="#fff"/>
                          <path id="Ellipse_99-2" data-name="Ellipse 99" d="M.668,0A.627.627,0,0,1,.932.062a.73.73,0,0,1,.223.159.825.825,0,0,1,.159.237A.856.856,0,0,1,1.386.75a.805.805,0,0,1-.033.292.706.706,0,0,1-.128.239.616.616,0,0,1-.2.162.582.582,0,0,1-.256.06A.628.628,0,0,1,.5,1.446.73.73,0,0,1,.28,1.287.825.825,0,0,1,.121,1.05.856.856,0,0,1,.049.758.805.805,0,0,1,.083.466.706.706,0,0,1,.21.227a.616.616,0,0,1,.2-.162A.582.582,0,0,1,.668,0Z" transform="translate(16.651 2.376)" fill="#fff"/>
                          <path id="Ellipse_100-2" data-name="Ellipse 100" d="M.652,0A.608.608,0,0,1,.91.06a.717.717,0,0,1,.218.158.82.82,0,0,1,.156.235A.856.856,0,0,1,1.355.74a.8.8,0,0,1-.032.288.7.7,0,0,1-.124.236.6.6,0,0,1-.2.159.561.561,0,0,1-.25.059A.608.608,0,0,1,.5,1.426a.717.717,0,0,1-.218-.158.821.821,0,0,1-.156-.234A.856.856,0,0,1,.051.746.8.8,0,0,1,.082.458.7.7,0,0,1,.206.223.6.6,0,0,1,.4.063.561.561,0,0,1,.652,0Z" transform="translate(0.321 4.838)" fill="#fff"/>
                          <path id="Ellipse_101-2" data-name="Ellipse 101" d="M.654,0A.612.612,0,0,1,.913.06a.719.719,0,0,1,.219.158.821.821,0,0,1,.156.235A.856.856,0,0,1,1.36.742a.8.8,0,0,1-.032.289.7.7,0,0,1-.124.236.6.6,0,0,1-.2.16.564.564,0,0,1-.251.059A.612.612,0,0,1,.5,1.429a.72.72,0,0,1-.219-.158.821.821,0,0,1-.156-.235A.856.856,0,0,1,.05.748.8.8,0,0,1,.082.459.7.7,0,0,1,.206.223.6.6,0,0,1,.4.063.564.564,0,0,1,.654,0Z" transform="translate(3.041 4.823)" fill="#fff"/>
                          <path id="Ellipse_102-2" data-name="Ellipse 102" d="M.657,0a.615.615,0,0,1,.26.057.722.722,0,0,1,.22.158.822.822,0,0,1,.157.235.856.856,0,0,1,.071.289.8.8,0,0,1-.032.289.7.7,0,0,1-.125.237.6.6,0,0,1-.2.16.567.567,0,0,1-.252.059A.615.615,0,0,1,.5,1.432a.722.722,0,0,1-.22-.158.822.822,0,0,1-.157-.235A.856.856,0,0,1,.05.75.8.8,0,0,1,.082.46.7.7,0,0,1,.207.224a.6.6,0,0,1,.2-.16A.567.567,0,0,1,.657,0Z" transform="translate(5.772 4.809)" fill="#fff"/>
                          <path id="Ellipse_103-2" data-name="Ellipse 103" d="M.66,0A.618.618,0,0,1,.921.061a.724.724,0,0,1,.221.158A.823.823,0,0,1,1.3.455a.856.856,0,0,1,.071.29.8.8,0,0,1-.032.29.7.7,0,0,1-.126.237.606.606,0,0,1-.2.16.571.571,0,0,1-.253.06A.618.618,0,0,1,.5,1.435a.724.724,0,0,1-.22-.159A.823.823,0,0,1,.121,1.04.856.856,0,0,1,.05.751.8.8,0,0,1,.082.461.7.7,0,0,1,.208.224a.606.606,0,0,1,.2-.161A.571.571,0,0,1,.66,0Z" transform="translate(8.514 4.794)" fill="#fff"/>
                          <path id="Ellipse_104-2" data-name="Ellipse 104" d="M.662,0A.621.621,0,0,1,.924.061.726.726,0,0,1,1.146.22.824.824,0,0,1,1.3.456a.856.856,0,0,1,.071.29.8.8,0,0,1-.033.291.7.7,0,0,1-.126.238.609.609,0,0,1-.2.161.574.574,0,0,1-.254.06A.622.622,0,0,1,.5,1.438a.727.727,0,0,1-.221-.159.824.824,0,0,1-.158-.236A.856.856,0,0,1,.05.753.8.8,0,0,1,.082.462.7.7,0,0,1,.208.225a.609.609,0,0,1,.2-.161A.574.574,0,0,1,.662,0Z" transform="translate(11.268 4.779)" fill="#fff"/>
                          <path id="Ellipse_105-2" data-name="Ellipse 105" d="M.665,0A.625.625,0,0,1,.928.061.729.729,0,0,1,1.15.22a.825.825,0,0,1,.158.237A.856.856,0,0,1,1.38.748a.8.8,0,0,1-.033.291.7.7,0,0,1-.127.238.612.612,0,0,1-.2.161.578.578,0,0,1-.255.06A.625.625,0,0,1,.5,1.44a.729.729,0,0,1-.222-.159.825.825,0,0,1-.158-.237A.856.856,0,0,1,.05.754.8.8,0,0,1,.083.463.7.7,0,0,1,.209.225.612.612,0,0,1,.41.064.578.578,0,0,1,.665,0Z" transform="translate(14.032 4.764)" fill="#fff"/>
                          <path id="Ellipse_106-2" data-name="Ellipse 106" d="M.668,0A.628.628,0,0,1,.932.061.731.731,0,0,1,1.155.22a.826.826,0,0,1,.159.237.856.856,0,0,1,.072.291.8.8,0,0,1-.033.292.7.7,0,0,1-.128.239.614.614,0,0,1-.2.161.581.581,0,0,1-.256.06A.628.628,0,0,1,.5,1.443.731.731,0,0,1,.28,1.284a.826.826,0,0,1-.159-.237A.856.856,0,0,1,.049.756.8.8,0,0,1,.083.464.7.7,0,0,1,.21.225a.615.615,0,0,1,.2-.162A.581.581,0,0,1,.668,0Z" transform="translate(16.807 4.749)" fill="#fff"/>
                          <path id="Ellipse_107-2" data-name="Ellipse 107" d="M.652,0A.609.609,0,0,1,.909.059a.719.719,0,0,1,.218.158.822.822,0,0,1,.156.235A.856.856,0,0,1,1.355.74a.8.8,0,0,1-.032.288.693.693,0,0,1-.124.235.6.6,0,0,1-.2.159.56.56,0,0,1-.25.059A.609.609,0,0,1,.5,1.423a.719.719,0,0,1-.218-.158.822.822,0,0,1-.156-.234A.856.856,0,0,1,.051.744.8.8,0,0,1,.082.456.693.693,0,0,1,.206.22.6.6,0,0,1,.4.061.56.56,0,0,1,.652,0Z" transform="translate(0.482 7.182)" fill="#fff"/>
                          <path id="Ellipse_108-2" data-name="Ellipse 108" d="M.654,0A.612.612,0,0,1,.913.06a.721.721,0,0,1,.219.158.823.823,0,0,1,.156.235A.856.856,0,0,1,1.36.741a.8.8,0,0,1-.032.289.7.7,0,0,1-.124.236.6.6,0,0,1-.2.159.563.563,0,0,1-.251.059A.613.613,0,0,1,.5,1.426a.721.721,0,0,1-.219-.158.823.823,0,0,1-.156-.235A.856.856,0,0,1,.05.745.8.8,0,0,1,.082.457.7.7,0,0,1,.206.221.6.6,0,0,1,.4.062.563.563,0,0,1,.654,0Z" transform="translate(3.201 7.172)" fill="#fff"/>
                          <path id="Ellipse_109-2" data-name="Ellipse 109" d="M.652,0A.61.61,0,0,1,.909.059a.72.72,0,0,1,.218.158.823.823,0,0,1,.156.235.856.856,0,0,1,.071.288.8.8,0,0,1-.032.288.691.691,0,0,1-.124.235A.6.6,0,0,1,1,1.42a.56.56,0,0,1-.25.058A.61.61,0,0,1,.5,1.421a.72.72,0,0,1-.218-.158.823.823,0,0,1-.156-.235A.856.856,0,0,1,.051.741.8.8,0,0,1,.082.453.691.691,0,0,1,.206.218.6.6,0,0,1,.4.06.56.56,0,0,1,.652,0Z" transform="translate(0.642 9.524)" fill="#fff"/>
                          <path id="Ellipse_110-2" data-name="Ellipse 110" d="M.654,0A.613.613,0,0,1,.913.059a.723.723,0,0,1,.219.158.824.824,0,0,1,.156.235.856.856,0,0,1,.071.288.8.8,0,0,1-.032.288.692.692,0,0,1-.124.236.6.6,0,0,1-.2.159.563.563,0,0,1-.251.058A.613.613,0,0,1,.5,1.424a.723.723,0,0,1-.219-.158A.824.824,0,0,1,.121,1.03.856.856,0,0,1,.05.742.8.8,0,0,1,.082.454.693.693,0,0,1,.206.219.6.6,0,0,1,.4.06.563.563,0,0,1,.654,0Z" transform="translate(3.361 9.518)" fill="#fff"/>
                          <path id="Ellipse_111-2" data-name="Ellipse 111" d="M.657,0a.616.616,0,0,1,.26.058.725.725,0,0,1,.22.159.825.825,0,0,1,.157.236.856.856,0,0,1,.071.289.8.8,0,0,1-.032.289.694.694,0,0,1-.125.236.6.6,0,0,1-.2.159.566.566,0,0,1-.252.059A.617.617,0,0,1,.5,1.427a.725.725,0,0,1-.219-.159.825.825,0,0,1-.157-.235A.856.856,0,0,1,.05.744.8.8,0,0,1,.082.455.694.694,0,0,1,.207.219.6.6,0,0,1,.4.06.566.566,0,0,1,.657,0Z" transform="translate(6.091 9.513)" fill="#fff"/>
                          <path id="Ellipse_112-2" data-name="Ellipse 112" d="M.657,0A.616.616,0,0,1,.917.06a.723.723,0,0,1,.22.158.823.823,0,0,1,.157.236.856.856,0,0,1,.071.289.8.8,0,0,1-.032.289.7.7,0,0,1-.125.236.6.6,0,0,1-.2.16.567.567,0,0,1-.252.059A.616.616,0,0,1,.5,1.429a.724.724,0,0,1-.22-.158.824.824,0,0,1-.157-.235A.856.856,0,0,1,.05.746.8.8,0,0,1,.082.458.7.7,0,0,1,.207.221a.6.6,0,0,1,.2-.16A.567.567,0,0,1,.657,0Z" transform="translate(5.932 7.162)" fill="#fff"/>
                          <path id="Ellipse_113-2" data-name="Ellipse 113" d="M.66,0A.619.619,0,0,1,.92.06a.726.726,0,0,1,.221.159A.824.824,0,0,1,1.3.455.856.856,0,0,1,1.37.744a.8.8,0,0,1-.032.29.7.7,0,0,1-.126.237.6.6,0,0,1-.2.16A.57.57,0,0,1,.76,1.49.619.619,0,0,1,.5,1.432a.726.726,0,0,1-.22-.159.824.824,0,0,1-.157-.236A.856.856,0,0,1,.05.748.8.8,0,0,1,.082.459.7.7,0,0,1,.208.222a.6.6,0,0,1,.2-.16A.57.57,0,0,1,.66,0Z" transform="translate(8.673 7.152)" fill="#fff"/>
                          <path id="Ellipse_114-2" data-name="Ellipse 114" d="M.662,0A.622.622,0,0,1,.924.06a.728.728,0,0,1,.221.159A.825.825,0,0,1,1.3.456a.856.856,0,0,1,.071.29.8.8,0,0,1-.033.29.7.7,0,0,1-.126.237.607.607,0,0,1-.2.16.574.574,0,0,1-.254.059A.622.622,0,0,1,.5,1.435a.728.728,0,0,1-.221-.159A.825.825,0,0,1,.121,1.04.856.856,0,0,1,.05.75.8.8,0,0,1,.082.46.7.7,0,0,1,.208.222a.607.607,0,0,1,.2-.16A.574.574,0,0,1,.662,0Z" transform="translate(11.425 7.142)" fill="#fff"/>
                          <path id="Ellipse_115-2" data-name="Ellipse 115" d="M.665,0A.626.626,0,0,1,.928.06.73.73,0,0,1,1.15.219a.826.826,0,0,1,.158.237A.856.856,0,0,1,1.38.747a.8.8,0,0,1-.033.291.7.7,0,0,1-.127.238.61.61,0,0,1-.2.161A.577.577,0,0,1,.764,1.5.626.626,0,0,1,.5,1.438a.73.73,0,0,1-.222-.159.826.826,0,0,1-.158-.237A.856.856,0,0,1,.05.751.8.8,0,0,1,.083.461.7.7,0,0,1,.209.223.61.61,0,0,1,.41.062.577.577,0,0,1,.665,0Z" transform="translate(14.189 7.131)" fill="#fff"/>
                          <path id="Ellipse_116-2" data-name="Ellipse 116" d="M.668,0A.629.629,0,0,1,.931.06a.733.733,0,0,1,.223.16.827.827,0,0,1,.159.237.856.856,0,0,1,.072.291.8.8,0,0,1-.033.292.7.7,0,0,1-.128.238.613.613,0,0,1-.2.161A.581.581,0,0,1,.766,1.5.629.629,0,0,1,.5,1.441a.733.733,0,0,1-.223-.16.827.827,0,0,1-.159-.237A.856.856,0,0,1,.049.753.8.8,0,0,1,.083.462.7.7,0,0,1,.21.223a.613.613,0,0,1,.2-.161A.581.581,0,0,1,.668,0Z" transform="translate(16.964 7.121)" fill="#fff"/>
                        </g>
                        <path id="Path_131-2" data-name="Path 131" d="M4.094,8.089a3.355,3.355,0,0,1-1.4-.342,4.025,4.025,0,0,1-1.182-.881A4.593,4.593,0,0,1,.669,5.578,4.717,4.717,0,0,1,.282,4.013,4.32,4.32,0,0,1,.449,2.456,3.673,3.673,0,0,1,1.115,1.19,3.146,3.146,0,0,1,2.177.345a3,3,0,0,1,1.355-.3,3.349,3.349,0,0,1,1.4.335,4.017,4.017,0,0,1,1.189.879,4.593,4.593,0,0,1,.851,1.293,4.72,4.72,0,0,1,.388,1.574,4.322,4.322,0,0,1-.172,1.563,3.672,3.672,0,0,1-.673,1.266A3.145,3.145,0,0,1,5.45,7.8,3,3,0,0,1,4.094,8.089ZM3.549.275A2.83,2.83,0,0,0,2.27.556a2.968,2.968,0,0,0-1,.8A3.464,3.464,0,0,0,.64,2.547,4.078,4.078,0,0,0,.482,4.016,4.453,4.453,0,0,0,.847,5.493a4.334,4.334,0,0,0,.8,1.215,3.8,3.8,0,0,0,1.115.831,3.167,3.167,0,0,0,1.319.322,2.832,2.832,0,0,0,1.28-.273,2.961,2.961,0,0,0,1.008-.793A3.459,3.459,0,0,0,7,5.6a4.073,4.073,0,0,0,.161-1.475,4.457,4.457,0,0,0-.367-1.484,4.333,4.333,0,0,0-.8-1.219A3.8,3.8,0,0,0,4.871.593,3.164,3.164,0,0,0,3.549.275Z" transform="translate(62.3 58.258)" fill="#ffa64b"/>
                        <path id="Path_132-2" data-name="Path 132" d="M3.161,1.589,2.142,1.573,2.061.416a.451.451,0,0,0-.037-.15A.44.44,0,0,0,1.943.142.385.385,0,0,0,1.829.057.321.321,0,0,0,1.695.025a.287.287,0,0,0-.13.028.3.3,0,0,0-.1.081A.353.353,0,0,0,1.4.256a.414.414,0,0,0-.016.15l.081,1.156L.447,1.546a.286.286,0,0,0-.13.028.3.3,0,0,0-.1.081.351.351,0,0,0-.064.121.413.413,0,0,0-.016.149.451.451,0,0,0,.037.15A.44.44,0,0,0,.253,2.2a.386.386,0,0,0,.113.084A.321.321,0,0,0,.5,2.316l1.017.017L1.6,3.488a.451.451,0,0,0,.037.15.44.44,0,0,0,.081.124.386.386,0,0,0,.114.084.321.321,0,0,0,.134.033.288.288,0,0,0,.13-.028.3.3,0,0,0,.1-.081.351.351,0,0,0,.064-.121A.412.412,0,0,0,2.277,3.5L2.2,2.344l1.019.017a.288.288,0,0,0,.13-.028.3.3,0,0,0,.1-.081.351.351,0,0,0,.064-.121.413.413,0,0,0,.016-.15.452.452,0,0,0-.037-.151.44.44,0,0,0-.082-.124A.385.385,0,0,0,3.3,1.622a.321.321,0,0,0-.134-.032Z" transform="translate(64.284 60.375)" fill="#fff"/>
                        <g id="Group_23-2" data-name="Group 23" transform="translate(6.61 50.88)" opacity="0.4">
                          <path id="Ellipse_117-2" data-name="Ellipse 117" d="M.461.009A.426.426,0,0,1,.645.055.537.537,0,0,1,.8.175.64.64,0,0,1,.913.351.672.672,0,0,1,.966.565a.61.61,0,0,1-.02.212A.5.5,0,0,1,.861.95a.4.4,0,0,1-.138.114A.374.374,0,0,1,.548,1.1a.426.426,0,0,1-.183-.047A.537.537,0,0,1,.209.937.64.64,0,0,1,.1.761.672.672,0,0,1,.043.547.611.611,0,0,1,.063.335.5.5,0,0,1,.148.163.4.4,0,0,1,.285.048.374.374,0,0,1,.461.009Z" transform="translate(1.079 13.712)" fill="#fff"/>
                          <path id="Ellipse_118-2" data-name="Ellipse 118" d="M.462.008A.425.425,0,0,1,.645.054.536.536,0,0,1,.8.174.639.639,0,0,1,.913.35.672.672,0,0,1,.966.564a.612.612,0,0,1-.02.213A.5.5,0,0,1,.862.949a.406.406,0,0,1-.138.115.374.374,0,0,1-.176.04.426.426,0,0,1-.183-.046A.536.536,0,0,1,.209.937.639.639,0,0,1,.1.762.672.672,0,0,1,.043.548.612.612,0,0,1,.063.335.5.5,0,0,1,.148.163.406.406,0,0,1,.285.048.374.374,0,0,1,.462.008Z" transform="translate(0.9 11.431)" fill="#fff"/>
                          <path id="Ellipse_119-2" data-name="Ellipse 119" d="M.462.007A.425.425,0,0,1,.645.053.535.535,0,0,1,.8.172.638.638,0,0,1,.914.348.672.672,0,0,1,.967.562a.613.613,0,0,1-.02.213A.5.5,0,0,1,.862.948a.407.407,0,0,1-.138.115.374.374,0,0,1-.176.04.425.425,0,0,1-.183-.046A.535.535,0,0,1,.209.938.638.638,0,0,1,.1.762.672.672,0,0,1,.043.548.613.613,0,0,1,.063.335.5.5,0,0,1,.148.162.407.407,0,0,1,.285.047.374.374,0,0,1,.462.007Z" transform="translate(0.72 9.148)" fill="#fff"/>
                          <path id="Ellipse_120-2" data-name="Ellipse 120" d="M.462.006A.424.424,0,0,1,.645.052.533.533,0,0,1,.8.172.638.638,0,0,1,.914.347.672.672,0,0,1,.967.561a.614.614,0,0,1-.02.213A.5.5,0,0,1,.862.948a.408.408,0,0,1-.138.115A.375.375,0,0,1,.548,1.1a.424.424,0,0,1-.183-.046A.534.534,0,0,1,.209.938.638.638,0,0,1,.1.763.672.672,0,0,1,.043.549.614.614,0,0,1,.063.336.5.5,0,0,1,.148.163.408.408,0,0,1,.285.047.375.375,0,0,1,.462.006Z" transform="translate(0.54 6.863)" fill="#fff"/>
                          <path id="Ellipse_121-2" data-name="Ellipse 121" d="M.462.005A.423.423,0,0,1,.645.05.532.532,0,0,1,.8.17.637.637,0,0,1,.914.346.673.673,0,0,1,.967.56a.615.615,0,0,1-.02.213A.505.505,0,0,1,.862.946a.409.409,0,0,1-.138.116A.375.375,0,0,1,.548,1.1a.424.424,0,0,1-.183-.045A.532.532,0,0,1,.209.938.637.637,0,0,1,.1.763.673.673,0,0,1,.043.549.615.615,0,0,1,.063.335.505.505,0,0,1,.148.162.41.41,0,0,1,.285.046.375.375,0,0,1,.462.005Z" transform="translate(0.36 4.577)" fill="#fff"/>
                          <path id="Ellipse_122-2" data-name="Ellipse 122" d="M.462,0A.423.423,0,0,1,.645.05.531.531,0,0,1,.8.169.636.636,0,0,1,.914.345.673.673,0,0,1,.967.559a.616.616,0,0,1-.02.214A.507.507,0,0,1,.862.946a.411.411,0,0,1-.138.116A.375.375,0,0,1,.548,1.1a.423.423,0,0,1-.183-.045A.531.531,0,0,1,.209.939.636.636,0,0,1,.1.763.673.673,0,0,1,.043.549.616.616,0,0,1,.063.336.507.507,0,0,1,.148.162.411.411,0,0,1,.285.046.375.375,0,0,1,.462,0Z" transform="translate(0.18 2.289)" fill="#fff"/>
                          <path id="Ellipse_123-2" data-name="Ellipse 123" d="M.462,0A.422.422,0,0,1,.645.048.53.53,0,0,1,.8.167.635.635,0,0,1,.914.343.673.673,0,0,1,.968.557a.617.617,0,0,1-.02.214A.508.508,0,0,1,.863.945a.412.412,0,0,1-.138.117A.376.376,0,0,1,.548,1.1a.422.422,0,0,1-.183-.045A.53.53,0,0,1,.209.939.635.635,0,0,1,.1.764.673.673,0,0,1,.043.549.618.618,0,0,1,.063.336.509.509,0,0,1,.148.162.412.412,0,0,1,.286.045.376.376,0,0,1,.462,0Z" fill="#fff"/>
                          <path id="Ellipse_124-2" data-name="Ellipse 124" d="M.462.009A.427.427,0,0,1,.646.055.538.538,0,0,1,.8.175.641.641,0,0,1,.915.352.672.672,0,0,1,.968.566a.611.611,0,0,1-.02.213A.5.5,0,0,1,.863.951a.406.406,0,0,1-.138.115.375.375,0,0,1-.177.04.427.427,0,0,1-.183-.047A.538.538,0,0,1,.209.938.641.641,0,0,1,.1.762.672.672,0,0,1,.043.548.611.611,0,0,1,.063.335.5.5,0,0,1,.148.163.406.406,0,0,1,.286.048.375.375,0,0,1,.462.009Z" transform="translate(2.541 13.74)" fill="#fff"/>
                          <path id="Ellipse_125-2" data-name="Ellipse 125" d="M.463.008A.427.427,0,0,1,.646.054.537.537,0,0,1,.8.174.64.64,0,0,1,.915.35.672.672,0,0,1,.968.565a.612.612,0,0,1-.02.213A.5.5,0,0,1,.863.95a.407.407,0,0,1-.138.115.375.375,0,0,1-.177.04.427.427,0,0,1-.183-.046A.537.537,0,0,1,.209.939.64.64,0,0,1,.1.763.672.672,0,0,1,.043.548.612.612,0,0,1,.063.336.5.5,0,0,1,.148.163.407.407,0,0,1,.286.048.375.375,0,0,1,.463.008Z" transform="translate(2.362 11.456)" fill="#fff"/>
                          <path id="Ellipse_126-2" data-name="Ellipse 126" d="M.463.007A.426.426,0,0,1,.646.053.535.535,0,0,1,.8.173.639.639,0,0,1,.916.349.672.672,0,0,1,.969.563a.613.613,0,0,1-.02.213A.5.5,0,0,1,.863.949a.408.408,0,0,1-.138.115.376.376,0,0,1-.177.04.426.426,0,0,1-.183-.046A.536.536,0,0,1,.209.939.639.639,0,0,1,.1.763.672.672,0,0,1,.043.549.613.613,0,0,1,.063.336.5.5,0,0,1,.148.163.408.408,0,0,1,.286.047.376.376,0,0,1,.463.007Z" transform="translate(2.183 9.17)" fill="#fff"/>
                          <path id="Ellipse_127-2" data-name="Ellipse 127" d="M.463.006A.425.425,0,0,1,.646.052.534.534,0,0,1,.8.172.638.638,0,0,1,.916.348.672.672,0,0,1,.969.562a.614.614,0,0,1-.02.213A.5.5,0,0,1,.864.949a.409.409,0,0,1-.138.116A.376.376,0,0,1,.549,1.1a.426.426,0,0,1-.184-.046A.534.534,0,0,1,.209.939.638.638,0,0,1,.1.763.672.672,0,0,1,.043.549.614.614,0,0,1,.063.336.5.5,0,0,1,.148.163.409.409,0,0,1,.286.047.376.376,0,0,1,.463.006Z" transform="translate(2.003 6.883)" fill="#fff"/>
                          <path id="Ellipse_128-2" data-name="Ellipse 128" d="M.463.005A.425.425,0,0,1,.647.051.533.533,0,0,1,.8.17.637.637,0,0,1,.916.346.673.673,0,0,1,.969.561a.615.615,0,0,1-.02.214A.506.506,0,0,1,.864.948a.41.41,0,0,1-.138.116A.376.376,0,0,1,.549,1.1a.425.425,0,0,1-.184-.045A.533.533,0,0,1,.209.939.637.637,0,0,1,.1.764.673.673,0,0,1,.043.549.615.615,0,0,1,.063.336.506.506,0,0,1,.148.162.411.411,0,0,1,.286.046.376.376,0,0,1,.463.005Z" transform="translate(1.824 4.594)" fill="#fff"/>
                          <path id="Ellipse_129-2" data-name="Ellipse 129" d="M.463,0A.424.424,0,0,1,.647.05.532.532,0,0,1,.8.169.636.636,0,0,1,.916.345.673.673,0,0,1,.969.559.616.616,0,0,1,.95.773.507.507,0,0,1,.864.947a.412.412,0,0,1-.138.116A.377.377,0,0,1,.549,1.1a.424.424,0,0,1-.184-.045A.532.532,0,0,1,.209.94.636.636,0,0,1,.1.764.673.673,0,0,1,.043.55.616.616,0,0,1,.063.336.507.507,0,0,1,.148.162.412.412,0,0,1,.286.046.377.377,0,0,1,.463,0Z" transform="translate(1.644 2.304)" fill="#fff"/>
                          <path id="Ellipse_130-2" data-name="Ellipse 130" d="M.463,0A.423.423,0,0,1,.647.049.531.531,0,0,1,.8.168.635.635,0,0,1,.916.344.673.673,0,0,1,.97.558.618.618,0,0,1,.95.772.509.509,0,0,1,.864.946a.413.413,0,0,1-.138.117A.377.377,0,0,1,.549,1.1.424.424,0,0,1,.366,1.06.531.531,0,0,1,.209.94.635.635,0,0,1,.1.765.673.673,0,0,1,.043.55.618.618,0,0,1,.063.336.509.509,0,0,1,.148.162.413.413,0,0,1,.286.046.377.377,0,0,1,.463,0Z" transform="translate(1.464 0.012)" fill="#fff"/>
                          <path id="Ellipse_131-2" data-name="Ellipse 131" d="M.463.009A.429.429,0,0,1,.647.055.539.539,0,0,1,.8.176.641.641,0,0,1,.917.352.672.672,0,0,1,.97.566.611.611,0,0,1,.95.779.5.5,0,0,1,.865.952a.407.407,0,0,1-.138.115.376.376,0,0,1-.177.04.429.429,0,0,1-.184-.047A.539.539,0,0,1,.209.939.641.641,0,0,1,.1.763.672.672,0,0,1,.043.549.611.611,0,0,1,.063.336.5.5,0,0,1,.148.163.407.407,0,0,1,.286.048.376.376,0,0,1,.463.009Z" transform="translate(4.007 13.767)" fill="#fff"/>
                          <path id="Ellipse_132-2" data-name="Ellipse 132" d="M.464.008A.428.428,0,0,1,.648.054.538.538,0,0,1,.8.174.64.64,0,0,1,.917.351.672.672,0,0,1,.97.565a.612.612,0,0,1-.02.213A.5.5,0,0,1,.865.951a.408.408,0,0,1-.138.115.377.377,0,0,1-.177.04A.428.428,0,0,1,.366,1.06.538.538,0,0,1,.209.939.64.64,0,0,1,.1.763.672.672,0,0,1,.043.549.612.612,0,0,1,.063.336.5.5,0,0,1,.148.163.408.408,0,0,1,.287.048.377.377,0,0,1,.464.008Z" transform="translate(3.828 11.481)" fill="#fff"/>
                          <path id="Ellipse_133-2" data-name="Ellipse 133" d="M.464.007A.427.427,0,0,1,.648.053.536.536,0,0,1,.8.173.639.639,0,0,1,.918.349.672.672,0,0,1,.971.564a.613.613,0,0,1-.02.213A.5.5,0,0,1,.865.95a.409.409,0,0,1-.138.115.377.377,0,0,1-.177.04A.427.427,0,0,1,.366,1.06.537.537,0,0,1,.209.94.639.639,0,0,1,.1.764.672.672,0,0,1,.043.549.613.613,0,0,1,.063.336.5.5,0,0,1,.148.163.409.409,0,0,1,.287.047.377.377,0,0,1,.464.007Z" transform="translate(3.649 9.193)" fill="#fff"/>
                          <path id="Ellipse_134-2" data-name="Ellipse 134" d="M.464.006A.427.427,0,0,1,.648.052.535.535,0,0,1,.8.172.638.638,0,0,1,.918.348.672.672,0,0,1,.971.563a.614.614,0,0,1-.02.214A.5.5,0,0,1,.865.95a.41.41,0,0,1-.138.116.377.377,0,0,1-.177.041A.427.427,0,0,1,.366,1.06.535.535,0,0,1,.209.94.638.638,0,0,1,.1.764.672.672,0,0,1,.043.55.614.614,0,0,1,.063.336.5.5,0,0,1,.148.163.41.41,0,0,1,.287.047.377.377,0,0,1,.464.006Z" transform="translate(3.47 6.903)" fill="#fff"/>
                          <path id="Ellipse_135-2" data-name="Ellipse 135" d="M.464.006A.426.426,0,0,1,.648.051.534.534,0,0,1,.8.171.637.637,0,0,1,.918.347.673.673,0,0,1,.971.562a.615.615,0,0,1-.02.214A.506.506,0,0,1,.866.949a.411.411,0,0,1-.138.116.378.378,0,0,1-.177.041.426.426,0,0,1-.184-.046A.534.534,0,0,1,.209.941.637.637,0,0,1,.1.765.673.673,0,0,1,.043.55.615.615,0,0,1,.063.337.506.506,0,0,1,.148.163.412.412,0,0,1,.287.047.378.378,0,0,1,.464.006Z" transform="translate(3.291 4.611)" fill="#fff"/>
                          <path id="Ellipse_136-2" data-name="Ellipse 136" d="M.464,0A.425.425,0,0,1,.648.05.533.533,0,0,1,.8.169.636.636,0,0,1,.918.345.673.673,0,0,1,.971.56a.616.616,0,0,1-.02.214A.508.508,0,0,1,.866.948a.413.413,0,0,1-.138.116.378.378,0,0,1-.177.041.426.426,0,0,1-.184-.045A.533.533,0,0,1,.209.941.636.636,0,0,1,.1.765.673.673,0,0,1,.043.55.617.617,0,0,1,.063.337.508.508,0,0,1,.148.163.413.413,0,0,1,.287.046.378.378,0,0,1,.464,0Z" transform="translate(3.111 2.318)" fill="#fff"/>
                          <path id="Ellipse_137-2" data-name="Ellipse 137" d="M.464,0A.425.425,0,0,1,.648.049.532.532,0,0,1,.805.168.635.635,0,0,1,.918.344.673.673,0,0,1,.972.559a.618.618,0,0,1-.02.214A.509.509,0,0,1,.866.947a.414.414,0,0,1-.138.117.378.378,0,0,1-.177.042.425.425,0,0,1-.184-.045A.532.532,0,0,1,.209.942.636.636,0,0,1,.1.766.673.673,0,0,1,.043.551.618.618,0,0,1,.063.337.51.51,0,0,1,.148.163.414.414,0,0,1,.287.046.378.378,0,0,1,.464,0Z" transform="translate(2.932 0.024)" fill="#fff"/>
                          <path id="Ellipse_138-2" data-name="Ellipse 138" d="M.465.009A.43.43,0,0,1,.649.055.54.54,0,0,1,.806.176.641.641,0,0,1,.919.352.672.672,0,0,1,.972.567.611.611,0,0,1,.952.78.5.5,0,0,1,.866.953a.408.408,0,0,1-.139.115.378.378,0,0,1-.178.04.43.43,0,0,1-.184-.047A.54.54,0,0,1,.209.94.641.641,0,0,1,.1.764.672.672,0,0,1,.043.549.611.611,0,0,1,.063.336.5.5,0,0,1,.149.163.408.408,0,0,1,.287.048.378.378,0,0,1,.465.009Z" transform="translate(5.476 13.795)" fill="#fff"/>
                          <path id="Ellipse_139-2" data-name="Ellipse 139" d="M.465.008A.429.429,0,0,1,.649.054a.539.539,0,0,1,.157.12A.641.641,0,0,1,.919.351.672.672,0,0,1,.972.566a.612.612,0,0,1-.02.213A.5.5,0,0,1,.867.952a.409.409,0,0,1-.139.115.378.378,0,0,1-.178.04.429.429,0,0,1-.184-.046A.539.539,0,0,1,.209.941.641.641,0,0,1,.1.764.672.672,0,0,1,.043.55.612.612,0,0,1,.063.336.5.5,0,0,1,.149.163.409.409,0,0,1,.287.048.378.378,0,0,1,.465.008Z" transform="translate(5.297 11.506)" fill="#fff"/>
                          <path id="Ellipse_140-2" data-name="Ellipse 140" d="M.466.009A.431.431,0,0,1,.65.055.541.541,0,0,1,.808.176.642.642,0,0,1,.921.353.672.672,0,0,1,.974.568a.611.611,0,0,1-.02.213A.5.5,0,0,1,.868.954a.409.409,0,0,1-.139.115.379.379,0,0,1-.178.04.431.431,0,0,1-.185-.047A.541.541,0,0,1,.209.941.642.642,0,0,1,.1.765.672.672,0,0,1,.043.55.611.611,0,0,1,.063.337.5.5,0,0,1,.149.164.409.409,0,0,1,.288.049.379.379,0,0,1,.466.009Z" transform="translate(6.948 13.823)" fill="#fff"/>
                          <path id="Ellipse_141-2" data-name="Ellipse 141" d="M.466.008A.431.431,0,0,1,.651.054.539.539,0,0,1,.808.175.641.641,0,0,1,.921.351.672.672,0,0,1,.975.566.612.612,0,0,1,.955.78.5.5,0,0,1,.868.953a.41.41,0,0,1-.139.115.379.379,0,0,1-.178.04.431.431,0,0,1-.185-.046A.54.54,0,0,1,.209.942.641.641,0,0,1,.1.765.672.672,0,0,1,.043.55.612.612,0,0,1,.063.337.5.5,0,0,1,.149.163.41.41,0,0,1,.288.048.379.379,0,0,1,.466.008Z" transform="translate(6.77 11.531)" fill="#fff"/>
                          <path id="Ellipse_142-2" data-name="Ellipse 142" d="M.466.007A.43.43,0,0,1,.651.053a.538.538,0,0,1,.157.12A.64.64,0,0,1,.921.35.672.672,0,0,1,.975.565a.613.613,0,0,1-.02.214A.5.5,0,0,1,.868.953a.411.411,0,0,1-.139.116.38.38,0,0,1-.178.04.43.43,0,0,1-.185-.046A.538.538,0,0,1,.21.942.64.64,0,0,1,.1.765.672.672,0,0,1,.043.551.613.613,0,0,1,.063.337.5.5,0,0,1,.149.163.411.411,0,0,1,.288.048.38.38,0,0,1,.466.007Z" transform="translate(6.591 9.238)" fill="#fff"/>
                          <path id="Ellipse_143-2" data-name="Ellipse 143" d="M.465.007A.429.429,0,0,1,.649.053a.537.537,0,0,1,.157.12A.64.64,0,0,1,.919.35.672.672,0,0,1,.973.564a.613.613,0,0,1-.02.214A.5.5,0,0,1,.867.951a.41.41,0,0,1-.139.116.378.378,0,0,1-.178.04.429.429,0,0,1-.184-.046A.537.537,0,0,1,.209.941.64.64,0,0,1,.1.764.672.672,0,0,1,.043.55.613.613,0,0,1,.063.336.5.5,0,0,1,.149.163.41.41,0,0,1,.287.047.378.378,0,0,1,.465.007Z" transform="translate(5.119 9.215)" fill="#fff"/>
                          <path id="Ellipse_144-2" data-name="Ellipse 144" d="M.465.006A.428.428,0,0,1,.649.052a.536.536,0,0,1,.157.12A.639.639,0,0,1,.92.348.672.672,0,0,1,.973.563a.614.614,0,0,1-.02.214A.505.505,0,0,1,.867.951a.411.411,0,0,1-.139.116.379.379,0,0,1-.178.041.428.428,0,0,1-.184-.046A.536.536,0,0,1,.209.941.639.639,0,0,1,.1.765.672.672,0,0,1,.043.55.614.614,0,0,1,.063.336.505.505,0,0,1,.149.163.411.411,0,0,1,.287.047.379.379,0,0,1,.465.006Z" transform="translate(4.94 6.923)" fill="#fff"/>
                          <path id="Ellipse_145-2" data-name="Ellipse 145" d="M.465.006A.427.427,0,0,1,.649.051a.535.535,0,0,1,.157.12A.638.638,0,0,1,.92.347.673.673,0,0,1,.973.562a.615.615,0,0,1-.02.214A.507.507,0,0,1,.867.95a.412.412,0,0,1-.139.116.379.379,0,0,1-.178.041.427.427,0,0,1-.184-.046A.535.535,0,0,1,.21.942.638.638,0,0,1,.1.766.673.673,0,0,1,.043.551.615.615,0,0,1,.063.337.507.507,0,0,1,.149.163.413.413,0,0,1,.287.047.379.379,0,0,1,.465.006Z" transform="translate(4.761 4.629)" fill="#fff"/>
                          <path id="Ellipse_146-2" data-name="Ellipse 146" d="M.465,0A.427.427,0,0,1,.65.05a.534.534,0,0,1,.157.12A.637.637,0,0,1,.92.346.673.673,0,0,1,.973.561a.617.617,0,0,1-.02.214A.508.508,0,0,1,.867.949a.414.414,0,0,1-.139.117.379.379,0,0,1-.178.041.427.427,0,0,1-.184-.045A.534.534,0,0,1,.21.942.637.637,0,0,1,.1.766.673.673,0,0,1,.043.551.617.617,0,0,1,.063.337.509.509,0,0,1,.149.163.414.414,0,0,1,.287.046.379.379,0,0,1,.465,0Z" transform="translate(4.582 2.333)" fill="#fff"/>
                          <path id="Ellipse_147-2" data-name="Ellipse 147" d="M.465,0A.426.426,0,0,1,.65.049.533.533,0,0,1,.807.168.636.636,0,0,1,.92.344.673.673,0,0,1,.974.56a.618.618,0,0,1-.02.214A.51.51,0,0,1,.868.949a.415.415,0,0,1-.139.117.38.38,0,0,1-.178.042.426.426,0,0,1-.184-.045A.533.533,0,0,1,.21.943.636.636,0,0,1,.1.767.673.673,0,0,1,.043.552.618.618,0,0,1,.063.337.51.51,0,0,1,.149.163.415.415,0,0,1,.287.046.38.38,0,0,1,.465,0Z" transform="translate(4.402 0.036)" fill="#fff"/>
                        </g>
                        <path id="Path_133-2" data-name="Path 133" d="M32.655.014.58.748a.482.482,0,0,0-.221.06A.544.544,0,0,0,.185.96a.666.666,0,0,0-.107.222.786.786,0,0,0-.025.269L2.5,33.142a.828.828,0,0,0,.066.266.781.781,0,0,0,.141.217.656.656,0,0,0,.195.147.529.529,0,0,0,.229.054L35.1,33.91a.51.51,0,0,0,.232-.055.549.549,0,0,0,.182-.15.652.652,0,0,0,.114-.222.769.769,0,0,0,.028-.273L33.315.708a.831.831,0,0,0-.068-.274A.775.775,0,0,0,33.1.212a.66.66,0,0,0-.2-.147A.553.553,0,0,0,32.655.014Zm2.763,33.2a.461.461,0,0,1-.017.164.393.393,0,0,1-.068.134.329.329,0,0,1-.109.09.306.306,0,0,1-.139.033L3.109,33.554a.316.316,0,0,1-.137-.033.393.393,0,0,1-.117-.088A.469.469,0,0,1,2.77,33.3a.5.5,0,0,1-.039-.16L.285,1.446A.471.471,0,0,1,.3,1.284a.4.4,0,0,1,.064-.133.326.326,0,0,1,.1-.091A.289.289,0,0,1,.6,1.023L32.675.3a.333.333,0,0,1,.145.031.4.4,0,0,1,.123.089.467.467,0,0,1,.088.133.5.5,0,0,1,.041.165Z" transform="translate(13.546 9.857)" fill="#ffa64b"/>
                        <path id="Path_134-2" data-name="Path 134" d="M4.96,2.8q0,.018,0,.037c0,.012,0,.024,0,.037s0,.024,0,.036,0,.024,0,.036a3.082,3.082,0,0,1-.142,1.043,2.575,2.575,0,0,1-.453.843,2.132,2.132,0,0,1-.7.563,1.959,1.959,0,0,1-.878.2A2.159,2.159,0,0,1,1.888,5.4a2.643,2.643,0,0,1-.781-.562A3.138,3.138,0,0,1,.528,4a3.374,3.374,0,0,1-.3-1.039l0-.036,0-.036,0-.036,0-.037a3.134,3.134,0,0,1,.1-1.088A2.625,2.625,0,0,1,.756.835a2.153,2.153,0,0,1,.707-.6A1.959,1.959,0,0,1,2.369.009,2.161,2.161,0,0,1,3.31.226a2.666,2.666,0,0,1,.8.6,3.172,3.172,0,0,1,.578.89A3.374,3.374,0,0,1,4.96,2.8Z" transform="translate(18.53 35.253)" fill="#fff"/>
                        <path id="Path_135-2" data-name="Path 135" d="M20.585.011.421.531A.361.361,0,0,0,.26.574.4.4,0,0,0,.133.681.469.469,0,0,0,.054.838a.538.538,0,0,0-.02.19.563.563,0,0,0,.046.188.528.528,0,0,0,.1.152.453.453,0,0,0,.141.1A.384.384,0,0,0,.49,1.5L20.651,1a.379.379,0,0,0,.166-.043.412.412,0,0,0,.131-.109.476.476,0,0,0,.083-.159.541.541,0,0,0,.021-.193A.565.565,0,0,0,21.006.3a.532.532,0,0,0-.1-.154.463.463,0,0,0-.145-.1A.4.4,0,0,0,20.585.011Z" transform="translate(58.301 5.113)" fill="#ffa64b"/>
                        <path id="Path_136-2" data-name="Path 136" d="M9.021.01l-8.6.2A.361.361,0,0,0,.26.256.4.4,0,0,0,.133.363.466.466,0,0,0,.054.519a.537.537,0,0,0-.02.189A.562.562,0,0,0,.08.9a.527.527,0,0,0,.1.152.453.453,0,0,0,.141.1.384.384,0,0,0,.166.034l8.6-.2A.368.368,0,0,0,9.251.943.4.4,0,0,0,9.38.836.47.47,0,0,0,9.46.678a.537.537,0,0,0,.02-.191A.562.562,0,0,0,9.434.3a.529.529,0,0,0-.1-.153.457.457,0,0,0-.143-.1A.39.39,0,0,0,9.021.01Z" transform="translate(58.507 8.342)" fill="#2e3346"/>
                        <path id="Path_137-2" data-name="Path 137" d="M36.355,19.358l-34.166.521a.783.783,0,0,1-.337-.072.931.931,0,0,1-.286-.206,1.082,1.082,0,0,1-.2-.309,1.148,1.148,0,0,1-.094-.381L.07,2.043a1.1,1.1,0,0,1,.04-.386.96.96,0,0,1,.161-.319.812.812,0,0,1,.256-.22A.734.734,0,0,1,.854,1.03l34.231-1a.83.83,0,0,1,.355.07.954.954,0,0,1,.3.209,1.084,1.084,0,0,1,.214.316,1.148,1.148,0,0,1,.1.392l1.135,17.322a1.09,1.09,0,0,1-.045.393.962.962,0,0,1-.172.323.84.84,0,0,1-.271.22A.786.786,0,0,1,36.355,19.358ZM.879,1.377a.476.476,0,0,0-.212.057A.526.526,0,0,0,.5,1.576a.623.623,0,0,0-.1.207.714.714,0,0,0-.026.251l1.2,16.87a.745.745,0,0,0,.061.247.7.7,0,0,0,.133.2.6.6,0,0,0,.186.134.509.509,0,0,0,.219.047L36.332,19a.511.511,0,0,0,.223-.055.545.545,0,0,0,.176-.143.626.626,0,0,0,.111-.21.707.707,0,0,0,.029-.255L35.736,1.023a.745.745,0,0,0-.063-.255.7.7,0,0,0-.139-.205.619.619,0,0,0-.195-.136.539.539,0,0,0-.231-.045Z" transform="translate(54.459)" fill="#2e3346"/>
                        <path id="Path_138-2" data-name="Path 138" d="M.424.512A.364.364,0,0,0,.261.554.4.4,0,0,0,.134.662a.469.469,0,0,0-.08.157.537.537,0,0,0-.02.19A.563.563,0,0,0,.08,1.2a.528.528,0,0,0,.1.152.456.456,0,0,0,.142.1.387.387,0,0,0,.168.034L20.763,1a.382.382,0,0,0,.167-.043.413.413,0,0,0,.132-.109.477.477,0,0,0,.083-.159.538.538,0,0,0,.021-.193A.563.563,0,0,0,21.12.3a.533.533,0,0,0-.1-.155.466.466,0,0,0-.146-.1A.4.4,0,0,0,20.7.011Z" transform="translate(62.155 6.518)" fill="#2e3346"/>
                        <path id="Path_139-2" data-name="Path 139" d="M.423.469A.364.364,0,0,0,.261.511.4.4,0,0,0,.134.618a.467.467,0,0,0-.08.157.536.536,0,0,0-.02.19.562.562,0,0,0,.046.188.528.528,0,0,0,.1.152.457.457,0,0,0,.142.1.388.388,0,0,0,.168.035L20.757,1a.381.381,0,0,0,.167-.043.412.412,0,0,0,.132-.109A.474.474,0,0,0,21.14.687a.539.539,0,0,0,.022-.193A.563.563,0,0,0,21.114.3a.533.533,0,0,0-.1-.155.466.466,0,0,0-.146-.1A.4.4,0,0,0,20.692.01Z" transform="translate(62.351 9.378)" fill="#2e3346"/>
                        <path id="Path_140-2" data-name="Path 140" d="M.423.186A.364.364,0,0,0,.261.227.4.4,0,0,0,.134.334.465.465,0,0,0,.054.49a.536.536,0,0,0-.02.19A.563.563,0,0,0,.08.868a.529.529,0,0,0,.1.152.458.458,0,0,0,.142.1.388.388,0,0,0,.167.035L9.135.986A.37.37,0,0,0,9.3.944.4.4,0,0,0,9.429.837.469.469,0,0,0,9.51.679.536.536,0,0,0,9.531.488.563.563,0,0,0,9.484.3a.531.531,0,0,0-.1-.154.462.462,0,0,0-.144-.1.4.4,0,0,0-.17-.035Z" transform="translate(62.546 12.442)" fill="#2e3346"/>
                        <path id="Path_141-2" data-name="Path 141" d="M4.444,5.889.72.466l1.1.267a.13.13,0,0,0,.059,0A.128.128,0,0,0,1.93.71.143.143,0,0,0,1.968.664.172.172,0,0,0,1.987.6a.2.2,0,0,0,0-.068A.2.2,0,0,0,1.956.473.184.184,0,0,0,1.913.426.153.153,0,0,0,1.856.4L.218,0,.133,1.862a.2.2,0,0,0,.038.127.178.178,0,0,0,.046.044.15.15,0,0,0,.058.023.127.127,0,0,0,.108-.033.148.148,0,0,0,.035-.049A.176.176,0,0,0,.433,1.91L.49.661,4.213,6.083a.181.181,0,0,0,.047.047.153.153,0,0,0,.055.024.131.131,0,0,0,.057,0,.129.129,0,0,0,.052-.027.145.145,0,0,0,.037-.049.177.177,0,0,0,.016-.061.194.194,0,0,0-.006-.065A.2.2,0,0,0,4.444,5.889Z" transform="translate(58.465 51.32)" fill="#fff"/>
                        <path id="Path_142-2" data-name="Path 142" d="M23.75,8.037.986,7.487a.387.387,0,0,1-.164-.042.482.482,0,0,1-.14-.107.568.568,0,0,1-.1-.156.591.591,0,0,1-.047-.19L.037.486A.539.539,0,0,1,.055.3.444.444,0,0,1,.132.145a.365.365,0,0,1,.124-.1A.339.339,0,0,1,.414.008l22.78.42a.4.4,0,0,1,.17.042.493.493,0,0,1,.144.109.571.571,0,0,1,.1.159A.591.591,0,0,1,23.66.93l.483,6.623a.535.535,0,0,1-.02.191.447.447,0,0,1-.081.155.375.375,0,0,1-.129.1A.358.358,0,0,1,23.75,8.037ZM.429.2a.2.2,0,0,0-.1.021A.22.22,0,0,0,.26.284.267.267,0,0,0,.214.376.321.321,0,0,0,.2.489L.7,7a.353.353,0,0,0,.028.114.341.341,0,0,0,.06.094.291.291,0,0,0,.084.064.232.232,0,0,0,.1.025l22.764.547a.215.215,0,0,0,.1-.021.226.226,0,0,0,.077-.062.268.268,0,0,0,.048-.093.321.321,0,0,0,.012-.115L23.488.927a.353.353,0,0,0-.029-.116.344.344,0,0,0-.062-.1.3.3,0,0,0-.086-.065.242.242,0,0,0-.1-.025Z" transform="translate(22.323 64.389)" fill="#ffa64b"/>
                        <g id="Ellipse_148-2" data-name="Ellipse 148" transform="translate(24.197 65.454)" fill="#fff">
                          <path d="M2.144.523a1.583,1.583,0,0,1,.673.169,1.966,1.966,0,0,1,.573.437,2.311,2.311,0,0,1,.412.639,2.4,2.4,0,0,1,.192.776,2.182,2.182,0,0,1-.075.77,1.8,1.8,0,0,1-.317.623,1.487,1.487,0,0,1-.508.413,1.394,1.394,0,0,1-.649.141,1.585,1.585,0,0,1-.672-.171A1.968,1.968,0,0,1,1.2,3.885a2.312,2.312,0,0,1-.411-.638A2.4,2.4,0,0,1,.6,2.473,2.183,2.183,0,0,1,.674,1.7a1.8,1.8,0,0,1,.315-.623A1.489,1.489,0,0,1,1.5.666,1.393,1.393,0,0,1,2.144.523Z" stroke="none"/>
                          <path d="M 2.481604337692261 4.974386692047119 C 2.190859317779541 4.967703342437744 1.908536672592163 4.892250537872314 1.647010564804077 4.761636734008789 C 1.385575175285339 4.631068229675293 1.144892930984497 4.445362567901611 0.9373209476470947 4.218089580535889 C 0.7297954559326172 3.990867614746094 0.5553368926048279 3.722066402435303 0.4262997806072235 3.425221920013428 C 0.2972720265388489 3.128398418426514 0.2136378735303879 2.803486824035645 0.187765970826149 2.463994264602661 C 0.1618913561105728 2.124466896057129 0.1961981356143951 1.801947116851807 0.2803534865379333 1.509480357170105 C 0.3645300269126892 1.216939330101013 0.4985910654067993 0.9544288516044617 0.6722099184989929 0.7350331544876099 C 0.8458911180496216 0.5155587196350098 1.059173345565796 0.3392112851142883 1.30171811580658 0.2191144078969955 C 1.544365286827087 0.09896675497293472 1.816310286521912 0.03511222451925278 2.107189416885376 0.0407056026160717 C 2.398197889328003 0.0463014729321003 2.681012153625488 0.1208836063742638 2.943180561065674 0.2509216070175171 C 3.205440044403076 0.3810047805309296 3.447010517120361 0.56656813621521 3.655423641204834 0.7940438389778137 C 3.863883256912231 1.021570444107056 4.03914213180542 1.29099702835083 4.168729305267334 1.588720679283142 C 4.29832649230957 1.886466264724731 4.382224082946777 2.212464094161987 4.40796422958374 2.553082466125488 C 4.43370246887207 2.893665790557861 4.398892402648926 3.217059135437012 4.313980102539062 3.510131359100342 C 4.22908878326416 3.803129434585571 4.094133377075195 4.065784454345703 3.919564008712769 4.285005569458008 C 3.745057821273804 4.504146575927734 3.53098201751709 4.679866790771484 3.287777185440063 4.799113273620605 C 3.04467511177063 4.918309211730957 2.772479295730591 4.981074333190918 2.481604337692261 4.974386692047119 Z M 2.180456638336182 1.006149649620056 C 2.003350734710693 1.002613663673401 1.837742328643799 1.041362643241882 1.689948439598083 1.114403009414673 C 1.542192816734314 1.187425017356873 1.412238240242004 1.294722437858582 1.306391477584839 1.428313374519348 C 1.200567841529846 1.561875104904175 1.118836522102356 1.721726298332214 1.06749951839447 1.899899125099182 C 1.016170501708984 2.078044414520264 0.9952226281166077 2.274519443511963 1.010960578918457 2.481371641159058 C 1.026697635650635 2.68821120262146 1.077650904655457 2.886168003082275 1.156278967857361 3.06700325012207 C 1.234910726547241 3.247846603393555 1.341227412223816 3.411584615707397 1.467693686485291 3.549968719482422 C 1.59417724609375 3.688371896743774 1.740825772285461 3.801424741744995 1.900102734565735 3.880865812301636 C 2.05941367149353 3.960324048995972 2.231368780136108 4.006160736083984 2.408425331115723 4.010101318359375 C 2.585529327392578 4.014042377471924 2.751230955123901 3.97569727897644 2.899193048477173 3.903009414672852 C 3.047194004058838 3.830303430557251 3.177442789077759 3.723238706588745 3.283595323562622 3.589771032333374 C 3.389770984649658 3.456273794174194 3.4718337059021 3.296369075775146 3.523435592651367 3.118026971817017 C 3.575045108795166 2.93965744972229 3.596179723739624 2.742858171463013 3.580492258071899 2.535614490509033 C 3.564804077148438 2.328357934951782 3.513753414154053 2.129998207092285 3.434914350509644 1.948821187019348 C 3.356078386306763 1.767652034759521 3.249465227127075 1.603682041168213 3.122652769088745 1.465185165405273 C 2.995857715606689 1.326707124710083 2.848879814147949 1.213706731796265 2.689296722412109 1.134445190429688 C 2.529748201370239 1.055200815200806 2.357610940933228 1.009686470031738 2.180456638336182 1.006149649620056 Z" stroke="none" fill="#2e3346"/>
                        </g>
                        <g id="Path_143-2" data-name="Path 143" transform="translate(29.588 66.22)" fill="#fff">
                          <path d="M.736.5A.235.235,0,0,0,.627.522.251.251,0,0,0,.542.591.3.3,0,0,0,.489.7.363.363,0,0,0,.476.824a.4.4,0,0,0,.032.13.385.385,0,0,0,.069.107.329.329,0,0,0,.1.073.266.266,0,0,0,.113.028l13.556.279a.241.241,0,0,0,.111-.024.256.256,0,0,0,.087-.07.3.3,0,0,0,.055-.105.365.365,0,0,0,.013-.13.4.4,0,0,0-.032-.131.388.388,0,0,0-.07-.108.335.335,0,0,0-.1-.074A.274.274,0,0,0,14.293.77Z" stroke="none"/>
                          <path d="M 14.37814044952393 1.929761648178101 L 0.8223533034324646 1.645485281944275 C 0.7259225249290466 1.643447875976562 0.6322351694107056 1.618663311004639 0.545452356338501 1.575571656227112 C 0.4586794078350067 1.532484531402588 0.3788062036037445 1.471152424812317 0.309931755065918 1.396010160446167 C 0.2410623878240585 1.320873379707336 0.1831871420145035 1.231925249099731 0.1404048353433609 1.133656859397888 C 0.09762357175350189 1.035450577735901 0.06996215879917145 0.9278592467308044 0.06149110198020935 0.8154906034469604 C 0.05298982188105583 0.7031180858612061 0.06448793411254883 0.596318781375885 0.09260422736406326 0.4995179176330566 C 0.1206629723310471 0.4026490449905396 0.1653139442205429 0.3158361613750458 0.2230567932128906 0.2432693541049957 C 0.2808065414428711 0.170693963766098 0.3516528606414795 0.1123659983277321 0.432214081287384 0.07265964895486832 C 0.5127865672111511 0.03294773399829865 0.6030477285385132 0.01192196551710367 0.6995232105255127 0.01384008023887873 L 14.25739097595215 0.2813524603843689 C 14.355881690979 0.2833105027675629 14.45144176483154 0.3082117140293121 14.53997898101807 0.3517607450485229 C 14.62852573394775 0.3951937556266785 14.70998668670654 0.4572167992591858 14.78017139434814 0.5331670641899109 C 14.85036468505859 0.6091230511665344 14.90927791595459 0.6990048289299011 14.95273017883301 0.7984486818313599 C 14.99618530273438 0.8977133631706238 15.02414131164551 1.006595373153687 15.03248310089111 1.120243549346924 C 15.04079341888428 1.233887791633606 15.02866458892822 1.341816902160645 14.99963092803955 1.439732551574707 C 14.97063064575195 1.537579298019409 14.92470264434814 1.625349998474121 14.86544513702393 1.69862949848175 C 14.80619239807129 1.771900057792664 14.73361682891846 1.830681085586548 14.65119361877441 1.870743751525879 C 14.56877994537354 1.910679459571838 14.47658538818359 1.931841373443604 14.37814044952393 1.929761648178101 Z" stroke="none" fill="#2e3346"/>
                        </g>
                        <g id="Path_144-2" data-name="Path 144" transform="translate(29.737 68.21)" fill="#fff">
                          <path d="M.736.5A.234.234,0,0,0,.627.523.249.249,0,0,0,.542.592.3.3,0,0,0,.489.7.364.364,0,0,0,.476.824a.4.4,0,0,0,.032.13.387.387,0,0,0,.069.107.329.329,0,0,0,.1.073.266.266,0,0,0,.113.029l5.8.128a.238.238,0,0,0,.11-.024A.251.251,0,0,0,6.78,1.2a.3.3,0,0,0,.054-.1A.364.364,0,0,0,6.846.964a.4.4,0,0,0-.032-.13A.388.388,0,0,0,6.745.726a.331.331,0,0,0-.1-.073A.27.27,0,0,0,6.534.624Z" stroke="none"/>
                          <path d="M 6.620203971862793 1.776205778121948 L 0.8222854733467102 1.645828366279602 C 0.7258237600326538 1.643671751022339 0.6321647167205811 1.618775129318237 0.5454080104827881 1.575576543807983 C 0.4586611986160278 1.532442569732666 0.3788119256496429 1.471009135246277 0.3099582493305206 1.395769834518433 C 0.2411095947027206 1.320655703544617 0.1832218170166016 1.231674432754517 0.1404823213815689 1.133375644683838 C 0.09768399596214294 1.035139083862305 0.07000096887350082 0.927699863910675 0.06153246015310287 0.8153051137924194 C 0.05306366831064224 0.7029664516448975 0.06458824872970581 0.5963189601898193 0.09269609302282333 0.4995472431182861 C 0.1207463964819908 0.4028272330760956 0.1653839349746704 0.3160404860973358 0.2231094241142273 0.2436152547597885 C 0.2808417677879333 0.1711814701557159 0.3517267405986786 0.1130507439374924 0.4322337210178375 0.07347613573074341 C 0.5127819180488586 0.03401578217744827 0.6030158996582031 0.01311620231717825 0.699492335319519 0.01515362039208412 L 6.498305320739746 0.1383680552244186 C 6.595618724822998 0.1404238492250443 6.690103530883789 0.1653430014848709 6.777648448944092 0.2086161524057388 C 6.865233421325684 0.2519544959068298 6.945815086364746 0.3136495649814606 7.015281200408936 0.3891878724098206 C 7.084752559661865 0.4646716117858887 7.143104076385498 0.5541778206825256 7.186193466186523 0.6529483795166016 C 7.22928524017334 0.7517815828323364 7.257081985473633 0.8598743081092834 7.265473365783691 0.972826361656189 C 7.273866176605225 1.085834980010986 7.262083053588867 1.192984700202942 7.233554363250732 1.290184497833252 C 7.205028533935547 1.387436270713806 7.159820079803467 1.474554896354675 7.101389408111572 1.547272801399231 C 7.042965412139893 1.620042085647583 6.971292972564697 1.678351640701294 6.889921188354492 1.717938303947449 C 6.808559894561768 1.757519245147705 6.717502593994141 1.778381824493408 6.620203971862793 1.776205778121948 Z" stroke="none" fill="#2e3346"/>
                        </g>
                        <path id="Path_145-2" data-name="Path 145" d="M.45,0l10.9.07a.435.435,0,0,1,.181.042.51.51,0,0,1,.153.111.575.575,0,0,1,.109.164.59.59,0,0,1,.049.2l.852,12.8a.542.542,0,0,1-.023.2.468.468,0,0,1-.087.161.409.409,0,0,1-.138.107.4.4,0,0,1-.175.037L1.386,13.714a.429.429,0,0,1-.178-.043.509.509,0,0,1-.15-.111A.579.579,0,0,1,.951,13.4.592.592,0,0,1,.9,13.2L.035.509a.548.548,0,0,1,.022-.2A.472.472,0,0,1,.142.15.407.407,0,0,1,.278.042.387.387,0,0,1,.45,0Zm11.8,13.685a.237.237,0,0,0,.105-.022.245.245,0,0,0,.083-.064.283.283,0,0,0,.052-.1.324.324,0,0,0,.014-.119L11.655.588a.354.354,0,0,0-.03-.12.349.349,0,0,0-.065-.1A.306.306,0,0,0,11.469.3.26.26,0,0,0,11.36.278L.464.207a.231.231,0,0,0-.1.023A.244.244,0,0,0,.279.295a.283.283,0,0,0-.051.1A.328.328,0,0,0,.215.51L1.082,13.2a.353.353,0,0,0,.029.119.345.345,0,0,0,.064.1.306.306,0,0,0,.09.067.257.257,0,0,0,.107.026Z" transform="translate(75.247 48.978)" fill="#ffa64b"/>
                        <path id="Path_146-2" data-name="Path 146" d="M6.6.785A.267.267,0,0,0,6.718.76.277.277,0,0,0,6.811.687.319.319,0,0,0,6.87.577.369.369,0,0,0,6.885.443.4.4,0,0,0,6.852.308.394.394,0,0,0,6.778.2a.349.349,0,0,0-.1-.076A.3.3,0,0,0,6.553.092L.306,0A.262.262,0,0,0,.189.03.274.274,0,0,0,.1.1.317.317,0,0,0,.039.211.367.367,0,0,0,.024.345.4.4,0,0,0,.057.479.39.39,0,0,0,.13.59a.345.345,0,0,0,.1.075A.292.292,0,0,0,.353.694Z" transform="translate(78.406 59.418)" fill="#fff"/>
                        <path id="Path_147-2" data-name="Path 147" d="M6.6.776A.266.266,0,0,0,6.719.75.276.276,0,0,0,6.812.677.319.319,0,0,0,6.871.568.37.37,0,0,0,6.887.433.4.4,0,0,0,6.853.3.392.392,0,0,0,6.779.187a.347.347,0,0,0-.1-.076A.294.294,0,0,0,6.554.082L.307,0A.262.262,0,0,0,.189.03.274.274,0,0,0,.1.1.317.317,0,0,0,.038.211.368.368,0,0,0,.023.345.4.4,0,0,0,.057.48.39.39,0,0,0,.13.591a.346.346,0,0,0,.1.075A.291.291,0,0,0,.353.694Z" transform="translate(78.268 57.384)" fill="#fff"/>
                        <path id="Path_148-2" data-name="Path 148" d="M1.937.016A1.839,1.839,0,0,1,2.7.194a2.171,2.171,0,0,1,.649.473,2.458,2.458,0,0,1,.463.7,2.524,2.524,0,0,1,.21.851,2.329,2.329,0,0,1-.1.848,2.008,2.008,0,0,1-.37.689,1.743,1.743,0,0,1-.586.46,1.667,1.667,0,0,1-.744.163,1.84,1.84,0,0,1-.766-.18,2.173,2.173,0,0,1-.647-.474,2.459,2.459,0,0,1-.461-.7,2.524,2.524,0,0,1-.209-.849,2.331,2.331,0,0,1,.1-.846A2.01,2.01,0,0,1,.611.644,1.745,1.745,0,0,1,1.194.182,1.669,1.669,0,0,1,1.937.016Z" transform="translate(79.365 51.632)" fill="#fff"/>
                      </g>
                      <g id="undraw_design_components_9vy6-3" data-name="undraw_design_components_9vy6" transform="translate(304.912 115.684)">
                        <path id="Path_128-3" data-name="Path 128" d="M133.694,205.26a23.571,23.571,0,0,0-8.89,1.724l-.342.141A23.662,23.662,0,0,0,110,228.954v25.855a1.031,1.031,0,0,0,1.03,1.03l.02,0a322.665,322.665,0,0,0,57.373,5.432h.819a250.634,250.634,0,0,0,51.847-5.43l.024,0a1.031,1.031,0,0,0,1.03-1.03V206.289a1.031,1.031,0,0,0-1.03-1.03Z" transform="translate(-110 -205.26)" fill="none" stroke="#2e3346" stroke-width="1"/>
                        <path id="Path_40-3" data-name="Path 40" d="M850.533,385.452a.68.68,0,1,0,0,1.361h17.06a.681.681,0,0,0,.022-1.361H850.533Z" transform="translate(-765.19 -364.832)" fill="none" stroke="#2e3346" stroke-width="1"/>
                        <path id="Path_129-3" data-name="Path 129" d="M1031.138,383.493a.134.134,0,0,0,0,.189l.575.575H1030.3a.134.134,0,1,0,0,.268h1.417l-.575.575a.134.134,0,0,0,.189.189l.8-.8a.134.134,0,0,0,0-.189l-.8-.8A.134.134,0,0,0,1031.138,383.493Z" transform="translate(-924.865 -363.063)" fill="#fff"/>
                        <path id="Path_130-3" data-name="Path 130" d="M813.942,383.493a.134.134,0,0,1,0,.189l-.575.575h1.417a.134.134,0,0,1,0,.268h-1.417l.575.575a.134.134,0,0,1-.189.189l-.8-.8a.134.134,0,0,1,0-.189l.8-.8A.134.134,0,0,1,813.942,383.493Z" transform="translate(-732.474 -363.063)" fill="#fff"/>
                        <g id="Group_22-3" data-name="Group 22" transform="translate(85.301 5.035)" opacity="0.4">
                          <circle id="Ellipse_86-3" data-name="Ellipse 86" cx="0.731" cy="0.731" r="0.731" fill="#fff"/>
                          <circle id="Ellipse_87-3" data-name="Ellipse 87" cx="0.731" cy="0.731" r="0.731" transform="translate(3.047)" fill="#fff"/>
                          <circle id="Ellipse_88-3" data-name="Ellipse 88" cx="0.731" cy="0.731" r="0.731" transform="translate(6.093)" fill="#fff"/>
                          <circle id="Ellipse_89-3" data-name="Ellipse 89" cx="0.731" cy="0.731" r="0.731" transform="translate(9.14)" fill="#fff"/>
                          <circle id="Ellipse_90-3" data-name="Ellipse 90" cx="0.731" cy="0.731" r="0.731" transform="translate(12.187)" fill="#fff"/>
                          <circle id="Ellipse_91-3" data-name="Ellipse 91" cx="0.731" cy="0.731" r="0.731" transform="translate(15.234)" fill="#fff"/>
                          <circle id="Ellipse_92-3" data-name="Ellipse 92" cx="0.731" cy="0.731" r="0.731" transform="translate(18.28)" fill="#fff"/>
                          <circle id="Ellipse_93-3" data-name="Ellipse 93" cx="0.731" cy="0.731" r="0.731" transform="translate(0 2.316)" fill="#fff"/>
                          <circle id="Ellipse_94-3" data-name="Ellipse 94" cx="0.731" cy="0.731" r="0.731" transform="translate(3.047 2.316)" fill="#fff"/>
                          <circle id="Ellipse_95-3" data-name="Ellipse 95" cx="0.731" cy="0.731" r="0.731" transform="translate(6.093 2.316)" fill="#fff"/>
                          <circle id="Ellipse_96-3" data-name="Ellipse 96" cx="0.731" cy="0.731" r="0.731" transform="translate(9.14 2.316)" fill="#fff"/>
                          <circle id="Ellipse_97-3" data-name="Ellipse 97" cx="0.731" cy="0.731" r="0.731" transform="translate(12.187 2.316)" fill="#fff"/>
                          <circle id="Ellipse_98-3" data-name="Ellipse 98" cx="0.731" cy="0.731" r="0.731" transform="translate(15.234 2.316)" fill="#fff"/>
                          <circle id="Ellipse_99-3" data-name="Ellipse 99" cx="0.731" cy="0.731" r="0.731" transform="translate(18.28 2.316)" fill="#fff"/>
                          <circle id="Ellipse_100-3" data-name="Ellipse 100" cx="0.731" cy="0.731" r="0.731" transform="translate(0 4.631)" fill="#fff"/>
                          <circle id="Ellipse_101-3" data-name="Ellipse 101" cx="0.731" cy="0.731" r="0.731" transform="translate(3.047 4.631)" fill="#fff"/>
                          <circle id="Ellipse_102-3" data-name="Ellipse 102" cx="0.731" cy="0.731" r="0.731" transform="translate(6.093 4.631)" fill="#fff"/>
                          <circle id="Ellipse_103-3" data-name="Ellipse 103" cx="0.731" cy="0.731" r="0.731" transform="translate(9.14 4.631)" fill="#fff"/>
                          <circle id="Ellipse_104-3" data-name="Ellipse 104" cx="0.731" cy="0.731" r="0.731" transform="translate(12.187 4.631)" fill="#fff"/>
                          <circle id="Ellipse_105-3" data-name="Ellipse 105" cx="0.731" cy="0.731" r="0.731" transform="translate(15.234 4.631)" fill="#fff"/>
                          <circle id="Ellipse_106-3" data-name="Ellipse 106" cx="0.731" cy="0.731" r="0.731" transform="translate(18.28 4.631)" fill="#fff"/>
                          <circle id="Ellipse_107-3" data-name="Ellipse 107" cx="0.731" cy="0.731" r="0.731" transform="translate(0 6.947)" fill="#fff"/>
                          <circle id="Ellipse_108-3" data-name="Ellipse 108" cx="0.731" cy="0.731" r="0.731" transform="translate(3.047 6.947)" fill="#fff"/>
                          <circle id="Ellipse_109-3" data-name="Ellipse 109" cx="0.731" cy="0.731" r="0.731" transform="translate(0 9.262)" fill="#fff"/>
                          <circle id="Ellipse_110-3" data-name="Ellipse 110" cx="0.731" cy="0.731" r="0.731" transform="translate(3.047 9.262)" fill="#fff"/>
                          <circle id="Ellipse_111-3" data-name="Ellipse 111" cx="0.731" cy="0.731" r="0.731" transform="translate(6.093 9.262)" fill="#fff"/>
                          <circle id="Ellipse_112-3" data-name="Ellipse 112" cx="0.731" cy="0.731" r="0.731" transform="translate(6.093 6.947)" fill="#fff"/>
                          <circle id="Ellipse_113-3" data-name="Ellipse 113" cx="0.731" cy="0.731" r="0.731" transform="translate(9.14 6.947)" fill="#fff"/>
                          <circle id="Ellipse_114-3" data-name="Ellipse 114" cx="0.731" cy="0.731" r="0.731" transform="translate(12.187 6.947)" fill="#fff"/>
                          <circle id="Ellipse_115-3" data-name="Ellipse 115" cx="0.731" cy="0.731" r="0.731" transform="translate(15.234 6.947)" fill="#fff"/>
                          <circle id="Ellipse_116-3" data-name="Ellipse 116" cx="0.731" cy="0.731" r="0.731" transform="translate(18.28 6.947)" fill="#fff"/>
                        </g>
                        <path id="Path_131-3" data-name="Path 131" d="M738.921,518.246a4.036,4.036,0,1,1,4.036-4.036A4.036,4.036,0,0,1,738.921,518.246Zm0-7.844a3.807,3.807,0,1,0,3.807,3.807A3.807,3.807,0,0,0,738.921,510.4Z" transform="translate(-663.378 -475.282)" fill="none" stroke="#2e3346" stroke-width="1"/>
                        <path id="Path_132-3" data-name="Path 132" d="M756.736,530.09h-1.161v-1.161a.387.387,0,1,0-.774,0v1.161h-1.161a.387.387,0,1,0,0,.774H754.8v1.161a.387.387,0,0,0,.774,0v-1.161h1.161a.387.387,0,1,0,0-.774Z" transform="translate(-679.645 -491.549)" fill="#fff"/>
                        <g id="Group_23-3" data-name="Group 23" transform="translate(5.607 27.938)" opacity="0.4">
                          <circle id="Ellipse_117-3" data-name="Ellipse 117" cx="0.575" cy="0.575" r="0.575" transform="translate(0 14.372)" fill="#fff"/>
                          <circle id="Ellipse_118-3" data-name="Ellipse 118" cx="0.575" cy="0.575" r="0.575" transform="translate(0 11.977)" fill="#fff"/>
                          <circle id="Ellipse_119-3" data-name="Ellipse 119" cx="0.575" cy="0.575" r="0.575" transform="translate(0 9.582)" fill="#fff"/>
                          <circle id="Ellipse_120-3" data-name="Ellipse 120" cx="0.575" cy="0.575" r="0.575" transform="translate(0 7.186)" fill="#fff"/>
                          <circle id="Ellipse_121-3" data-name="Ellipse 121" cx="0.575" cy="0.575" r="0.575" transform="translate(0 4.791)" fill="#fff"/>
                          <circle id="Ellipse_122-3" data-name="Ellipse 122" cx="0.575" cy="0.575" r="0.575" transform="translate(0 2.395)" fill="#fff"/>
                          <circle id="Ellipse_123-3" data-name="Ellipse 123" cx="0.575" cy="0.575" r="0.575" fill="#fff"/>
                          <circle id="Ellipse_124-3" data-name="Ellipse 124" cx="0.575" cy="0.575" r="0.575" transform="translate(1.821 14.372)" fill="#fff"/>
                          <circle id="Ellipse_125-3" data-name="Ellipse 125" cx="0.575" cy="0.575" r="0.575" transform="translate(1.821 11.977)" fill="#fff"/>
                          <circle id="Ellipse_126-3" data-name="Ellipse 126" cx="0.575" cy="0.575" r="0.575" transform="translate(1.821 9.582)" fill="#fff"/>
                          <circle id="Ellipse_127-3" data-name="Ellipse 127" cx="0.575" cy="0.575" r="0.575" transform="translate(1.821 7.186)" fill="#fff"/>
                          <circle id="Ellipse_128-3" data-name="Ellipse 128" cx="0.575" cy="0.575" r="0.575" transform="translate(1.821 4.791)" fill="#fff"/>
                          <circle id="Ellipse_129-3" data-name="Ellipse 129" cx="0.575" cy="0.575" r="0.575" transform="translate(1.821 2.395)" fill="#fff"/>
                          <circle id="Ellipse_130-3" data-name="Ellipse 130" cx="0.575" cy="0.575" r="0.575" transform="translate(1.821)" fill="#fff"/>
                          <circle id="Ellipse_131-3" data-name="Ellipse 131" cx="0.575" cy="0.575" r="0.575" transform="translate(3.641 14.372)" fill="#fff"/>
                          <circle id="Ellipse_132-3" data-name="Ellipse 132" cx="0.575" cy="0.575" r="0.575" transform="translate(3.641 11.977)" fill="#fff"/>
                          <circle id="Ellipse_133-3" data-name="Ellipse 133" cx="0.575" cy="0.575" r="0.575" transform="translate(3.641 9.582)" fill="#fff"/>
                          <circle id="Ellipse_134-3" data-name="Ellipse 134" cx="0.575" cy="0.575" r="0.575" transform="translate(3.641 7.186)" fill="#fff"/>
                          <circle id="Ellipse_135-3" data-name="Ellipse 135" cx="0.575" cy="0.575" r="0.575" transform="translate(3.641 4.791)" fill="#fff"/>
                          <circle id="Ellipse_136-3" data-name="Ellipse 136" cx="0.575" cy="0.575" r="0.575" transform="translate(3.641 2.395)" fill="#fff"/>
                          <circle id="Ellipse_137-3" data-name="Ellipse 137" cx="0.575" cy="0.575" r="0.575" transform="translate(3.641)" fill="#fff"/>
                          <circle id="Ellipse_138-3" data-name="Ellipse 138" cx="0.575" cy="0.575" r="0.575" transform="translate(5.462 14.372)" fill="#fff"/>
                          <circle id="Ellipse_139-3" data-name="Ellipse 139" cx="0.575" cy="0.575" r="0.575" transform="translate(5.462 11.977)" fill="#fff"/>
                          <circle id="Ellipse_140-3" data-name="Ellipse 140" cx="0.575" cy="0.575" r="0.575" transform="translate(7.282 14.372)" fill="#fff"/>
                          <circle id="Ellipse_141-3" data-name="Ellipse 141" cx="0.575" cy="0.575" r="0.575" transform="translate(7.282 11.977)" fill="#fff"/>
                          <circle id="Ellipse_142-3" data-name="Ellipse 142" cx="0.575" cy="0.575" r="0.575" transform="translate(7.282 9.582)" fill="#fff"/>
                          <circle id="Ellipse_143-3" data-name="Ellipse 143" cx="0.575" cy="0.575" r="0.575" transform="translate(5.462 9.582)" fill="#fff"/>
                          <circle id="Ellipse_144-3" data-name="Ellipse 144" cx="0.575" cy="0.575" r="0.575" transform="translate(5.462 7.186)" fill="#fff"/>
                          <circle id="Ellipse_145-3" data-name="Ellipse 145" cx="0.575" cy="0.575" r="0.575" transform="translate(5.462 4.791)" fill="#fff"/>
                          <circle id="Ellipse_146-3" data-name="Ellipse 146" cx="0.575" cy="0.575" r="0.575" transform="translate(5.462 2.395)" fill="#fff"/>
                          <circle id="Ellipse_147-3" data-name="Ellipse 147" cx="0.575" cy="0.575" r="0.575" transform="translate(5.462)" fill="#fff"/>
                        </g>
                        <path id="Path_133-3" data-name="Path 133" d="M306.382,238.262H268.191a.708.708,0,0,0-.707.707v32.657a.708.708,0,0,0,.707.707h38.191a.708.708,0,0,0,.707-.707V238.969A.708.708,0,0,0,306.382,238.262Zm.424,33.365a.425.425,0,0,1-.424.425H268.191a.425.425,0,0,1-.424-.425V238.969a.425.425,0,0,1,.424-.425h38.191a.425.425,0,0,1,.424.425Z" transform="translate(-249.463 -251.943)" fill="none" stroke="#2e3346" stroke-width="1"/>
                        <path id="Path_134-3" data-name="Path 134" d="M306.114,462.972c0,.05,0,.1,0,.15a2.881,2.881,0,0,1-5.754,0c0-.049,0-.1,0-.15a2.881,2.881,0,1,1,5.762,0Z" transform="translate(-278.57 -448.388)" fill="#fff"/>
                        <path id="Path_135-3" data-name="Path 135" d="M402.583,468.479H379.947a.48.48,0,1,0,0,.96h22.636a.48.48,0,1,0,0-.96Z" transform="translate(-308.298 -486.055)" fill="#ffa64b"/>
                        <path id="Path_136-3" data-name="Path 136" d="M389.692,493.66h-9.74a.48.48,0,0,0,0,.959h9.74a.48.48,0,0,0,0-.959Z" transform="translate(-308.303 -508.354)" fill="#2e3346"/>
                        <path id="Path_137-3" data-name="Path 137" d="M383.578,294H345.387a.979.979,0,0,1-.978-.978v-16.76a.979.979,0,0,1,.978-.978h38.191a.979.979,0,0,1,.978.978v16.76A.979.979,0,0,1,383.578,294Zm-38.191-18.373a.636.636,0,0,0-.635.635v16.76a.636.636,0,0,0,.635.635h38.191a.636.636,0,0,0,.635-.635v-16.76a.636.636,0,0,0-.635-.635Z" transform="translate(-277.252 -297.507)" fill="#2e3346"/>
                        <path id="Path_138-3" data-name="Path 138" d="M417.208,328.7a.48.48,0,0,0,0,.96h22.636a.48.48,0,1,0,0-.96Z" transform="translate(-341.295 -344.813)" fill="#2e3346"/>
                        <path id="Path_139-3" data-name="Path 139" d="M417.208,353.012a.48.48,0,0,0,0,.96h22.636a.48.48,0,1,0,0-.96Z" transform="translate(-341.295 -366.343)" fill="#2e3346"/>
                        <path id="Path_140-3" data-name="Path 140" d="M417.208,377.029a.48.48,0,0,0,0,.96h9.74a.48.48,0,0,0,0-.96Z" transform="translate(-341.295 -387.613)" fill="#2e3346"/>
                        <path id="Path_141-3" data-name="Path 141" d="M705.926,455.417,702.091,450l1.242.259a.172.172,0,0,0,.07-.336l-1.85-.385-.25,1.873a.172.172,0,0,0,.341.045l.167-1.258,3.836,5.414a.172.172,0,0,0,.28-.2Z" transform="translate(-633.637 -421.587)" fill="#fff"/>
                        <path id="Path_142-3" data-name="Path 142" d="M344.766,578.427H317.5a.506.506,0,0,1-.5-.5v-6.763a.505.505,0,0,1,.5-.5h27.264a.505.505,0,0,1,.5.5v6.763A.506.506,0,0,1,344.766,578.427ZM317.5,570.856a.3.3,0,0,0-.3.3v6.763a.3.3,0,0,0,.3.3h27.264a.3.3,0,0,0,.3-.3v-6.763a.3.3,0,0,0-.3-.3Z" transform="translate(-293.31 -528.842)" fill="#ffa64b"/>
                        <circle id="Ellipse_148-3" data-name="Ellipse 148" cx="2.057" cy="2.057" r="2.057" transform="translate(26.372 43.383)" fill="#fff" stroke="#2e3346" stroke-width="1"/>
                        <path id="Path_143-3" data-name="Path 143" d="M397.285,590.368a.343.343,0,1,0,0,.686h16.16a.343.343,0,1,0,0-.686Z" transform="translate(-364.107 -546.299)" fill="#fff" stroke="#2e3346" stroke-width="1"/>
                        <path id="Path_144-3" data-name="Path 144" d="M397.285,608.341a.343.343,0,1,0,0,.686h6.954a.343.343,0,1,0,0-.686Z" transform="translate(-364.107 -562.215)" fill="#fff" stroke="#2e3346" stroke-width="1"/>
                        <path id="Path_145-3" data-name="Path 145" d="M870.117,428.016h12.117a.506.506,0,0,1,.5.5v12.62a.505.505,0,0,1-.5.5H870.117a.505.505,0,0,1-.5-.5v-12.62A.505.505,0,0,1,870.117,428.016Zm12.117,13.428a.3.3,0,0,0,.3-.3v-12.62a.3.3,0,0,0-.3-.3H870.117a.3.3,0,0,0-.3.3v12.62a.3.3,0,0,0,.3.3Z" transform="translate(-782.688 -402.525)" fill="#ffa64b"/>
                        <path id="Path_146-3" data-name="Path 146" d="M900.889,519.075a.343.343,0,0,0,0-.686h-6.954a.343.343,0,0,0,0,.686Z" transform="translate(-803.924 -482.557)" fill="#fff"/>
                        <path id="Path_147-3" data-name="Path 147" d="M900.889,501.426a.343.343,0,0,0,0-.686h-6.954a.343.343,0,0,0,0,.686Z" transform="translate(-803.924 -466.928)" fill="#fff"/>
                        <path id="Path_148-3" data-name="Path 148" d="M910.273,450.758a2.158,2.158,0,1,1-2.158,2.158A2.158,2.158,0,0,1,910.273,450.758Z" transform="translate(-816.785 -422.665)" fill="#fff"/>
                      </g>
                      <path id="Path_180" data-name="Path 180" d="M383.74,627.358a.92.92,0,0,1,.074-.259c.741-2.66,2.06-7.156,3.045-10.75.126-.445.244-.882.356-1.3,1.089-4.052,3.208-13.543,4.386-19.462.415-2.082.741-3.7.807-4.519.148-1.252,2.378-6.608,4.9-12.765,1.771-4.327,3.7-9.053,5.119-13.039a45.47,45.47,0,0,0,2.171-7.3,3.777,3.777,0,0,0,0-1.578,10.884,10.884,0,0,1-.356-2.593h0c-.17-4.593,1.2-11.853,3.319-14.9,2.593-3.7,4.445-17.528,4.445-17.528s3.838.556,4.445-2.615a4.558,4.558,0,0,0,.074-1.037,5.492,5.492,0,0,0-.067-.822c-.659-4.623,10.905-9.542,17.41-10.6a14.561,14.561,0,0,1,2.223-.207,20.181,20.181,0,0,0,4.63-1.067q1.037-.319,2.223-.741c2.726-.919,5.986-2.134,9.446-3.467,13.009-5.045,28.759-11.853,28.759-11.853.111-.526.237-1.03.378-1.526a20.529,20.529,0,0,1,12.113-14.024h0v-1.482c0-2.556-.111-5.186-.222-7.808,0-.511-.044-1.022-.074-1.534v-.837c0-.519-.052-1.037-.081-1.548l-.133-.1a12.155,12.155,0,0,1-2.889-3.112,11.309,11.309,0,0,1-1.052-2.223c-.926-2.511-1.141-5.312-1.763-7.964l-.133-.548a62.231,62.231,0,0,0-2.963-7.838c-1.637-4.015-2.9-8.149-4.149-12.335q-1.141-3.8-2.3-7.616l-1.171-3.882c-.222-.741-.445-1.482-.615-2.223h0a9.843,9.843,0,0,1-.193-1.037h0a7.409,7.409,0,0,1,.178-3.415,23.777,23.777,0,0,1,.978-2.223,5.834,5.834,0,0,0,.37-1.022h0a2.241,2.241,0,0,0,.059-.237,4.186,4.186,0,0,0,.082-.8,13.678,13.678,0,0,0-.385-2.882.052.052,0,0,1,0-.037,1.894,1.894,0,0,0-.037-.2,18.891,18.891,0,0,1-.267-2.223,21.077,21.077,0,0,1,2.571-11.535l.141-.267a18.683,18.683,0,0,1,1.363-2.06h0a10.407,10.407,0,0,1,.741-.9c-1.037.993-2.741.556-3.7-.511a2.676,2.676,0,0,1-.407-.556,2.828,2.828,0,0,1-.17-.333c-.037-.089-.067-.185-.1-.281-.519-1.815.385-3.749,1.571-5.223a13.7,13.7,0,0,1,4.252-3.482h0a2.853,2.853,0,0,1,.3-.156,12.68,12.68,0,0,1,1.956-.785h0a11.157,11.157,0,0,1,1.208-.326l-2.749-.252-1.111-.1a10.735,10.735,0,0,1,9.631-8.083h.8a8.7,8.7,0,0,1,1.163.1,3.29,3.29,0,0,1-1.963-3.208,10.676,10.676,0,0,0,6.808,2.267h.282a22.237,22.237,0,0,1-.252-2.422h0a24.579,24.579,0,0,1,0-3.3,6.253,6.253,0,0,0,5.023,1.674l-1.541-2.148a7.03,7.03,0,0,0,4.86,1.519l.356-.037a5.188,5.188,0,0,0,.882-.17h.067c-.141-.178-.267-.363-.393-.556l-.044-.089a7.166,7.166,0,0,1-.741-1.548,4.875,4.875,0,0,1-.178-.645h0a6.482,6.482,0,0,1,.333-4.038c2.393,2,5.015,4.734,8.149,2.667s3.237-5.86,8.149-5.475a7.557,7.557,0,0,1,6.23,4.534,5,5,0,0,1,5.682-1.3,5.075,5.075,0,0,1,2.874,5.1c2.037-.511,4.23-1.015,6.186-.244s3.215,3.267,2.1,4.934a1.056,1.056,0,0,1-.1.148c-.911,1.178-2.926,1.822-2.711,3.3l.311.222.963.7q5.667,4.089,11.038,8.594c1.837,1.541,3.793,3.393,3.919,5.8a6.4,6.4,0,0,1-.178,1.756h0c-.118.578-.281,1.156-.407,1.734a14.453,14.453,0,0,0-.252,4.482h0c.052.437.119.867.2,1.3,1.133,5.727,5.712,10.453,6.164,16.3v.415a13.172,13.172,0,0,1-.052,1.874c-.341,3.556-1.985,6.971-3.319,10.372-.081.207-.163.415-.237.622a103.214,103.214,0,0,0-5.186,20.862A74.243,74.243,0,0,1,555.874,447a19.8,19.8,0,0,1-3.771,7.727,12.016,12.016,0,0,1-2.489,2.223A13.838,13.838,0,0,1,547.65,458v.044c.081.452.148.9.23,1.356.044.237.081.474.126.741h0a.1.1,0,0,0,0,.044c.622,3.5,1.333,6.934,2.082,10.194l.378,1.622c9.335,3.371,10.438,10.275,10.505,12.92a7.137,7.137,0,0,1,0,1.059s14.076.37,19.632,4.445a15.064,15.064,0,0,0,3.341,1.7,61.5,61.5,0,0,0,6.853,2.141c1.193.311,2.437.615,3.7.911,2.223.511,4.578,1.008,6.853,1.482,6.067,1.222,11.779,2.223,14.676,2.963,6.912,1.748,22.721,16.906,22.721,16.906s1.852,15.291,3.7,17.521,5.186,10.068,5.186,10.068l12.253,21.788,5.186,9.164h3.334a5.668,5.668,0,0,1,2.378,1.556c.882.785,1.859,1.763,2.719,2.652l1.422,1.519.889.985s5.386.133,6.845,4.393c4.386-.126,9.772.163,13.543,1.852a10.473,10.473,0,0,1,1.482.8,6.431,6.431,0,0,1,3.06,4.193,6.189,6.189,0,0,1,.133,1.067c0,.422,0,.845,0,1.259-.267,5.608-3.919,10.275-7.275,13.417l.237.422s-.111.267-.326.741c-.059.141-.133.3-.215.474h0c-.437.933-1.133,2.334-2.045,3.971a46.9,46.9,0,0,1-7.09,9.757l-.215.222-42.776.393-.126-.148-8.3-9.9-4.127-4.919-.126-.156-.119,1.178-.4,3.926-.963,9.49-.052.474v.126l-.111,1.1.081-1.1h-.215l-79.27.741L417.352,627v.622h-.1V627l-33.152.356Z" transform="translate(-158.226 -218.273)" fill="url(#linear-gradient)"/>
                      <path id="Path_181" data-name="Path 181" d="M594.45,521.555s-73.713,8.89-66.675,0c2.549-3.215,3.252-12.742,3.112-23.6-.044-3.3-.163-6.712-.333-10.112-.815-16.3-2.778-32.226-2.778-32.226s64.453-30.374,57.045-6.3c-2.963,9.727-1.993,23.388.259,36.212.659,3.741,1.422,7.408,2.222,10.89A255.342,255.342,0,0,0,594.45,521.555Z" transform="translate(-195.432 -242.131)" fill="#fbbebe"/>
                      <path id="Path_182" data-name="Path 182" d="M594.45,540.664s-73.713,8.89-66.675,0c2.549-3.215,3.252-12.742,3.112-23.6,11.238-4.8,25.537-1.222,25.537-1.222,15.054-3,24.707-2.415,30.878-.311A255.342,255.342,0,0,0,594.45,540.664Z" transform="translate(-195.432 -261.24)" opacity="0.1"/>
                      <path id="Path_183" data-name="Path 183" d="M417.441,671.094v-.622l130.106-1.415,79.27-.741h.222l-.081,1.1.111-1.1h.141v-.126l1.015-9.964.385-3.771.119-1.178.1-.985,4.578-15.269,4.578-15.246,3.852-12.839,5.882-19.617s-3.334-7.779-5.186-10-3.7-17.41-3.7-17.41-15.81-15.061-22.721-16.795c-2.9-.741-8.616-1.726-14.691-2.963-2.274-.459-4.608-.948-6.853-1.482-1.267-.289-2.511-.593-3.7-.9a65.1,65.1,0,0,1-6.853-2.119,15.331,15.331,0,0,1-3.334-1.7c-5.445-3.993-19.091-4.445-19.617-4.445h0a.32.32,0,0,1,0-.052v-.067a7.573,7.573,0,0,0,0-.933,5.954,5.954,0,0,0-.067-1.037.935.935,0,0,0-.052-.37c-.037-.267-.081-.548-.148-.845a3.7,3.7,0,0,0-.089-.393,12.754,12.754,0,0,0-.926-2.586c-.052-.119-.119-.245-.178-.363a13.521,13.521,0,0,0-1.26-1.948c-.1-.126-.2-.259-.311-.385a14.5,14.5,0,0,0-2.015-1.956c-.2-.156-.407-.319-.622-.467a3.461,3.461,0,0,0-.378-.267l-.659-.43-.615-.356c-.541-.3-1.111-.585-1.734-.859-.193-.089-.4-.17-.607-.252s-.533-.207-.808-.311h-.044l-.556-.222c-.422-.141-.852-.267-1.3-.393l-.689-.178-.741-.17-.741-.156c-.741-.148-1.534-.282-2.363-.385l-.845-.1-.867-.089-.9-.074-1.274-.074-1.482-.052a92.39,92.39,0,0,0-19.448,2.069,53.538,53.538,0,0,0-13.519-1.246h-.645l-.741.044h-.474l-.956.089a7.107,7.107,0,0,0-.963.111c-.319.044-.652.081-.97.133l-.489.081c-.482.081-.97.17-1.482.274q-.245.044-.489.111c-.645.141-1.289.311-1.926.5-.319.089-.637.193-.956.3-.163.044-.319.1-.474.163l-.474.17-.467.185-.556.222c-.282.119-.556.245-.83.378-.156.067-.311.141-.459.222s-.3.148-.444.23a20.557,20.557,0,0,0-4.6,3.245l-.378.363-.37.378c-.126.126-.245.259-.363.393a17.643,17.643,0,0,0-1.348,1.667c-.119.156-.23.311-.341.474a19.776,19.776,0,0,0-1.274,2.163c-.1.178-.185.363-.274.541A24.225,24.225,0,0,0,481.6,532.9q-.208.741-.378,1.482s-15.684,6.919-28.693,11.928c-3.46,1.333-6.719,2.541-9.446,3.452-.793.267-1.534.511-2.223.741a19.782,19.782,0,0,1-4.63,1.067,14.565,14.565,0,0,0-2.223.207c-5.979.971-16.224,5.186-17.343,9.416a2.733,2.733,0,0,0-.074,1.037v.082c.741,5.186-4.445,4.445-4.445,4.445s-1.852,13.706-4.445,17.41c-1.874,2.667-3.156,8.616-3.319,13.105h0a14.527,14.527,0,0,0,.326,4.171v.1c.3.993-.415,3.7-1.622,7.179-1.311,3.815-3.223,8.557-5.06,13.031-2.771,6.756-5.379,12.891-5.541,14.239-.067.6-.259,1.674-.526,3.06-1.082,5.645-3.482,16.395-4.667,20.743-.882,3.245-2.163,7.69-3.045,10.742a1.04,1.04,0,0,1-.074.259l33.212-.326v.622h.1Z" transform="translate(-158.338 -261.75)" fill="#8a8a8a"/>
                      <path id="Path_184" data-name="Path 184" d="M445.44,607.57s42.228,21.855,57.415,19.262Z" transform="translate(-174.217 -285.548)" opacity="0.1"/>
                      <path id="Path_185" data-name="Path 185" d="M561.44,595.57s41.116,13.335,54.822,15.187S561.44,595.57,561.44,595.57Z" transform="translate(-204.279 -282.439)" opacity="0.1"/>
                      <path id="Path_186" data-name="Path 186" d="M595.218,532.5c-21.484,3.956-61.934,3.1-79.418,2.5,6.408-22.966,37.657-15.158,37.657-15.158C592.136,512.126,595.1,528.143,595.218,532.5Z" transform="translate(-192.451 -262.276)" opacity="0.1"/>
                      <path id="Path_187" data-name="Path 187" d="M595.218,530.5c-21.484,3.956-61.934,3.1-79.418,2.5,6.408-22.966,37.657-15.158,37.657-15.158C592.136,510.126,595.1,526.143,595.218,530.5Z" transform="translate(-192.451 -261.758)" fill="#8a8a8a"/>
                      <path id="Path_188" data-name="Path 188" d="M776.94,672.089s25.307-3.889,25.8,7.223-12.905,18.877-12.905,18.877Z" transform="translate(-260.129 -302.099)" fill="#fbbebe"/>
                      <path id="Path_189" data-name="Path 189" d="M585.228,485.535a34.84,34.84,0,0,1-3.334,1.289c-7.986,2.756-16.039,5.534-24.448,6.542s-17.232.119-24.566-4.075a21.326,21.326,0,0,1-2.222-1.445c-.815-16.3-2.778-32.226-2.778-32.226s64.453-30.374,57.045-6.3C581.976,459.05,582.976,472.711,585.228,485.535Z" transform="translate(-195.582 -242.132)" opacity="0.1"/>
                      <path id="Path_190" data-name="Path 190" d="M540.962,361.474a7.016,7.016,0,0,1-6.164-1.3l1.541,2.141a6.275,6.275,0,0,1-5.023-1.667,25.247,25.247,0,0,0,.237,5.741,10.757,10.757,0,0,1-7.082-2.223,3.275,3.275,0,0,0,1.956,3.193A10.624,10.624,0,0,0,514.87,375.3l3.867.356A13.683,13.683,0,0,0,511,380.373c-1.185,1.482-2.089,3.378-1.571,5.186s3.023,2.963,4.386,1.674a20.7,20.7,0,0,0-4.519,16.884,10.72,10.72,0,0,1,.341,3.9,33.057,33.057,0,0,1-1.4,3.474c-.741,2.163-.037,4.512.622,6.668l3.475,11.424c1.259,4.126,2.511,8.26,4.156,12.253a60.8,60.8,0,0,1,2.963,7.786c.933,3.586.97,7.512,2.963,10.646a14.766,14.766,0,0,0,5.319,4.689c7.327,4.193,16.18,5.082,24.566,4.075s16.432-3.786,24.411-6.542a22.966,22.966,0,0,0,5.067-2.223c5.519-3.615,6.749-11.009,7.779-17.521a99.487,99.487,0,0,1,5.4-21.336c1.615-4.067,3.7-8.194,3.349-12.55-.452-5.786-5.03-10.475-6.164-16.165a14.076,14.076,0,0,1,.052-5.756,13.084,13.084,0,0,0,.585-3.482c-.126-2.385-2.082-4.223-3.919-5.756q-5.978-4.993-12.342-9.438c-.215-1.482,1.8-2.119,2.711-3.289,1.289-1.652-.044-4.275-2-5.045s-4.149-.267-6.186.244a4.882,4.882,0,0,0-8.557-3.786,7.557,7.557,0,0,0-6.238-4.5c-4.912-.385-5.008,3.371-8.149,5.438s-5.734-.659-8.149-2.645A6.875,6.875,0,0,0,540.962,361.474Z" transform="translate(-190.41 -219.276)" fill="#1a192b"/>
                      <path id="Path_191" data-name="Path 191" d="M777.046,677.767s-.659,1.571-1.874,3.845a51.116,51.116,0,0,1-6.667,9.757l-.2.215h-1.2l-42.776.393h-1.022l-.126-.148-8.3-9.846-3.126-3.712-.126-.156-.267-.311-.148-.178-.193-.23-6.082-7.216,2.222-9.26,3.786-15.6.1-.378.741-2.963.526-2.223,1.763-7.245,6.045-24.929,10.742,5.556,11.327,20,6.082,10.742h3.334c.63,0,2.074,1.215,3.526,2.615.519.5,1.037,1.022,1.482,1.482,1.319,1.363,2.363,2.534,2.363,2.534s5.4.119,6.853,4.371a5.2,5.2,0,0,1,.185.63,29.854,29.854,0,0,0,1.874,4.86c.956,2.082,2.156,4.445,3.371,6.808,2.26,4.334,4.556,8.46,5.4,9.957l.1.185Z" transform="translate(-241.469 -285.551)" fill="#8a8a8a"/>
                      <path id="Path_192" data-name="Path 192" d="M641.887,654.154l-.074,1.059v.074l-.126,1.7L640.7,670.7l-1.193,16.521-.341,4.652-.741,9.957v.126l-79.27.741-130.084,1.408v.622h-.1v-.83l.333-10.638.637-20.788.548-17.625.052-1.756A7.8,7.8,0,0,1,439,645.56c3.5.3,8.038.659,13.468,1.044l2.223.163c31.36,2.178,89.315,4.993,147.8,1.482,1.23-.067,2.467-.141,3.7-.23,9.068-.57,18.128-1.3,27.1-2.222a7.8,7.8,0,0,1,8.594,8.32Z" transform="translate(-169.948 -295.387)" opacity="0.1"/>
                      <path id="Path_193" data-name="Path 193" d="M429.08,705.775v-.622l130.106-1.415,79.27-.741h.222v-.126l.741-9.957.319-4.445,1.215-16.75.956-13.261v-.326a7.866,7.866,0,0,0-.081-1.83.223.223,0,0,0,0-.074,7.7,7.7,0,0,0-1.482-3.438,7.808,7.808,0,0,0-6.979-2.963c-8.971.919-18.032,1.652-27.1,2.223-1.237.089-2.474.163-3.7.23-58.482,3.474-116.437.659-147.8-1.482l-2.223-.163c-5.43-.385-9.972-.741-13.468-1.044a7.808,7.808,0,0,0-8.327,6.319,8.149,8.149,0,0,0-.133,1.215l-.5,16.417-.689,20.8-.326,10.638v.83Z" transform="translate(-169.977 -296.431)" fill="#3f3d56"/>
                      <path id="Path_194" data-name="Path 194" d="M642.145,662.34l-.911,11.357-1.356,16.928-.341,4.238-.741,9.49-.044.474v.126h0l-.111,1.1.081-1.1h-.215l-79.27.741L429.11,707.1v-.207l.363-10.638.741-20.788.474-13.817a4.712,4.712,0,0,1,2.267-3.889,4.631,4.631,0,0,1,2.8-.667c1.556.126,3.467.274,5.7.437,3.623.267,8.09.578,13.291.9,9.631.608,21.714,1.259,35.56,1.793,38.524,1.482,90.53,1.978,139.929-2.348,2.223-.193,4.519-.408,6.764-.622a4.637,4.637,0,0,1,2.578.489,3.819,3.819,0,0,1,.637.4,4.549,4.549,0,0,1,1.482,1.823,2.632,2.632,0,0,1,.185.452A4.651,4.651,0,0,1,642.145,662.34Z" transform="translate(-169.984 -298.379)" opacity="0.1"/>
                      <path id="Path_195" data-name="Path 195" d="M365.215,677.87v2.363a4.541,4.541,0,0,1-2.593,4.1l-29.708.57a4.534,4.534,0,0,1-2.645-4.126v-2.222Z" transform="translate(-144.369 -303.768)" opacity="0.1"/>
                      <path id="Path_196" data-name="Path 196" d="M285.059,513.323l-38.709.741v-6.423l38.709-.741Z" transform="translate(-63.842 -131.36)" fill="#3f3d56"/>
                      <path id="Path_197" data-name="Path 197" d="M285.059,513.323l-38.709.741v-6.423l38.709-.741Z" transform="translate(-63.842 -131.36)" opacity="0.1"/>
                      <path id="Path_198" data-name="Path 198" d="M287.059,513.323l-38.709.741v-6.423l38.709-.741Z" transform="translate(-64.36 -131.36)" fill="#3f3d56"/>
                      <g id="Group_25" data-name="Group 25" transform="translate(317.811 136.553)" opacity="0.1">
                        <path id="Path_199" data-name="Path 199" d="M552.411,360.435a7.224,7.224,0,0,1-1.4-3.215,7.029,7.029,0,0,0,.311,3.408A6.669,6.669,0,0,0,552.411,360.435Z" transform="translate(-519.365 -357.22)"/>
                        <path id="Path_200" data-name="Path 200" d="M540.134,367.241a26.037,26.037,0,0,1-.274-2.741c0,.911,0,1.83,0,2.749Z" transform="translate(-516.497 -359.107)"/>
                        <path id="Path_201" data-name="Path 201" d="M621.712,399.393a13.582,13.582,0,0,1,.267-1.963,13.335,13.335,0,0,0,.593-3.475,4.563,4.563,0,0,0-.119-.785c-.126.682-.326,1.363-.474,2.037a14.175,14.175,0,0,0-.267,4.186Z" transform="translate(-537.697 -366.537)"/>
                        <path id="Path_202" data-name="Path 202" d="M600.924,369.356l.807.585a14.6,14.6,0,0,0,1.9-1.645,2.719,2.719,0,0,0,.281-2.7,2.222,2.222,0,0,1-.281.474C602.725,367.245,600.71,367.889,600.924,369.356Z" transform="translate(-532.319 -359.392)"/>
                        <path id="Path_203" data-name="Path 203" d="M518.535,380.29a9.122,9.122,0,0,0-.645,1.689,13.455,13.455,0,0,1,3.7-1.4Z" transform="translate(-510.803 -363.199)"/>
                        <path id="Path_204" data-name="Path 204" d="M532.061,369.091a10.991,10.991,0,0,1-1.393-.911,3.144,3.144,0,0,0,.067.874,8.79,8.79,0,0,1,1.326.037Z" transform="translate(-514.113 -360.06)"/>
                        <path id="Path_205" data-name="Path 205" d="M598.7,428.33c-.3,3.593-1.978,7.053-3.334,10.461a99.445,99.445,0,0,0-5.4,21.344c-1.03,6.512-2.222,13.906-7.779,17.513a22.227,22.227,0,0,1-5.06,2.223c-7.986,2.763-16.039,5.534-24.448,6.542s-17.232.126-24.566-4.067a14.817,14.817,0,0,1-5.319-4.69c-1.978-3.134-2.015-7.06-2.963-10.646a60.9,60.9,0,0,0-2.963-7.794c-1.637-3.986-2.9-8.149-4.149-12.246q-1.741-5.712-3.475-11.431a21.351,21.351,0,0,1-.845-3.519,13.279,13.279,0,0,0,.845,5.741q1.734,5.727,3.475,11.431c1.252,4.126,2.511,8.26,4.149,12.246a60.9,60.9,0,0,1,2.963,7.794c.933,3.586.971,7.512,2.963,10.646a14.817,14.817,0,0,0,5.319,4.689c7.334,4.193,16.18,5.075,24.566,4.067s16.432-3.778,24.448-6.542a22.225,22.225,0,0,0,5.06-2.222c5.519-3.608,6.749-11,7.779-17.513a99.445,99.445,0,0,1,5.4-21.344c1.615-4.06,3.7-8.186,3.349-12.55C598.718,428.419,598.7,428.374,598.7,428.33Z" transform="translate(-508.324 -375.649)"/>
                        <path id="Path_206" data-name="Path 206" d="M510.4,422.21v-.081a10.371,10.371,0,0,0-.341-3.889,19.7,19.7,0,0,1-.289-2.46,20.262,20.262,0,0,0,.289,4.682C510.177,421.04,510.31,421.625,510.4,422.21Z" transform="translate(-508.691 -372.397)"/>
                        <path id="Path_207" data-name="Path 207" d="M512.771,398.468a20.542,20.542,0,0,1,1.934-2.719c-1.356,1.3-3.86.141-4.386-1.659a4.32,4.32,0,0,0,0,2.223A3.252,3.252,0,0,0,512.771,398.468Z" transform="translate(-508.804 -366.775)"/>
                      </g>
                      <path id="Path_208" data-name="Path 208" d="M763.075,656.57s2.348,8.52,0,15.928S763.075,656.57,763.075,656.57Z" transform="translate(-256.265 -298.247)" opacity="0.1"/>
                      <path id="Path_209" data-name="Path 209" d="M776.247,668.3s.985,10.816-1.237,12.735S776.247,668.3,776.247,668.3Z" transform="translate(-259.436 -301.287)" opacity="0.1"/>
                      <g id="Group_45" data-name="Group 45" transform="translate(3.134 -6.201)">
                        <line id="Line_2-5" data-name="Line 2" y1="0.741" x2="75.277" transform="translate(147.422 253.272)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        <line id="Line_3-5" data-name="Line 3" y1="0.733" x2="75.277" transform="translate(147.422 262.517)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        <line id="Line_4-5" data-name="Line 4" y1="0.741" x2="75.277" transform="translate(147.422 271.756)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                      </g>
                      <g id="Group_46" data-name="Group 46" transform="translate(3.134 25.799)">
                        <line id="Line_2-6" data-name="Line 2" y1="0.741" x2="58.751" transform="translate(147.422 253.272)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        <line id="Line_3-6" data-name="Line 3" y1="0.733" x2="58.751" transform="translate(147.422 262.517)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        <line id="Line_4-6" data-name="Line 4" y1="0.741" x2="58.751" transform="translate(147.422 271.756)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                      </g>
                      <g id="Group_47" data-name="Group 47" transform="translate(3.134 58.633)">
                        <line id="Line_2-7" data-name="Line 2" y1="0.741" x2="71.943" transform="translate(147.422 253.272)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        <line id="Line_3-7" data-name="Line 3" y1="0.733" x2="71.943" transform="translate(147.422 262.517)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                        <line id="Line_4-7" data-name="Line 4" y1="0.741" x2="71.943" transform="translate(147.422 271.756)" fill="none" stroke="#ffa64b" stroke-miterlimit="10" stroke-width="4"/>
                      </g>
                    </g>
                  </g>
                </svg>

                </div>
              
            </div>
          </div>
          
          </section>
        <section className="quick-intro">
          <Parallax y={[-80,40]}><div className="quick-intro__head"> &lt;/&gt;</div></Parallax>
          <div className="quick-intro__body">
            <div className="quick-intro__body__left"></div>
            <div className="quick-intro__body__right">
              <div className="quick-intro__main">
                <span className="head-text">Working Remotly,<br/> Based in </span>
                <span className="head-text-border">Toronto</span>
              </div>
              <div className="quick-intro__about">I’m a Design Engineer who believes in Design , Good Design, that solves problems in artistic and logical ways.I help business & agencies to turn their ideas into designs and Digital products.</div>
              <div className="quick-intro_social-links social-links">
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
              </div>
              <div className="cta-wrap">
                <div className="email-cta">
                <div className="icon"></div>
                <div className="email-address" onClick={() => {
                  navigator.clipboard.writeText('abhaykvincent@gmail.com');
                  setNotification('show')
                  setTimeout(() => {
                    setNotification('')
                }, 1000);
                  }}>abhaykvincent@gmail.com</div>
              </div>
                <div className="copy-icon"></div>
              </div>
            </div>
          </div>
          {/* <Parallax y={[40,-40]}><div className="quick-intro__animation"></div></Parallax> */}

          </section>
        <section className="technologies">
        <div className="technologies__body">
        <Parallax x={[10, -10]}>
          <div className="strip">
            <div className="tech">Angular JS</div>
            <div className="tech">HTML</div>
            <div className="tech">Babel</div>
            <div className="tech">Some Tech</div>
            <div className="tech">Webpack</div>
            <div className="tech">Vue JS </div>
            <div className="tech">Python</div>
            <div className="tech">React NativeJS</div>
            <div className="tech">Redux</div>
            <div className="tech">SCSS</div>
            <div className="tech">Angular JS</div>
            <div className="tech">HTML</div>
            <div className="tech">Babel</div>
            <div className="tech">Some Tech</div>
          </div>
        </Parallax>
        <Parallax x={[10, -30]}>
          <div className="strip">
            <div className="tech">Regex</div>
            <div className="tech">D3</div>
            <div className="tech">Tailwind</div>
            <div className="tech">Mysql</div>
            <div className="tech">PHP</div>
            <div className="tech">jQuery</div>
            <div className="tech">Material CSS</div>
            <div className="tech">scss</div>
            <div className="tech">Responsive Web</div>
            <div className="tech">SVG</div>
            <div className="tech">Regex</div>
            <div className="tech">D3</div>
            <div className="tech">Tailwind</div>
          </div>
        </Parallax>
        <Parallax x={[10, -70]}>
          <div className="strip">
            <div className="tech">3D for web</div>
            <div className="tech">eCommerce</div>
            <div className="tech">GIT </div>
            <div className="tech">Bootstrap</div>
            <div className="tech">Foundation</div>
            <div className="tech">SCSS</div>
            <div className="tech">Some </div>
            <div className="tech">Wordpress</div>
            <div className="tech">Wix</div>
            <div className="tech">NPM Scripts</div>
            <div className="tech">3D for web</div>
            <div className="tech">eCommerce</div>
            <div className="tech">GIT </div>
            <div className="tech">Foundation</div>
            <div className="tech">SCSS</div>
            <div className="tech">Some </div>
            <div className="tech">Wordpress</div>
          </div>
        </Parallax>
        </div>
          </section>
        <section className="case-study-projects">
        <Parallax y={[-80,20]} className="head__scroll-outer"><div className="case-study-projects__head">Projects</div></Parallax>
          <div className="case-study-projects__body">
            <div className="projects">

              <div className="project odd" data-aos="flip-up" >
              <div className="project-display"></div>
                <div className="project-head">

                  <Parallax y={[-30, 15]} className="head__scroll-outer">
                    <div className="project-head__scroll">
                    </div>
                  </Parallax>

                  <Parallax y={[15, -5]} className="head__project-details">
                    <div className="head__project-detail">
                      <div className="project-title"> Monalisa Studio</div><span className="dot">

                        <div className="dot-orange"
                              data-aos="flip-up"
                              ></div>

                      </span>
                    </div>
                  <div className="project-description">
                    <Parallax y={[-90,20]}><p >Small Buisness Website</p></Parallax>
                    <Parallax y={[-50,20]}><p >A website for wedding and event photography studio based in kochi.</p></Parallax>
                  </div>
                    
                  </Parallax>
                
                </div>
                <div className="project-body">
                  <Parallax y={[20, -20]} className="body__scroll-outer">
                    <div className="project-body__scroll">
                      <div className="view-project">
                        <svg xmlns="http://www.w3.org/2000/svg" width="315.264" height="65.354" viewBox="0 0 315.264 65.354">
                          <g id="Group_143" data-name="Group 143" transform="translate(-1152 -6940.962)">
                            <text id="View_Project_" data-name="View Project   " transform="translate(1152 6987.64)" fill="#ef9e4b" font-size="40" font-family="ProductSans-Regular, Product Sans"><tspan x="0" y="0" >View Project   </tspan></text>
                            <g id="Path_317" data-name="Path 317" transform="translate(1403.26 6930.104)" fill="none">
                              <path d="M35.662,10.859C55.357,10.859,64,26.12,64,45.815S56.781,78.65,35.662,75.834,0,59.868,0,40.172,15.966,10.859,35.662,10.859Z" stroke="none"/>
                              <path d="M 35.66162872314453 12.85894012451172 C 30.87342071533203 12.85894012451172 26.38665390014648 13.44258880615234 22.32596588134766 14.59367370605469 C 18.21155166625977 15.75998687744141 14.61937713623047 17.48698425292969 11.64920806884766 19.72670745849609 C 8.587375640869141 22.03555297851562 6.214786529541016 24.87471771240234 4.597366333007812 28.16530990600586 C 2.873874664306641 31.67167663574219 1.999996185302734 35.71138763427734 1.999996185302734 40.1722526550293 C 1.999996185302734 44.72755432128906 2.8233642578125 49.00482940673828 4.447231292724609 52.88527679443359 C 6.013519287109375 56.62810897827148 8.320930480957031 59.99715423583984 11.30537414550781 62.89880752563477 C 17.2862548828125 68.71379852294922 25.79991912841797 72.50115203857422 35.92598724365234 73.85143280029297 C 37.72714233398438 74.09162139892578 39.45732879638672 74.21339416503906 41.06846618652344 74.21339416503906 C 44.87948608398438 74.21339416503906 48.19532012939453 73.53194427490234 50.92388534545898 72.18795013427734 C 53.46273040771484 70.93740844726562 55.58710861206055 69.06146240234375 57.23802185058594 66.61222839355469 C 60.40010833740234 61.92106628417969 62.00342178344727 54.92387390136719 62.00342178344727 45.81501007080078 C 62.00342178344727 36.00522994995117 59.79190826416016 27.81761932373047 55.60796356201172 22.13732147216797 C 51.0731315612793 15.98064422607422 44.36222076416016 12.85894012451172 35.66162872314453 12.85894012451172 M 35.66162872314453 10.85894012451172 C 55.35699844360352 10.85894012451172 64.00341796875 26.11962890625 64.00341796875 45.81501007080078 C 64.00341796875 63.72405242919922 58.02982330322266 76.21339416503906 41.06845855712891 76.21339416503906 C 39.37664794921875 76.21339416503906 37.57708740234375 76.08930969238281 35.66162872314453 75.83388519287109 C 14.54263305664062 73.01773071289062 0 59.86761856079102 0 40.1722526550293 C 0 20.47688293457031 15.96625518798828 10.85894012451172 35.66162872314453 10.85894012451172 Z" stroke="none" fill="#ffad58"/>
                            </g>
                            <path id="ic_keyboard_arrow_right_24px" d="M8.59,30.46,19.277,19.75,8.59,9.04l3.29-3.29,14,14-14,14Z" transform="translate(1421.027 6953.89)" fill="#ef9e4b"/>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </Parallax>
                </div>
              </div>

              <div className="project even"  data-aos="flip-up">
                <div className="project-display"></div>
                <div className="project-head">

                  <Parallax y={[-30, 15]} className="head__scroll-outer">
                    <div className="project-head__scroll">
                    </div>
                  </Parallax>

                  <Parallax y={[15, -5]} className="head__project-details">
                    <div className="head__project-detail">
                      <div className="project-title"> Apeiro Movies </div><span className="dot">

                        <div className="dot-orange"
                              data-aos="flip-up"
                              ></div>

                      </span>
                    </div>
                  <div className="project-description">
                    <Parallax y={[-90,20]}><p >UI/UX Design</p></Parallax>
                    <Parallax y={[-50,20]}><p >A movie diary web app developed using React and runs on firebase</p></Parallax>
                  </div>
                    
                  </Parallax>
                
                </div>
                <div className="project-body">
                  <Parallax y={[60, -60]} className="body__scroll-outer">
                    <div className="project-body__scroll"></div>
                  </Parallax>
                </div>
              </div>
              
              <div className="project odd" data-aos="flip-up">
              <div className="project-display"></div>
                <div className="project-head">

                  <Parallax y={[-30, 15]} className="head__scroll-outer">
                    <div className="project-head__scroll">
                    </div>
                  </Parallax>

                  <Parallax y={[15, -5]} className="head__project-details">
                    <div className="head__project-detail">
                      <div className="project-title"> Apeiro Movies </div><span className="dot">

                        <div className="dot-orange"
                              data-aos="flip-up"
                              ></div>

                      </span>
                    </div>
                  <div className="project-description">
                    <Parallax y={[-90,20]}><p >UI/UX Design</p></Parallax>
                    <Parallax y={[-50,20]}><p >A movie diary web app developed using React and runs on firebase</p></Parallax>
                  </div>
                    
                  </Parallax>
                
                </div>
                <div className="project-body">
                  <Parallax y={[60, -60]} className="body__scroll-outer">
                    <div className="project-body__scroll"></div>
                  </Parallax>
                </div>
              </div>
              </div>
          </div>
        </section>
        <section className="illustrations"> 
          <Parallax y={[-80,40]} className="head__scroll-outer"><div className="illustrations__head">Illustrations</div></Parallax>
          <div className="illustrations__body">
            
          <div className="art-strip">
          <Parallax x={[10, -100]}>
            <div className="block"></div>
            {/* <div className="block">2</div>
            <div className="block">3</div>
            <div className="block">4</div>
            <div className="block">5</div> */}
          </Parallax>
          </div>
        </div>
        </section>
        {/* Frequency Asked  Questions */}
        <section className="faq">
          <Parallax y={[-80,60]} className="head__scroll-outer"><div className="faq__head">Frequently Asked Questions</div></Parallax>
          <div className="faq__body">
            <div className="faq__questions">
              <div className="question-answer">
                <div className="question">
                  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto et eaque, libero adipisci laudantium quos!</h2>
                  <div className="plus-icon"></div>
                  <div className="answer"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto et eaque, libero adipisci laudantium quos!</p></div>
                  
                  </div>
                <div className="question">
                  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto et eaque, libero adipisci laudantium quos!</h2>
                  <div className="plus-icon"></div>
                  <div className="answer"><p></p></div>
                  
                  </div>
                <div className="question">
                  <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto et eaque, libero adipisci laudantium quos!</h2>
                  <div className="plus-icon"></div>
                  <div className="answer"><p></p></div>
                  
                  </div>
                </div>
              </div>
            <div className="faq__image"></div>
          </div>
        </section>

        {/* Call to action */}
        <section className="cta">
          <div className="end">
            <h1>And Now its your turn to say</h1>
            <p>I’ll Make it easy for you… This is how to pronounce my name - Abhay</p>
            <p>I would love to here from you?</p>
          </div>
          <div className="email-cta">
                <div className="icon"></div>
                <div className="email-address">abhaykvincent@gmail.com</div>
          </div>
          <div className="cta-social social-links">
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
                <div className="social"></div>
              </div>
          </section>
        
        {/* Footer */}
        <footer>
          <div className="footer-quote">
            <div className="name">Lorem, ipsum.</div>
            <div className="quote">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, et?</div>
          </div>
        </footer>

      </div>

    </ParallaxProvider> /* Parellax provider CONTAINER !!  END !! */
  );
}

export default App;



// This section scraped out for future  use.
// Currently  not using in the sections.

// Original referance [ REF-1 ]
// Can  input inside  REF-1 

