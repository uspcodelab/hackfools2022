import styled from 'styled-components'

export const StyledSidebar = styled.div`
display: flex;
flex-direction: column;
align-items: stretch;
gap: .5em;

background-color: #FFA4A4;
height: 100%;
max-width: 70%;
padding: 1em .5em;
font-size: max(1.75em, 6vw);
animation: .5s open;

a {
    color: #ffd342;
    margin: .2em;
    display: flex;
    align-items: center;
    gap: .5em;
}

@keyframes open {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
`

export const Overlay = styled.div`
background-color: black;
opacity: 0.5;
height: 100%;
width: 100vw;
position: absolute;
top: 0;
z-index: -1;
`

export const StyledHeader = styled.div`
position: sticky;
top: 0;
margin: 0;
background-color: #FFA4A4;
max-height: 6vh;
height: 6vh;
display: flex;
justify-content: space-between;
align-items: center;
font-size: max(1.25em, 1.8vw);
padding: .5em .5em;

img {
    height: 100%;
}
div {
    display: flex;
    flex-wrap: nowrap;
    gap: 1em;
}
a {
    color: #ffd342;
    transition: .5s;
}
a:hover {
    text-shadow:
        0 0 7px #ffd342,
        0 0 42px #ffd342;
}

button {
    height: 100%;
    border: 0;
    background-color: inherit;
}

@media screen and (max-width: 768px) {
    justify-content: flex-start;
}
`

export const EventDiv = styled.div`
font-size: max(min(1.6em, 3.2vw), 1.2em);
height: 100vh;
background-image: url(../../images/eventBackground.png);
display: flex;
align-items: center;
gap: 5vw;
padding: 0 2.5vw;
justify-content: space-around;
text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;

a {color: #d92400}

@media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
}
`

export const ProjectsDiv = styled.div`
height: 100vh;
font-size: max(min(2em, 3.2vw), 1.2em);
background-image: url(../../images/projectsBackground.png);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

color: #d92400;
text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;

a {color: #ffd342;}

ul{
    list-style-type: none;
    background-color: rgba(0,0,0, 0.8);
    padding: 1em 2em;
    border-radius: .5em;
}
`

export const AboutDiv = styled.div`
height: 100vh;
font-size: max(min(1.6em, 3.2vw), 1.2em);
display: flex;
justify-content: space-around;
align-items: center;
padding: 2.5em;
#logo {
    width: 45vw;
}
#social {
    display: flex;
    gap: 2em;
}
#social > a > img {
    width: max(5vw, 3.2em);
    filter: grayscale(100%);
    transition: .5s;
}
#social > a > img:hover {filter: grayscale(0);}

@media screen and (max-width: 768px) {
    flex-direction: column;
    #social {display:flex; justify-content: space-around;}
    #social > a > img {filter: grayscale(0);}
}
`
