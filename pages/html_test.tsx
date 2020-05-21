import React, {FC, ComponentProps, useState, useEffect, PropsWithChildren} from 'react';

function degToRad(degrees: number) {
    return degrees * Math.PI / 180;
}

const InputCanvas: FC<ComponentProps<any>> = (props) => {
    const [penSize, setPenSize] = useState(30);
    const [pressed, setPressed] = useState(false);
    const [color, setColor] = useState("#ffffff");
    const [coords, setCoords] = useState([0, 0]);
    let canvas: HTMLCanvasElement | null = null;
    const draw = () => {
        if (pressed && canvas) {
            console.log('drawing');
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(coords[0], coords[1] - 85, penSize, degToRad(0), degToRad(360), false);
            ctx.fill();
        }
    }
    useEffect(() => {
        requestAnimationFrame(draw)
    })
    return (<div>
        <div className="flex flex-col bg-gray-200 w-1/2">
            <input type="color" aria-label="select pen color" value={color} onChange={(e) => setColor(e.target.value)}/>
            <label className="flex items-center">
                <input type="range" min="2" max="50" value={penSize} onaria-label="select pen size"
                       onChange={(e) => setPenSize(parseInt(e.target.value))}/>
                <span>{penSize}</span>
            </label>
            <input type="button" value="Clear canvas"/>
        </div>
        <canvas className="w-full h-80"
                ref={(element) => canvas = element}
                onMouseDown={(e) => setPressed(true)}
                onMouseUp={(e) => setPressed(false)}
                onMouseMove={(e) => {
                    if (pressed) {
                        const curX = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
                        const curY = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
                        setCoords([curX, curY]);
                    }
                }}
        ><p>Canvas not supported</p></canvas>
        <style jsx>{`
`}</style>
    </div>);
}

interface LabeledInputProps {
    name: string
}

const LabeledInput: FC<LabeledInputProps> = (props) => {
    return (
        <div>
            <label>
                <input type="checkbox" onClick={() => console.log("clicked")}/>
                <span>{props.name}</span>
            </label>
        </div>
    )
}
const HtmlTest: FC<ComponentProps<any>> = (props) => {
    return (
        <>
            <div>
                <a href="https://news.sina.com.cn" target="_blank">
                    <code>
                        print("Hello world");
                        println("Hello world")
                    </code>
                </a>
                <p>You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style your <abbr
                    title="HyperText Markup Language">HTML</abbr>.</p>
            </div>

            <div>
                <p>Contact the author of this page:</p>

                <address>
                    <a href="mailto:jim@rock.com">jim@rock.com</a><br/>
                    <a href="tel:+13115552368">(311) 555-2368</a>
                </address>
            </div>
            <article className="bg-gray-200 w-1/5 p-2">
                <h1 className="px-2 text-base">Weather forecast for Seattle</h1>
                <article className="bg-white p-2">
                    <h2 className="text-sm font-semibold">03 March 2018</h2>
                    <p className="text-xs font-hairline">Rain.</p>
                </article>
                <article className="bg-white p-2 mt-2">
                    <h2 className="text-sm font-semibold">04 March 2018</h2>
                    <p className="text-xs font-hairline">Periods of rain.</p>
                </article>
                <article className="bg-white p-2 mt-2">
                    <h2 className="text-sm font-semibold">05 March 2018</h2>
                    <p className="text-xs font-hairline">Heavy rain.</p>
                </article>
            </article>

            <article>
                <p>Salamanders are a group of amphibians with a lizard-like appearance, including short legs and a tail
                    in both larval and adult forms.</p>

                <aside className="w-2/5 pl-2 ml-2 text-indigo-500 float-right" style={{
                    boxShadow: 'inset 5px 0 5px -5px #29627e',
                }}>
                    <p className="m-2">The Rough-skinned Newt defends itself with a deadly neurotoxin.</p>
                </aside>

                <p>Several species of salamander inhabit the temperate rainforest of the Pacific Northwest, including
                    the Ensatina, the Northwestern Salamander and the Rough-skinned Newt. Most salamanders are
                    nocturnal, and hunt for insects, worms and other small creatures.</p>
            </article>

            <div>
                <audio className="focus:outline-none" controls
                       src="https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3">
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>

            <p>The two most popular science courses offered by the school are <b>chemistry</b> (the
                study of chemicals and the composition of substances) and <b>physics</b> (the study of
                the nature and properties of matter and energy).</p>
            <div>
                <button type="button"
                        className="border-0 leading-10 text-white px-4 text-base text-center rounded-lg">
                    Add to favorites
                    <style jsx>
                        {`
                         button{
                            background-color:rgb(220,0,0,1);
                            background-image:linear-gradient(to top left,rgba(0,0,0,.2), rgba(0,0,0,.2) 30%,rgba(0,0,0,0));
                            box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6), inset -2px -2px 3px rgba(0, 0, 0, .6);
                         }
                         button:active {
                            box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6), inset 2px 2px 3px rgba(0, 0, 0, .6);
                         }
                         button:hover {
                            background-color: rgba(255,0,0,1);
                         }
                `}
                    </style>
                </button>
            </div>

            <table className="border-collapse border-2 border-solid">
                <caption>He-Man and Skeletor facts</caption>
                <tr>
                    <td></td>
                    <th scope="col" className="heman">He-Man</th>
                    <th scope="col" className="skeletor">Skeletor</th>
                </tr>
                <tr>
                    <th scope="row">Role</th>
                    <td>Hero</td>
                    <td>Villain</td>
                </tr>
                <tr>
                    <th scope="row">Weapon</th>
                    <td>Power Sword</td>
                    <td>Havoc Staff</td>
                </tr>
                <tr>
                    <th scope="row">Dark secret</th>
                    <td>Expert florist</td>
                    <td>Cries at romcoms</td>
                </tr>
                <style jsx>{`
          caption {
            padding: 10px;
            caption-side: revert;
          }
          
          table {
            letter-spacing: 1px;
            font-family: sans-serif;
            font-size: .8rem;
          }
          
          td,th {
            border: 1px solid rgb(190,190,190);
            padding: 7px 5px;
          }
          th {
            background-color:rgb(235,235,235);
          }
          td {
            text-align: center;
          }
          tr:nth-child(even) td {
            background-color: rgb(250,250,250);
          }
          tr:nth-child(odd) td {
            background-color: rgb(240,240,240);
          }
          .heman {
            font: 1.4rem molot;
            text-shadow: 1px 1px 1px #fff, 2px 2px 1px #000;
          }
          .skeletor {
            font: 1.7rem rapscallion;
            letter-spacing: 3px;
            text-shadow: 1px 1px 0 #fff, 0 0 9px #000;
          }
          
`}</style>
            </table>

            <div>
                <p>datalist</p>
                <label htmlFor="ice-cream-choice">Choose a flavor:</label>
                <input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice"/>
                <datalist id="ice-cream-flavors">
                    <option value="Chocolate"/>
                    <option value="Coconut"/>
                    <option value="Mint"/>
                    <option value="Strawberry"/>
                    <option value="Vanilla"/>
                </datalist>
            </div>


            <div>
                <p>dl,dt,dd</p>
                <p>Cryptids of Cornwall:</p>
                <dl>
                    <dt>Beast of Bodmin</dt>
                    <dt>Name</dt>
                    <dd>A large feline inhabiting Bodmin Moor.</dd>
                    <style jsx>{`
  dt::after {
    content: ": ";
  }
`}</style>
                </dl>
            </div>
            <figure>
                <img src="https://interactive-examples.mdn.mozilla.net/media/examples/elephant-660-480.jpg"
                     alt="Elephant at sunset"/>
                <figcaption>An elephant at sunset</figcaption>
                <style jsx>{`
  figure {
    border: thin #c0c0c0 solid;
    display: flex;
    flex-flow: column;
    padding: 5px;
    max-width: 220px;
    margin: auto;
  }
  img {
    max-width: 220px;
    max-height: 150px;
  }
  figcaption {
      background-color: #222;
      color: #fff;
      padding: 3px;
      text-align: center;
      font: italic smaller sans-serif;
  }
`}</style>
            </figure>

            <footer>
                <span>@ 2020 Gandalf</span>
                <style jsx>{`
  footer {
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: hsl(227,50%,50%);
    color: #fff;
  }
`}</style>
            </footer>

            <div>
                <p>header</p>
                <header>
                    <h1>Cute Puppies Express!</h1>
                </header>
                <main>
                    <p>I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and their ears are so, so
                        snuggly soft!</p>
                </main>
                <style jsx>
                    {`
h1 {
  margin: 2%;
}
`}
                </style>
            </div>
            <div>
                <p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>
                <hr/>
                <p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
                <style jsx>{`
hr {
border: none;
border-top: 3px double #333;
height: 5px;
overflow: visible;
text-align: center;
}
hr:after {
  content: '§';
  position: relative;
  padding: 0 4px;
  background-color: hsl(0,0%,100%);
  top: -13px;
}
`}</style>
            </div>
            <div>
                <input type="file" accept=".jpeg|.png"/>
            </div>
            <div>
                <label className="flex items-center">
                    <input className="form-radio" type="radio" name="one"/>
                    <span className="ml-1">One</span>
                </label>
            </div>

            <InputCanvas/>

            <div>
                <div>
                    <input type="checkbox" id="horns" name="horns"/>
                    <label htmlFor="horns">Horns</label>
                </div>

                <label>
                    <input type="checkbox"/>
                    <span>Foo</span>
                </label>
            </div>

            <div>
                <p>ins,del</p>
                <del className="block no-underline bg-red-200 relative flex items-center">
                    <p className="ml-6 text-base">"I apologize for the delay."</p>
                </del>
                <ins dateTime="2018-05" className="block no-underline bg-teal-200 relative flex items-center">
                    <p className="ml-6 text-base">"A wizard is never late ..."</p>
                </ins>
                <style jsx>
                    {`
  del::before {
    content: '-';
  }
  ins::before {
    content:'+';
  }
  del::before,
  ins::before {
    position: absolute;
    left : .5rem;
    font-family: monospace;
  }
`}
                </style>
            </div>

            <p>Please press <kbd
                className="inline-block bg-gray-400 rounded-md border-2 border-solid border-gray-600 text-gray-600 font-semibold leading-4 px-px py-1">
                Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
            <p>Please press <kbd
                className="bg-gray-400 rounded-md border-2 border-solid border-gray-600 text-gray-600 font-semibold leading-4 px-px py-1">
                Ctrl
            </kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
            <LabeledInput name={"HEllo"}/>


            <div>
                <map name="infographic">
                    <area shape="poly" coords="130,147,200,107,254,219,130,228"
                          href="https://developer.mozilla.org/docs/Web/HTML"
                          target="_blank" alt="HTML"/>
                    <area shape="poly" coords="130,147,130,228,6,219,59,107"
                          href="https://developer.mozilla.org/docs/Web/CSS"
                          target="_blank" alt="CSS"/>
                    <area shape="poly" coords="130,147,200,107,130,4,59,107"
                          href="https://developer.mozilla.org/docs/Web/JavaScript"
                          target="_blank" alt="JavaScript"/>
                </map>
                <img useMap="#infographic"
                     src="https://interactive-examples.mdn.mozilla.net/media/examples/mdn-info2.png"
                     alt="MDN infographic"/>
            </div>
            <div>
                <p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>

                <p>Most <mark>salamander</mark>s are nocturnal, and hunt for insects, worms, and other small creatures.</p>
            </div>

            <div>
                <label htmlFor="pet-select">Choose a pet:</label>
                <select id="pet-select">
                    <option value="">--Please choose an option--</option>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="parrot">Parrot</option>
                    <option value="spider">Spider</option>
                    <option value="goldfish">Goldfish</option>
                </select>
            </div>
        </>
    );
}

export default HtmlTest;