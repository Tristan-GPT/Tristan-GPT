import { Lanyard } from '../../utils/Lanyard';
import './Unique.css';

function Unique() {
    return (
        <>

        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/sponsors">Sponsors</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        

        <div className='container'>
            <h1>I'm <span className='title'>Tristan-GPT</span><br /> & I'm a developer</h1>
        <h1 className='imgs'>
            <a href="mailto:tristangpt.pro@gmail.com"><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M4160 4384 c-96 -36 -902 -333 -1791 -660 -890 -326 -1629 -599
-1644 -606 -30 -14 -55 -55 -55 -92 0 -14 12 -39 27 -55 19 -20 261 -142 768
-387 407 -196 745 -362 751 -368 6 -6 172 -344 369 -751 197 -407 367 -750
378 -762 42 -47 124 -37 153 20 9 16 53 131 99 256 46 124 342 931 659 1794
317 862 576 1570 576 1573 0 3 -7 21 -16 39 -14 29 -65 66 -91 64 -4 0 -87
-30 -183 -65z m7 -231 c-2 -10 -108 -299 -235 -643 -126 -344 -379 -1032 -562
-1530 -183 -498 -337 -916 -342 -929 -8 -21 -48 56 -304 584 -162 335 -296
616 -297 626 -1 10 160 182 406 432 386 394 407 417 407 452 0 54 -44 95 -101
95 l-43 0 -413 -412 -412 -412 -243 118 c-134 64 -413 199 -620 299 -207 100
-374 185 -370 188 4 4 27 13 52 22 25 8 482 176 1015 372 534 196 1067 392
1185 436 118 43 361 132 540 198 179 66 329 120 334 121 4 0 6 -8 3 -17z"/>
</g>
</svg>
</a>
            <a href="https://www.discord.com/users/705425854825496656"><img src="/discord.png" alt="" className='images'/></a>
            <a href="https://github.com/Tristan-GPT"><img src="/github.png" alt="" className='images'/></a>
            <a href="https://www.instagram.com/tristangpt/"><img src="/instagram.png" alt="" className='images'/></a>
        </h1>
        <Lanyard></Lanyard>
        </div>
        </>
    )
}

export default Unique;