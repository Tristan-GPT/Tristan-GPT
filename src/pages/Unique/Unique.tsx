import { Lanyard } from '../../utils/Lanyard';
import './Unique.css';

function Unique() {
    return (
        <>
        <h1>I'm <span className='title'>Tristan-GPT</span><br /> & I'm a developer</h1>
        <h1>
            <a href="mailto:tristangpt.pro@gmail.com"><img src="/mail.svg" alt="" className='images'/></a>
            <a href="https://www.discord.com/users/705425854825496656"><img src="/discord.png" alt="" className='images'/></a>
            <a href="https://github.com/Tristan-GPT"><img src="/github.png" alt="" className='images'/></a>
            <a href="https://www.instagram.com/tristangpt/"><img src="/instagram.png" alt="" className='images'/></a>
        </h1>
        <Lanyard></Lanyard>
        </>
    )
}

export default Unique;