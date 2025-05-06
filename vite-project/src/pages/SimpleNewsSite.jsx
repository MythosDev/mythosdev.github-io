import React from "react";
import Img from "/Cover_Art.png";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Demo = 'demo_pic.png'

const Page = () => {
    return (
        <div className="page">
            <div className="flex justify-center flex-col items-center m-0">
                <img src="/Imperialist Header.png" alt="" className="w-[1000px] object-cover align-middle"/>
                <h1 className="m-0">The Lighthouse</h1>
            </div>
            <menu>
                <h2>home</h2>
                <h2>news</h2>
            </menu>
            <div className="mainbody">
                <article>
                    <h1>Masaaki Yuasa</h1>
                    <h2>His Dynamic Filmography</h2>
                    <h3>2025-03-27</h3>
                    <h3>7 min</h3>
                    <div className="author">
                        <img src={Demo} className="icon"></img>
                        <div className="names">
                            <h2>Captain Nobody</h2>
                        </div>
                        <div className="linkrow">
                            <SocialMediaLinks />
                        </div>
                    </div>
                    <div>
                        <p>Divider</p>
                    </div>
                    <img src="" alt="" />
                    <p>
                    Introduction
                    Masaaki Yuasa is one of the most distinctive and innovative directors in Japanese animation, 
                    known for his rejection of conventional industry norms in favor of an expressive, fluid, 
                    and highly subjective visual style. His works challenge the dominant aesthetic of mainstream anime, 
                    instead prioritizing emotional intensity and formal experimentation. Through the lens of auteur theory, 
                    Yuasa’s films can be understood as an extension of his artistic philosophy—one that embraces movement, emotional subjectivity, and stylistic rebellion. This paper argues that Yuasa’s unique approach to animation, characterized by unrestrained visual expression, emotionally driven storytelling, and a fluid relationship between reality and perception, cements his status as an auteur. 

                    </p>
                    <img src={Img} alt="" />
                    <p>
                    Yuasa’s Auteur Identity
                    The auteur theory, as outlined by Andrew Sarris (1963), argues that a director’s personal vision is central to a film’s artistic identity, 
                    even in a highly collaborative medium like cinema. While animation often involves large teams, Yuasa’s authorial influence remains evident through his consistent use of exaggerated movement, 
                    emotionally charged narratives, and experimental visual design. His films do not merely tell stories—they embody a philosophy of artistic and emotional liberation, 
                    using animation’s limitless potential to visualize subjective perception. By deconstructing Yuasa’s approach to subjectivity, movement, and collaboration, 
                    we can see how his works resist dominant animation conventions while expressing a clear authorial vision. <br/> <br/>

                    Masaaki Yuasa has made many films over his career that vary wildly in tone from film to film, but I want to highlight two of his most oppositional works, 
                    The Night Is Short, Walk On Girl (2017) and Devilman Crybaby (2018). These two films best exemplify the core stylistic traits that persist across his range of works. 
                    The Night Is Short, Walk On Girl embodies the celebratory, free-spirited side of Yuasa’s filmmaking, following a surreal odyssey of youthful adventure where time and reality morph around the characters’ emotions. 
                    In contrast, Devilman Crybaby embraces Yuasa’s darker tendencies, depicting a world of hedonism, violence, and existential despair. While one revels in the whimsical energy of fleeting romance, 
                    the other descends into tragic, apocalyptic horror—yet both share the same unrestrained animation, fluidity of form, and thematic preoccupation with desire, passion, fate, and transformation.  <br/><br/>

                    Although distinct in tone and subject matter, both films share key stylistic and thematic similarities. Yuasa’s works fluctuate between exuberant joy and visceral chaos, 
                    maintaining a kinetic intensity that prioritizes emotional expression over narrative restraint. Whether depicting euphoric romance or violent self-destruction, his films consistently embrace fluid, 
                    unrestrained movement and heightened subjectivity. His auteur signature is defined by expressive, unrefined animation; passion-driven narratives; emotionally subjective perspectives; dynamic musical sequences; 
                    and a strong emphasis on individual expression.

                    </p>
                    <div className="comment"></div>
                </article>
            </div>
            <div className="recommendations">
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
            <div className="bottombar">
                <p>@Nobody</p>
            </div>


            <style jsx>{`
                /* Override root styles */
                :global(html) {
                    background-color: #f0f0f0;
                    font-family: Arial, sans-serif;
                }

                :global(body) {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                }

                :global(body) {
                    margin: 0;
                    display: block;
                    min-width: auto;
                    min-height: auto;
                    background-color: #f0f0f0;
                  }
          
                  :global(#root) {
                    max-width: 100%;
                    padding: 1rem;
                  }
          
                  :global(:root) {
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    color: black;
                  }

                

                h1 {
                    font-weight: bold;
                    font-size: 36px;
                    text-align: center;
                }

                h2 {
                    font-weight: bold;
                    font-size: 24px;
                    text-align: center;
                }

                h3 {
                    font-weight: bold;
                    font-size: 16px;
                }

                div {
                    display flex;
                    justify-content: center;
                }

                article {
                    min-width: 250px;
                    max-width: 500px;
                    
                }

                .author {
                    display: flex;
                    margin-right: auto;
                    // justify-content: space-around;
                    gap: 5px;
                    align-items: center;
                    background-color: red;
                    padding: 5px;
                    border-radius: 15px;
                }

                .linkrow {
                    margin-left: auto;
                    justify-content: left;
                    display: flex;
                    gap: 5px;
                }

                .names {
                    display: flex;
                    flex-direction: column;
                }

                .icon {
                    border-radius: 50px;
                    // background-color: red;
                    height: 50px;
                    width: 50px;
                }

                .link {
                    border-radius: 50px;
                    background-color: red;
                    height: 40px;
                    width: 40px;
                }

                .img {
                    width: 100%;
                    height: auto;
                    display: block;
                }

                .mainbody {
                    display: flex;
                    justify-content: center;
                }

                .page {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    gap: 10px;
                    font-family: crimson;
                }


                .topbar {
                    display: inline-flex;
                    justify-content: space-around;
                }

                .bottombar {
                    display: inline-flex;
                    justify-content: center;
                    gap: 10px;
                }

                menu {
                    display: inline-flex;
                    justify-content: center;
                    gap: 10px;
                }

                .comment {
                    width: 100%;
                    height: 250px;
                    background-color: red;
                }

                .recommendations {
                    display: inline-flex;
                    justify-content: center;
                    gap: 10px;
                }

                .card {
                    width: 150px;
                    height: 100px;
                    background-color: red;
                }

                // Top Bar
                // Author Card
                // Recommenation Bar
                // Circle Link
                // Sticky Corner
                // Comments

            `}</style>
        </div>

    );

};

export default Page;