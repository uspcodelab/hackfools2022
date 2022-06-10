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
font-family: 'Bungee', cursive;
font-size: max(1.75em, 6vw);

animation: .5s open;

a {
    margin: .2em;
    text-decoration: none;
    color: #ffd342;
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
height: 6vh;
display: flex;
justify-content: space-between;
align-items: center;
font-family: 'Bungee', cursive;
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
    text-decoration: none;
    color: white;
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
